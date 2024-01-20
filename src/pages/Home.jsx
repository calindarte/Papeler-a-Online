import { useEffect, useState } from "react";
import imgGallery1 from "../images/gallery/School_Holidays_Stationery_Happy_Teacher_'s_Day_571034_1280x853.jpg";
import imgGallery2 from "../images/gallery/School_Stationery_English_Pencils_Ballpoint_pen_568795_1280x853.jpg";
import imgGallery3 from "../images/gallery/School_Stationery_Pencils_Ballpoint_pen_568792_1365x1024.jpg";
import imgGallery4 from "../images/gallery/School_Stationery_Wood_planks_Notebooks_Pencils_561709_1280x914.jpg";

import imgOptionIcon1 from "../images/optionIcon/headset_5790618.png";
import imgOptionIcon2 from "../images/optionIcon/online-shopping_3081559.png";
import imgOptionIcon3 from "../images/optionIcon/package_1007888.png";


import CardCategory from "../components/sectionHome/CardCategory";
import CardTestimony from "../components/sectionHome/CardTestimony";
import CardOptions from "../components/sectionHome/CardOptions";
import BestSellersCarousel from "../components/sectionHome/BestSellersCarousel";

const ARRAY_IMGS = [imgGallery1, imgGallery2, imgGallery3, imgGallery4];

const whatsappNumber="3014782097"; 


const Home = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % ARRAY_IMGS.length);
  };

  const handlePre = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? ARRAY_IMGS.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(handleNext, 8000);

    return () => clearInterval(intervalId);
  }, []);

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
              className={`relative bg-gray-400 h-3 w-3 rounded-full cursor-pointer overflow-hidden`}
              onClick={() => setIndex(i)}
            >
              <span
                className={`absolute h-full w-full top-0 hover:bg-gray-900 ${
                  i === index && " bg-gray-900"
                }`}
              ></span>
            </div>
          ))}
        </div>
      </section>
      <section>
        <CardCategory />
      </section>

      <BestSellersCarousel />

      <section
        className="bg-Lapices-home bg-repeat-round "
      >
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
          <div className="grid grid-cols-[4fr_4fr_4fr] gap-x-8 px-24 pb-24">
            <CardTestimony title="La Moderna superó mis expectativas." descripcion="La variedad de productos y la facilidad de compra en línea hicieron que mi experiencia fuera excepcional. Definitivamente, volveré." nombre="Ana S." role="Cliente Satisfecha" />
            <CardTestimony title="Como artista, La Moderna fue mi elección perfecta." descripcion="La amplia gama de suministros y la asistencia del equipo de atención al cliente hicieron que mi compra fuera inmejorable. ¡Estoy encantado con mi experiencia de compra!" nombre="Carlos M." role="Artista Creativo" />
            <CardTestimony title="La Moderna es mi tienda de confianza para la organización escolar." descripcion="Desde útiles escolares hasta mochilas, encontré todo lo que necesitaba. La entrega rápida y eficiente hizo que mi vida fuera más fácil. ¡Recomiendo La Moderna a todas las madres ocupadas!" nombre="Isabel G." role="Organización Escolar" />
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
            path={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Hola%20quiero%20comprar%20un%20producto`}
            target="_blank"
           
          />
          <CardOptions
            url={imgOptionIcon2}
            parrafo="¿COMO COMPRAR EN LA MODERNA?"
            textButton="VER MÁS"
            color="pink"
            path="/tienda"
            
          />
          <CardOptions
            url={imgOptionIcon3}
            parrafo="CONOCE NUEVOS PRODUCTOS"
            textButton="AQUÍ"
            color="yellow"
            path="/tienda"

          />
        </div>
      </section>
    </div>
  );
};

export default Home;
