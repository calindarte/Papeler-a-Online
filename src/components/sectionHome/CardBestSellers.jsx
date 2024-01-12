import imgStar from "../../images/stars/vecteezy_5-star-rating-review-star-png-transparent_9663927.png"


const CardBestSellers = ({imgProduct,text,price}) => {
  return (
    <div className="rounded-xl bg-slate-50 flex items-center justify-center flex-col">
              <img
                src={imgProduct}
                alt=""
              />
              <div className="p-6 flex flex-col gap-5">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-center font-medium text-lg">
                    {text}
                  </p>
                  <span>
                    <img src={imgStar} alt="star" className="w-28 h-7 object-cover" />
                  </span>
                  <span className="text-gray-700 font-medium ">{price}</span>
                </div>
                <button className="bg-green-700 p-4 rounded-xl text-gray-100">
                  SELECCIONAR PRODUCTO
                </button>
              </div>
            </div>
  )
}

export default CardBestSellers
