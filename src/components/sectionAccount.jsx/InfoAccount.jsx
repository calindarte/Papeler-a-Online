import { useUserContext } from "../../context/UserContext";
import NavBarAccount from "./NavBarAccount";

const InfoAccount = () => {

    const { user } = useUserContext();
    const partes = user.email.split('@');
    const nameUser = partes[0]
    


    
  return (
    <div className="p-20 bg-[#F5F5F5]">
      <div className="bg-white p-8 flex  shadow-xl">
        <div className="flex flex-col gap-8 px-4  w-[80%]">
          <p>Hola {nameUser}</p>
          <p>
            Desde el escritorio de tu cuenta puedes ver tus pedidos recientes,
            gestionar tus direcciones de envío y facturación y editar tu
            contraseña y los detalles de tu cuenta.
          </p>
        </div>
        <div className="border-l-2 px-2 ">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-7xl">
                account_circle
              </span>
              <h1>{nameUser}</h1>
            </li>
            <NavBarAccount/>
          
            {/* <button onClick={handleLogOut} className="cursor-pointer ">Salir</button> */}
        </div>
      </div>
    </div>
  );
};

export default InfoAccount;
