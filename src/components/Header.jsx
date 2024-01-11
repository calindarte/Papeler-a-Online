import { Link } from "react-router-dom";

import logoHeader from "../images/logoPapeleria.png";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-5 shadow-sm">
      <div className="flex items-center gap-x-4">
        <div className="">
          <img src={logoHeader} alt="Logo" className="size-20" />
        </div>
        <div>
          <p className="font-bold text-xl ">MODERNA</p>
          <p className="font-light tracking-widest text-center">Papelería</p>
        </div>
      </div>
      <div>
        <form className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Buscar un Producto"
            className="w-80 border border-slate-400 px-2 py-1 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
          <div className="px-2 py-1">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-1 rounded-lg flex"
            >
              <span className="material-symbols-outlined text-white">
                search
              </span>
            </button>
          </div>
        </form>
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
