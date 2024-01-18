import { Link } from "react-router-dom";

import logoHeader from "../../images/logoPapeleria.png";
import NavBar from "./NavBar";
import { useState } from "react";
import CartHeader from "./CartHeader";
import { useUserContext } from "../../context/UserContext";

const Header = () => {
  const {totalQuantityProduct} = useUserContext()
  const [isOpenCart,setIsOpenCart]=useState(false)



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
      
    
      <div className="flex gap-x-2 px-6">
        <Link to="/cuenta">
          <span className="material-symbols-outlined flex ">account_circle</span>
        </Link>
        
          <button 
          onClick={()=>{setIsOpenCart(!isOpenCart)}}
          className="relative"
          >
            <span className="material-symbols-outlined flex items-center">shopping_cart</span>

            <span className="absolute -top-3 -right-2 bg-orange-600 text-white text-xs font-bold px-2 rounded-full">{totalQuantityProduct}</span>
          </button>
          {
            isOpenCart && <CartHeader setIsOpenCart={setIsOpenCart} isOpenCart={isOpenCart}/>
          }
          
          
      
      </div>
      </div>
    </header>
  );
};

export default Header;
