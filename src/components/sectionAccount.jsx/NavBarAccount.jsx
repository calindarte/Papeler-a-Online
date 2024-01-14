
import { NavLink as RouterNavLink } from "react-router-dom";
import { logOut } from "../../config/firebase";

const NavLink = ({ path, text,onClick }) => {
  return (
    <div className="relative py-2" onClick={onClick}>
      <RouterNavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? " text-green-600 font-medium"
            : "group"
        }
      >
        <span className="group-hover:text-green-600 relative ">{text}</span>
        <span className="absolute rotate-90  top-[45%] -left-10 h-[5px] w-10 scale-x-0 transition-all duration-300 group-hover:scale-x-100 group-hover:bg-green-500"></span>
      </RouterNavLink>
    </div>
  );
};

const NavBarAccount = () => {

    const handleLogOut = async () => {
        try {
          await logOut();
        } catch (error) {
          console.log(error);
        }
      };
  return (
    <nav className="flex flex-col gap-y-1 py-2 px-4 ">
      <NavLink path="/cuenta" text="Escritorio" />
      <NavLink path="/pedidos" text="Pedidos" />
      <NavLink path="/editar-direcciones" text="Direcciones" />
      <NavLink path="/editar-cuenta" text="Detalles de la Cuenta" />
      <NavLink path="/" text="Salir" onClick={handleLogOut} />

    </nav>
  );
};

export default NavBarAccount;
