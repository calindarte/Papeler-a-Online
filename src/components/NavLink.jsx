import { Link } from "react-router-dom"

const NavLink = ({path, text}) => {
  return (
    <>
    <Link to={path} className="relative py-3 group">
    <span className="group-hover:text-green-600">{text}</span>
    <span className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 transition-all duration-300 group-hover:scale-x-100 group-hover:bg-green-500"></span>
    </Link>
    </>
  )
}

export default NavLink
