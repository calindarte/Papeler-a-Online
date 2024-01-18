import { Link } from "react-router-dom";
import imgStar from "../../images/stars/vecteezy_5-star-rating-review-star-png-transparent_9663927.png";
import Price from "./Price";

const CardBestSellers = ({ imgProduct, text, price, item }) => {
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
            <img src={imgStar} alt="star" className="w-28 h-4 object-cover" />
          </span>
          <Price precio={price} />
        </div>

        <div className="flex flex-col text-sm gap-y-4 py-4 ">
          <Link to={`/tienda/producto/${item}`}>
            <button className="bg-green-700 w-full px-4 py-2 rounded-xl text-gray-100">
              VER PRODUCTO
            </button>
          </Link>
          <Link to={`tienda/producto/${item}`}>
            <button className="bg-green-700 w-full px-4 py-2 rounded-xl text-gray-100">
            AÑADIR AL CARRITO
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default CardBestSellers;
