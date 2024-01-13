import { Link } from "react-router-dom";
import imgCategory1 from "../../images/category/office-material_6383909.png";
import imgCategory2 from "../../images/category/painting_11549589.png";
import imgCategory3 from "../../images/category/school-material_4693696.png";
import imgCategory4 from "../../images/category/stationery_7726943.png";

const Category = ({ text, url }) => {
  return (
    <div className="bg-[#f5f5f5] p-8 h-full flex flex-col items-center justify-center gap-y-4 shadow-xl hover:bg-yellow-100 hover:cursor-pointer">
      <div className="p-4">
        <img src={url} alt={text} className="rounded-md" />
      </div>
      <div>
      <p className="font-normal tracking-wider text-center text-gray-800 text-base">
        {text}
      </p>
        
      </div>

    </div>
  );
};

const CardCategory = () => {
  return (
    <div className="flex gap-x-16 px-24 py-16 justify-center">
      <Link to="/tienda/oficina">
        {<Category text="ELEMENTOS DE OFICINA" url={imgCategory1} />}
      </Link>
      <Link to="/tienda/papeleria">
        {<Category text="PRODUCTOS DE PAPELERIA" url={imgCategory4} />}
      </Link>
      <Link to="/tienda/escolar">
        {<Category text="UTILES ESCOLARES" url={imgCategory3} />}
      </Link>
      <Link to="/tienda/arte">
        {<Category text="PRODUCTOS DE ARTE" url={imgCategory2} />}
      </Link>
    </div>
  );
};

export default CardCategory;
