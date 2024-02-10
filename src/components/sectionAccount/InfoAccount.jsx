import { useUserContext } from "../../context/UserContext";
import IconAccount from "../header/IconAccount";
import NavBarAccount from "./NavBarAccount";

const InfoAccount = () => {

    const { user } = useUserContext();
    const partes = user.email.split('@');
    const nameUser = partes[0]
    


    
  return (
    <div className="md:p-20 p-3 bg-[#F5F5F5]">
      <div className="bg-white p-8 flex flex-col-reverse gap-y-8 md:flex-row  shadow-xl md:text-base text-sm">
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
              <IconAccount className="size-16 fill-gray-800" />
              <h1 className="first-letter:uppercase">{nameUser}</h1>
            </li>
            <NavBarAccount/>
          
            
        </div>
      </div>
    </div>
  );
};

export default InfoAccount;
