import logoHeader from "../../images/logoPapeleria.png";
import RedesSociales from "./RedesSociales";

import imgFacebook from "../../images/redesSociales/facebook_5968903.png"
import imgWhatsapp from "../../images/redesSociales/whatsapp_4494470.png"
import imgInstagram from "../../images/redesSociales/instagram_4494468.png"


const Footer = () => {
  return (
    <footer className="bg-green-600">
      <div className="flex  items-center justify-center py-16 px-10 gap-4 border-b border-gray-800  ">
        <div>
          <img src={logoHeader} alt="Logo" className="w-48" />
        </div>
        <div>
          <p className="font-bold text-xl ">MODERNA</p>
          <p className="font-normal tracking-widest text-center ">Papelería</p>
        </div>

        <div className="px-8">
          <p>
            Exercitation enim ea ipsum culpa aute exercitation commodo irure ut.
            Est pariatur cillum est aute minim culpa duis ex sunt. Esse
            consequat sint incididunt commodo anim ea.
          </p>
        </div>

        <div className="flex items-start justify-center gap-3 ">
          <div className="flex flex-col w-44">
            <span className="font-medium">Ubicacion:</span>
            <span >Agustin Codazzi, Cesar</span>
            <span>Carrera 11a #24a-40</span>
          </div>
          <div className="w-36">
            <h2 className="font-medium">Menú</h2>
            <ul>
              <li>Inicio</li>
              <li>Tienda</li>
              <li>Quiénes Somos</li>
              <li>Contactenos</li>
            </ul>
          </div>
          <div className="flex flex-col w-28 items-center ">
            <span className="font-medium">Redes Sociales</span>
            <div className="flex gap-1">
              <RedesSociales url='' logo={imgFacebook} />
              <RedesSociales url='' logo={imgWhatsapp} />
              <RedesSociales url='' logo={imgInstagram} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="justify-center items-center flex p-6 gap-x-1 font-medium font-mono ">
        <span className="material-symbols-outlined text-base">copyright</span>
        <p> 2024 Moderna - Developed By Carlos Dev </p>
      </div>
    </footer>
  );
};

export default Footer;
