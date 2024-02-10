import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useFirestore } from "../hooks/useFirestore";
import Price from "../components/sectionHome/Price";
import Swal from "sweetalert2";

import imgWhatsapp from "../images/redesSociales/Logo Whatsapp PNG.jpg";
import { useUserContext } from "../context/UserContext";
import BestSellersCarousel from "../components/sectionHome/BestSellersCarousel";
import IconVerified from "../components/sectionProductDetails/IconVerified";

const ProductDetails = () => {
  const { id } = useParams();
  const whatsappNumber = "3014782097";

  const { addCartProduct } = useUserContext();

  const { error, getProductById, loading, product } = useFirestore();

  const [count, setCount] = useState(0);

  const decrementCount = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  useEffect(() => {
    getProductById(id);
  }, [id]);

  if (loading.getProductById) return <p>Cargando detalles del producto...</p>;

  if (error) return <p>Error al cargar los detalles del producto: {error}</p>;

  const handleAddToCart = () => {
    addCartProduct({
      imagen: product.imagen,
      id: product.id,
      nombre: product.nombre,
      precio: product.precio,
      quantity: count === 0 ? 1 : count,
    });
    setCount(0);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Añadido al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const mensajePredeterminado = `¡Hola! Quiero comprar el producto "${product.nombre}" de la categoría "${product.categoria}". ¿Cuál es el precio y la disponibilidad?`;

  return (
    <div className="md:px-14 px-6 md:py-12 bg-[#f5f5f5] ">
      <div className="py-6">
        <ul className="flex gap-x-3 flex-wrap uppercase md:text-sm text-xs text-gray-900">
          <Link to="/" className="underline">
            <li>inicio</li>
          </Link>
          /
          <Link to="/tienda" className="underline">
            <li>tienda</li>
          </Link>
          /
          <Link to={`/tienda/${product.categoria}`} className="underline">
            <li>{product.categoria}</li>
          </Link>
          /<li className="">{product.nombre}</li>
        </ul>
      </div>

      <div className="grid md:grid-cols-2 md:grid-rows-1 items-stretch shadow-lg ">
        <div className="bg-white overflow-hidden flex justify-center items-center">
          <img
            src={product.imagen}
            alt={product.nombre}
            className="object-contain md:size-96 size-60 transition-transform transform  hover:scale-150 hover:cursor-zoom-in"
          />
        </div>

        <div className="bg-white border-l">
          <div className="flex flex-col gap-y-4 p-8">
            <span className="uppercase text-green-600 font-medium tracking-widest  md:text-xl text-xs">
              {product.categoria}
            </span>
            <p className="uppercase md:text-4xl ">{product.nombre}</p>
            <Price
              precio={product.precio}
              className="md:text-xl font-medium lining-nums text-gray-600"
            />
            <span className="text-green-600 font-medium text-sm md:text-base">{`${product.stock} disponibles`}</span>
          </div>

          <div className="flex flex-col md:flex-row p-6 gap-8">
            <div className="border-orange-800 border flex items-center justify-center gap-6 px-6 ">
              <button
                className="text-3xl text-orange-600"
                onClick={decrementCount}
              >
                -
              </button>
              <span className="text-xl text-gray-800">{count}</span>
              <button
                className="text-3xl text-orange-600"
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </div>
            <div className="flex md:flex-row flex-col gap-5">
              <button
                className="bg-orange-600 uppercase text-xs md:text-sm font-medium text-white rounded-xl py-3 px-4  hover:bg-orange-700"
                onClick={handleAddToCart}
              >
                Añadir al carrito
              </button>

              <button
                className="bg-orange-600 uppercase md:text-sm text-xs font-medium text-white rounded-xl py-3 px-4  hover:bg-orange-700"
                onClick={handleAddToCart}
              >
                Comprar ahora
              </button>
            </div>
          </div>

          <div className="p-6 ">
            <button className="py-2 px-4 rounded-full bg-green-500 ">
              <Link
                to={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
                  mensajePredeterminado
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-x-3"
              >
                <img
                  src={imgWhatsapp}
                  alt="logo whatsapp "
                  className="rounded-full size-8"
                />
                <p className="text-gray-50 uppercase font-medium md:text-sm text-xs">
                  Comprar
                </p>
              </Link>
            </button>
          </div>

          <div className="px-6 py-8 flex flex-col gap-y-4">
            <span className="font-bold text-gray-900 md:text-xl">
              Servicio 100% garantizado
            </span>
            <ul className="flex flex-col gap-y-2">
              <li className="flex items-center">
                <IconVerified />
                <span>Productos de calidad</span>
              </li>
              <li className="flex items-center">
              <IconVerified />
                <span>Reembolsos sin problemas</span>
              </li>
              <li className="flex items-center">
              <IconVerified />
                <span>Pagos seguros</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div>
        <BestSellersCarousel />
      </div>
    </div>
  );
};

export default ProductDetails;
