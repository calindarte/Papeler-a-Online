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
import IconArrowBack from "../components/sectionHome/IconArrowBack";
import IconArrowNext from "../components/sectionHome/IconArrowNext";

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
            className="object-cover md:h-[400px] h-[250px] w-full cursor-pointer"
          />
          <div className="absolute top-1/2 left-0 -translate-y-1/2 flex items-center justify-between w-full px-4">
            <button
              className="bg-white h-10 w-10 grid place-items-center rounded-full"
              onClick={handlePre}
            >
              <IconArrowBack/>
            </button>
            <button
              className="bg-white h-10 w-10 grid place-items-center rounded-full"
              onClick={handleNext}
            >
              <IconArrowNext/>
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
        className="bg-Lapices-home md:bg-repeat-round "
      >
        <div className="py-24 px-6 flex justify-center">
          <div className="flex flex-col gap-y-6 bg-white md:px-14 px-4 md:py-10 py-6 md:w-[35%] rounded-lg">
            <h2 className="text-left md:text-4xl text-xl text-gray-800 font-medium">
              Gipao
            </h2>
            <span className="text-left md:text-base text-sm">
              Los mejores productos escolares, de arte y oficina Gipao. Somos tu
              compañía para toda la vida, encuentra aquí todos nuestros
              productos.
            </span>

            <div className="flex gap-x-14 justify-center md:py-6">
              <div className="flex flex-col gap-y-4 text-center md:px-6">
                <span className="md:text-4xl  text-xl font-bold tracking-widest text-[#c39a5f]">
                  100+
                </span>
                <span className="md:text-xl text-base font-bold text-gray-700">
                  Productos diferentes Gipao
                </span>
              </div>
              <div className="flex flex-col text-center px-6 gap-y-4 ">
                <span className="md:text-4xl text-xl font-bold tracking-widest text-[#c39a5f]">
                  20k+
                </span>
                <span className="md:text-xl text-base font-bold text-left text-gray-700">
                  Productos vendidos
                </span>
              </div>
            </div>
            <button className="bg-green-700 md:px-16 py-2 md:text-base text-xs rounded-full text-gray-100 tracking-wider ">
              VER PRODUCTOS
            </button>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-green-400 to-red-400">
        <div>
          <h2 className="text-center md:text-4xl text-2xl py-14">Testimonio</h2>
          <div className="grid md:grid-cols-[4fr_4fr_4fr] gap-8 md:px-24 px-8 pb-24">
            <CardTestimony title="La Moderna superó mis expectativas." descripcion="La variedad de productos y la facilidad de compra en línea hicieron que mi experiencia fuera excepcional. Definitivamente, volveré." nombre="Ana S." role="Cliente Satisfecha" />
            <CardTestimony title="Como artista, La Moderna fue mi elección perfecta." descripcion="La amplia gama de suministros y la asistencia del equipo de atención al cliente hicieron que mi compra fuera inmejorable. ¡Estoy encantado con mi experiencia de compra!" nombre="Carlos M." role="Artista Creativo" />
            <CardTestimony title="La Moderna es mi tienda de confianza para la organización escolar." descripcion="Desde útiles escolares hasta mochilas, encontré todo lo que necesitaba. La entrega rápida y eficiente hizo que mi vida fuera más fácil. ¡Recomiendo La Moderna a todas las madres ocupadas!" nombre="Isabel G." role="Organización Escolar" />
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col md:flex-row md:col-span-3 gap-14 px-20 py-16 justify-center">
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
            path="/ayuda"
            
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
