import { Link } from "react-router-dom";

import logoHeader from "../../images/logoPapeleria.png";
import NavBar from "./NavBar";
import { useState } from "react";
import CartHeader from "./CartHeader";
import { useUserContext } from "../../context/UserContext";
import IconAccount from "./IconAccount";
import IconCart from "./IconCart";
import IconMenu from "./IconMenu";

const Header = () => {
  const {totalQuantityProduct} = useUserContext()
  const [isOpenCart,setIsOpenCart]=useState(false)
  const [openMenu, setOpenMenu] = useState(false)


  const handleOpenMenu = ()=>{
    setOpenMenu(true)
  
  }



  return (
    <header className="flex items-center justify-between px-8 py-5 shadow-sm border bg-gray-50">
      <button onClick={handleOpenMenu} className="md:hidden ">
        <IconMenu />
      </button>
      <div className="flex items-center gap-x-4">
        <div className="">
          <img src={logoHeader} alt="Logo" className="size-10 md:size-20" />
        </div>
        <div>
          <p className="font-bold md:text-xl ">MODERNA</p>
          <p className="font-normal tracking-widest text-center text-red-500 text-xs md:text-base">Papelería</p>
        </div>
      </div>


      <div className="flex items-center ">
        <NavBar openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      
    
      <div className="flex gap-x-2 md:px-6">

      
        <Link to="/cuenta">
          <IconAccount />
        </Link>
        
          <button 
          onClick={()=>{setIsOpenCart(!isOpenCart)}}
          className="relative"
          >
            <IconCart/>

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
