import { useUserContext } from "../../context/UserContext";
import Price from "../sectionHome/Price";

const CartHeader = ({ setIsOpenCart, isOpenCart }) => {
  const { cartProduct, deleteCartProduct } = useUserContext();
  return (
    <div className="fixed top-0 left-0 bg-black/70 w-full h-full z-10">
      <section className="absolute right-0 top-0 w-[30%] z-10 bg-gray-50 h-full shadow-xl">
        <div className="flex flex-col">
          <div className="flex p-4">
            <h4 className="text-lg font-bold">Carrito</h4>
            <button
              className="ml-auto"
              onClick={() => setIsOpenCart(!isOpenCart)}
            >
              <span className="material-symbols-outlined flex">close</span>
            </button>
          </div>
          <hr />
          {cartProduct.length === 0 && (
            <p className="py-14 text-center">Tu carrito está vacío</p>
          )}
          {cartProduct.map((product) => (
            <article
              key={product.id}
              className="grid grid-cols-[1fr_4fr_1fr] gap-6 px-4 py-4 items-center"
            >
              <img src={product.imagen} alt="" />
              <div>
                <h6 className="uppercase">{product.nombre}</h6>

                <p className="flex justify-between">
                  <span>
                    <Price precio={product.precio} /> x {product.quantity}
                  </span>
                  <span><Price precio={product.precio * product.quantity} /></span>
                </p>
              </div>
              <button
                className="ml-auto"
                onClick={() => deleteCartProduct(product.id)}
              >
                <span className="material-symbols-outlined flex text-xl">
                  close
                </span>
              </button>
            </article>
          ))}
          {cartProduct.length !== 0 && (

            <div className="px-4">
                <div>
                    <p>Subtotal: <span>
                    <Price precio={20} />
                  </span></p>
                </div>
              <button className="bg-orange-600 hover:bg-orange-700 transition-all text-white rounded-md py-4 w-full">
                Finalizar Compra
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CartHeader;
