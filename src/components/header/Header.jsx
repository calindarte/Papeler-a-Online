import { Link } from "react-router-dom";

import logoHeader from "../../images/logoPapeleria.png";
import NavBar from "./NavBar";

const Header = () => {

  return (
    <header className="flex items-center justify-between px-8 py-5 shadow-sm border bg-gray-50">
      <div className="flex items-center gap-x-4">
        <div className="">
          <img src={logoHeader} alt="Logo" className="size-20" />
        </div>
        <div>
          <p className="font-bold text-xl ">MODERNA</p>
          <p className="font-normal tracking-widest text-center text-red-500">Papelería</p>
        </div>
      </div>


      <div className="flex items-center ">
        <NavBar />
      
    
      <div className="flex gap-x-2 px-6 items-center">
        <Link to="/cuenta">
          <span className="material-symbols-outlined flex">account_circle</span>
        </Link>
        <span className="material-symbols-outlined">shopping_cart</span>
      </div>
      </div>
    </header>
  );
};

export default Header;
