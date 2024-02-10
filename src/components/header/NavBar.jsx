import IconClose from "./IconClose"
import NavLink from "./NavLink"

const NavBar = ({openMenu, setOpenMenu}) => {



  return (
    <nav className={`md:static md:flex md:gap-x-8 text-sm font-medium md:mr-10 ${openMenu? 'fixed top-0 left-0 h-full flex flex-col text-sm w-[65%] bg-white px-8 gap-y-8 z-30':'hidden'}`}>
        <button className="text-left pt-6 md:hidden" onClick={()=>setOpenMenu(false)}>
          <IconClose className="size-4"/>
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
