import { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

const SubMenu = () => {
  return (
    <div className="absolute -left-5 mt-2 z-10 w-44  bg-white border shadow-2xl">
      {/* Aquí puedes agregar tus opciones de submenú */}
      <RouterNavLink
        to="/tienda/oficina"
        className="block px-4 py-2 text-gray-800 hover:bg-green-400"
      >
        Elementos de Oficina
      </RouterNavLink>
      <RouterNavLink
        to="/tienda/papeleria"
        className="block px-4 py-2 text-gray-800 hover:bg-green-400"
      >
        Productos de Papelerìa
      </RouterNavLink>
      <RouterNavLink
        to="/tienda/escolar"
        className="block px-4 py-2 text-gray-800 hover:bg-green-400"
      >
        Utiles Escolares
      </RouterNavLink>
      <RouterNavLink
        to="/tienda/arte"
        className="block px-4 py-2 text-gray-800 hover:bg-green-400"
      >
        Productos de Arte
      </RouterNavLink>
    </div>
  );
};

const NavLink = ({ path, text }) => {
  const [isSubMenuVisible, setSubMenuVisible] = useState(false);

  return (
    <div
      className="relative py-2"
      onMouseOver={() => path === "/tienda" && setSubMenuVisible(true)}
      onMouseLeave={() => path === "/tienda" && setSubMenuVisible(false)}
    >
      <RouterNavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? " text-green-600 border-b-2 border-green-500 pb-2"
            : "group"
        }
      >
        <span className="group-hover:text-green-600 relative">{text}</span>
        {path === "/tienda" && (

          <span className="material-symbols-outlined absolute text-base ">arrow_drop_down</span>
         
          
        )}
        <span className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 transition-all duration-300 group-hover:scale-x-100 group-hover:bg-green-500"></span>
      </RouterNavLink>
      {isSubMenuVisible && path === "/tienda" && <SubMenu />}
    </div>
  );
};

export default NavLink;
