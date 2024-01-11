import { useState } from "react";
import imgGallery1 from "../images/gallery/School_Holidays_Stationery_Happy_Teacher_'s_Day_571034_1280x853.jpg";
import imgGallery2 from "../images/gallery/School_Stationery_English_Pencils_Ballpoint_pen_568795_1280x853.jpg";
import imgGallery3 from "../images/gallery/School_Stationery_Pencils_Ballpoint_pen_568792_1365x1024.jpg";
import imgGallery4 from "../images/gallery/School_Stationery_Wood_planks_Notebooks_Pencils_561709_1280x914.jpg";

import imgCategory1 from "../images/category/office-material_6383909.png"
import imgCategory2 from "../images/category/painting_11549589.png"
import imgCategory3 from "../images/category/school-material_4693696.png"
import imgCategory4 from "../images/category/stationery_7726943.png"




import CardCategory from "../components/sectionHome/CardCategory";

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
          className="object-cover max-h-96 w-full cursor-pointer"
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
            <span className="material-symbols-outlined">arrow_forward_ios</span>
          </button>
        </div>
        </div>
        <div className="flex justify-center gap-4 pt-4">
          {
            ARRAY_IMGS.map((_, i) => (
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
            ))
          }
        </div>
      </section>
      <section>
        <div className="flex col-span-4 gap-x-14 px-20 py-16 justify-center">
          <CardCategory text='ELEMENTOS DE OFICINA' url={imgCategory1}/>
          <CardCategory text='PRODUCTOS DE PAPELERIA' url={imgCategory2}/>
          <CardCategory text='UTILES ESCOLARES' url={imgCategory3}/>
          <CardCategory text='PRODUCTOS DE ARTE' url={imgCategory4}/>

        </div>
      </section>
      </div>
  );
};

export default Home;
