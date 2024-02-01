import { useEffect, useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";
import { Link } from "react-router-dom";
import CardBestSellers from "./CardBestSellers";
import IconArrowBack from "./IconArrowBack";
import IconArrowNext from "./IconArrowNext";
import { useMediaQuery } from "react-responsive";

const BestSellersCarousel = () => {
  const { data, loading, getData } = useFirestore();
  const [startIndex, setStartIndex] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 767 }); 


  useEffect(() => {
    getData();
  }, []);

  const itemsToShow = isMobile ? 1 : 4;


  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + itemsToShow < data.length ? prevIndex + itemsToShow : 0
    );
  };

  const handlePre = () => {
    setStartIndex((prevIndex) =>
      prevIndex - itemsToShow >= 0 ? prevIndex - itemsToShow : Math.floor(data.length / itemsToShow) * itemsToShow
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
          <h2 className="font-mono md:text-5xl text-xl">Más Vendidos</h2>
          <p className="md:text-lg text-center text-gray-500">
            Los artículos de papelería más comprados
          </p>
        </div>

        <div className={`grid gap-x-6 md:px-20 px-16 justify-center relative transition-none ${isMobile ? 'grid-cols-1' : 'md:grid-cols-4'}`}>
          {loading.getData ? (
            <p className="text-center">Cargando productos...</p>
          ) : (
            data.slice(startIndex, startIndex + itemsToShow).map((item) => (
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
            className="bg-green-700 hover:bg-green-600 px-16 py-2 md:text-base text-xs rounded-full text-gray-100 tracking-wider"
          >
            VER TODOS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSellersCarousel;
