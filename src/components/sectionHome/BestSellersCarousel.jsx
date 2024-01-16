import { useEffect, useState } from "react";
import { useFirestore } from "../../hooks/useFirestore";
import { Link } from "react-router-dom";
import CardBestSellers from "./CardBestSellers";

const BestSellersCarousel = () => {
  const { data, loading, getData } = useFirestore();
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    console.log('best data');
    getData();
  }, []);

  const handleNext = () => {
    const nextIndex = startIndex + 4 < data.length ? startIndex + 4 : 0;
    setStartIndex(nextIndex);
  };

  const handlePre = () => {
    const nextIndex =
      startIndex - 4 >= 0 ? startIndex - 4 : Math.floor(data.length / 4) * 4;
    setStartIndex(nextIndex);
  };

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
                />
              </div>
            ))
          )}

          <div className="absolute top-1/2 left-0 -translate-y-1/2 flex items-center justify-between w-full px-4">
            <button
              className="bg-[rgba(0,0,0,.6)] h-14 w-9 grid place-items-center rounded-sm"
              onClick={handlePre}
            >
              <span className="material-symbols-outlined text-white">
                arrow_back_ios
              </span>
            </button>
            <button
              className="bg-[rgba(0,0,0,.6)] h-14 w-9 grid place-items-center rounded-sm"
              onClick={handleNext}
            >
              <span className="material-symbols-outlined text-white">
                arrow_forward_ios
              </span>
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
