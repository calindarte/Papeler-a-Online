import NavLink from "./NavLink"

const NavBar = () => {
  return (
    <nav className="flex gap-x-4 text-sm font-medium">
        <NavLink path='/' text='INICIO'/>
        <NavLink path='/tienda' text='TIENDA'/>
        <NavLink path='/nosotros' text='SOBRE NOSOTROS'/>
        <NavLink path='/contacto' text='CONTACTANOS'/>
      </nav>
  )
}

export default NavBar
