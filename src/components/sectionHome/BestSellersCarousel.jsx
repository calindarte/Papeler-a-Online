import { useEffect, useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";
import { Link } from "react-router-dom";
import CardBestSellers from "./CardBestSellers";
import IconArrowBack from "./IconArrowBack";
import IconArrowNext from "./IconArrowNext";

const BestSellersCarousel = () => {
  const { data, loading, getData } = useFirestore();
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    getData();
  }, []);

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 4 < data.length ? prevIndex + 4 : 0
    );
  };

  const handlePre = () => {
    setStartIndex((prevIndex) =>
      prevIndex - 4 >= 0 ? prevIndex - 4 : Math.floor(data.length / 4) * 4
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(intervalId);
  }, [startIndex, data]);

  return (
    <section className="bg-[#f5f5f5]">
      <div>
        <div className="flex flex-col justify-center items-center gap-6 p-10">
          <h2 className="font-mono text-5xl">Más Vendidos</h2>
          <p className="text-lg text-gray-500">
            Los artículos de papelería más comprados
          </p>
        </div>

        <div className="grid grid-cols-4 gap-x-6 px-20 justify-center relative transition-none">
          {loading.getData ? (
            <p className="text-center">Cargando productos...</p>
          ) : (
            data.slice(startIndex, startIndex + 4).map((item) => (
              <div key={item.id}>
                <CardBestSellers
                  imgProduct={item.imagen}
                  text={item.nombre}
                  price={item.precio}
                  item={item.id}
                  product={item}
                  onClick={onclick}
                />
              </div>
            ))
          )}

          <div className="absolute top-1/2 left-0 -translate-y-1/2 flex items-center justify-between w-full px-4">
            <button
              className="bg-[rgba(0,0,0,.6)] h-14 w-9 grid place-items-center rounded-sm"
              onClick={handlePre}
            >
              <IconArrowBack className="fill-white" />
            </button>
            <button
              className="bg-[rgba(0,0,0,.6)] h-14 w-9 grid place-items-center rounded-sm"
              onClick={handleNext}
            >
              <IconArrowNext className="fill-white" />
            </button>
          </div>
        </div>
        <div className="text-center py-20">
          <Link
            to="/tienda"
            className="bg-green-700 hover:bg-green-600 px-16 py-2 rounded-full text-gray-100 tracking-wider"
          >
            VER TODOS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSellersCarousel;
