import { Link } from "react-router-dom";
import imgStar from "../../images/stars/vecteezy_5-star-rating-review-star-png-transparent_9663927.png";
import Price from "./Price";
import { useUserContext } from "../../context/UserContext";
import Swal from "sweetalert2";
import { useState } from "react";




const CardBestSellers = ({ imgProduct, text, price, item, product }) => {

  const {addCartProduct} = useUserContext()
  const [count, setCount] = useState(0);


  const handleAddToCart = () => {
    addCartProduct({
      imagen: product.imagen,
      id: product.id,
      nombre: product.nombre,
      precio: product.precio,
      quantity: count === 0 && 1,
    });
    setCount(0);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Añadido al carrito",
      showConfirmButton: false,
      timer: 1500,
  });  };

 

  return (
    <div className="rounded-xl bg-slate-50 overflow-hidden">
      <div className="w-full bg-white flex justify-center aspect-[8/8]">
        <img
          src={imgProduct}
          alt=""
          className="  object-contain transition-transform transform hover:scale-105"
        />
      </div>

      <div className="flex flex-col p-5 ">
        <div className="flex flex-col items-center gap-y-2 ">
          <div className="h-16 ">
            <p className="text-center font-medium text-sm uppercase">{text}</p>
          </div>

          <span>
            <img src={imgStar} alt="star" className="md:w-28 w-24 h-4 object-cover" />
          </span>
          <Price precio={price} />
        </div>

        <div className="flex flex-col text-sm gap-y-4 py-4 ">
          <Link to={`/tienda/producto/${item}`} >
            <button className="bg-green-700 w-full px-4 py-2 md:text-base text-xs rounded-xl text-gray-100" >
              VER PRODUCTO
            </button>
          </Link>

          <button className="bg-green-700 w-full px-4 py-2 md:text-base text-xs rounded-xl text-gray-100" onClick={handleAddToCart}>
            AÑADIR AL CARRITO
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardBestSellers;
