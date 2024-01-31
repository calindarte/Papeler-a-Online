import NavLink from "./NavLink"

const NavBar = ({openMenu, setOpenMenu}) => {



  return (
    <nav className={`md:static md:flex md:gap-x-8 text-sm font-medium md:mr-10 ${openMenu? 'fixed top-0 left-0 h-full flex flex-col text-sm w-[65%] bg-white px-8 gap-y-8 z-20':'hidden'}`}>
        <button className="text-left pt-5 md:hidden" onClick={()=>setOpenMenu(false)}>
          X
        </button>
        <NavLink path='/' text='INICIO'/>
        <NavLink path='/tienda' text='TIENDA'/>
        <NavLink path='/nosotros' text='SOBRE NOSOTROS'/>
        <NavLink path='/contacto' text='CONTACTENOS'/>
        <NavLink path='/ayuda' text='AYUDA'/>
      </nav>


  )
}

export default NavBar
