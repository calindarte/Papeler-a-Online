import { useState } from "react";
import imgGallery1 from "../images/gallery/School_Holidays_Stationery_Happy_Teacher_'s_Day_571034_1280x853.jpg";
import imgGallery2 from "../images/gallery/School_Stationery_English_Pencils_Ballpoint_pen_568795_1280x853.jpg";
import imgGallery3 from "../images/gallery/School_Stationery_Pencils_Ballpoint_pen_568792_1365x1024.jpg";
import imgGallery4 from "../images/gallery/School_Stationery_Wood_planks_Notebooks_Pencils_561709_1280x914.jpg";



import imgOptionIcon1 from "../images/optionIcon/headset_5790618.png";
import imgOptionIcon2 from "../images/optionIcon/online-shopping_3081559.png";
import imgOptionIcon3 from "../images/optionIcon/package_1007888.png";

import imgProduct1 from "../images/5646252.jpg";

import CardCategory from "../components/sectionHome/CardCategory";
import CardBestSellers from "../components/sectionHome/CardBestSellers";
import CardTestimony from "../components/sectionHome/CardTestimony";
import CardOptions from "../components/sectionHome/CardOptions";

const ARRAY_IMGS = [imgGallery1, imgGallery2, imgGallery3, imgGallery4];

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    index === ARRAY_IMGS.length - 1 ? setIndex(0) : setIndex(index + 1);
  };
  const handlePre = () => {
    index === 0 ? setIndex(ARRAY_IMGS.length - 1) : setIndex(index - 1);
  };

  return (
    <div>
      <section>
        <div className="relative">
          <img
            src={ARRAY_IMGS[index]}
            alt="imgGallery"
            className="object-fill max-h-96 w-full cursor-pointer"
          />
          <div className="absolute top-1/2 left-0 -translate-y-1/2 flex items-center justify-between w-full px-4">
            <button
              className="bg-white h-10 w-10 grid place-items-center rounded-full"
              onClick={handlePre}
            >
              <span className="material-symbols-outlined">arrow_back_ios</span>
            </button>
            <button
              className="bg-white h-10 w-10 grid place-items-center rounded-full"
              onClick={handleNext}
            >
              <span className="material-symbols-outlined">
                arrow_forward_ios
              </span>
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-4 pt-4">
          {ARRAY_IMGS.map((_, i) => (
            <div
              key={i}
              className={`relative bg-gray-900 h-3 w-3 rounded-full cursor-pointer`}
              onClick={() => setIndex(i)}
            >
              <span
                className={`absolute h-full w-full top-0 hover:bg-[rgba(255,255,255,0.5)] ${
                  i === index && " bg-[rgba(255,255,255,0.5)]"
                }`}
              ></span>
            </div>
          ))}
        </div>
      </section>
      <section>
      <CardCategory />
      </section>
      <section className="bg-[#f5f5f5]">
        <div>
          <div className="flex flex-col justify-center items-center gap-6 p-10 ">
            <h2 className="font-mono text-5xl">Más Vendidos</h2>
            <p className="text-lg text-gray-500">
              Los artículos de papelería más comprados
            </p>
          </div>
          <div className="flex col-span-4 gap-x-6 px-20 justify-center relative">
            <CardBestSellers
              imgProduct={imgProduct1}
              text="Dolore nostrud proident sunt aliqua officia qui id anim anim eu pariatur."
              price="$11,500 - $6,000"
            />
            <CardBestSellers
              imgProduct={imgProduct1}
              text="Dolore nostrud proident sunt aliqua officia qui id anim anim eu pariatur."
              price="$11,500 - $6,000"
            />
            <CardBestSellers
              imgProduct={imgProduct1}
              text="Dolore nostrud proident sunt aliqua officia qui id anim anim eu pariatur."
              price="$11,500 - $6,000"
            />
            <CardBestSellers
              imgProduct={imgProduct1}
              text="Dolore nostrud proident sunt aliqua officia qui id anim anim eu pariatur."
              price="$11,500 - $6,000"
            />
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
            <button className="bg-green-700 px-16 py-2 rounded-full text-gray-100 tracking-wider ">
              VER TODOS
            </button>
          </div>
        </div>
      </section>
      <section className="bg-Lapices-home bg-repeat-round ">
        <div className="py-24 flex justify-center">
          <div className="flex flex-col gap-y-6 bg-white px-14 py-10 w-[35%] rounded-lg">
            <h2 className="text-left text-4xl text-gray-800 font-medium">
              Gipao
            </h2>
            <span className="text-left">
              Los mejores productos escolares, de arte y oficina Gipao. Somos tu
              compañía para toda la vida, encuentra aquí todos nuestros
              productos.
            </span>

            <div className="flex gap-x-14 justify-center py-6">
              <div className="flex flex-col gap-y-4 text-center px-6">
                <span className="text-4xl font-bold tracking-widest text-[#c39a5f]">
                  100+
                </span>
                <span className="text-xl font-bold text-gray-700">
                  Productos diferentes Gipao
                </span>
              </div>
              <div className="flex flex-col text-center px-6 gap-y-4 ">
                <span className="text-4xl font-bold tracking-widest text-[#c39a5f]">
                  20k+
                </span>
                <span className="text-xl font-bold text-left text-gray-700">
                  Productos vendidos
                </span>
              </div>
            </div>
            <button className="bg-green-700 px-16 py-2 rounded-full text-gray-100 tracking-wider ">
              VER PRODUCTOS
            </button>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-green-400 to-red-400">
        <div>
          <h2 className="text-center text-4xl py-14">Testimonio</h2>
          <div className="flex items-center justify-center gap-8 px-24 pb-24">
            <CardTestimony />
            <CardTestimony />
            <CardTestimony />
          </div>
        </div>
      </section>
      <section>
        <div className="flex col-span-3 gap-x-14 px-20 py-16 justify-center">
          <CardOptions
            url={imgOptionIcon1}
            parrafo="¡ESTAMOS PARA SERVIRTE!"
            textButton="HABLEMOS!"
            color="green"
          />
          <CardOptions
            url={imgOptionIcon2}
            parrafo="¿COMO COMPRAR EN LA MODERNA?"
            textButton="VER MÁS"
            color="pink"
          />
          <CardOptions
            url={imgOptionIcon3}
            parrafo="CONOCE NUESVOS PRODUCTOS"
            textButton="AQUÍ"
            color="yellow"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
