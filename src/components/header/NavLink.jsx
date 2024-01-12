import { NavLink as RouterNavLink } from "react-router-dom";

const NavLink = ({path, text}) => {
  return (
    <div className="relative py-2">
    <RouterNavLink to={path} className={({isActive}) => (isActive? ' text-green-600 border-b-2 border-green-500 pb-2' : 'group' )}>
    <span className="group-hover:text-green-600">{text}</span>
    <span className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 transition-all duration-300 group-hover:scale-x-100 group-hover:bg-green-500"></span>
    </RouterNavLink>
    </div>
  )
}

export default NavLink
