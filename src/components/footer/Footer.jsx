import logoHeader from "../../images/logoPapeleria.png";
import RedesSociales from "./RedesSociales";

import imgFacebook from "../../images/redesSociales/facebook_5968903.png";
import imgWhatsapp from "../../images/redesSociales/whatsapp_4494470.png";
import imgInstagram from "../../images/redesSociales/instagram_4494468.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-green-600">
      <div className="flex md:flex-row flex-col items-center justify-center md:py-16 py-8 md:px-10 px-6 gap-4 border-b border-gray-800 text-gray-9500 ">
        <div>
          <img src={logoHeader} alt="Logo" className="w-14 md:w-48" />
        </div>
        <div>
          <p className="font-bold md:text-xl ">MODERNA</p>
          <p className="font-normal tracking-widest text-center md:text-base text-xs">Papelería</p>
        </div>

        <div className="md:px-4 text-justify md:text-base text-sm">
          <p>
            Bienvenido a nuestra papelería, tu destino para todo lo relacionado
            con papelería. Descubre una selección única de productos para la
            escuela, la oficina y proyectos creativos. Nuestro amable personal
            está listo para ayudarte a encontrar lo que necesitas. ¡Esperamos
            verte pronto!
          </p>
        </div>

        <div className="flex items-start justify-center gap-3 md:text-base text-sm">
          <div className="flex flex-col md:w-44">
            <span className="font-medium">Ubicacion:</span>
            <span>Agustin Codazzi, Cesar</span>
            <span>Carrera 11a #24a-40</span>
          </div>
          <div className="md:w-36">
            <h2 className="font-medium">Menú</h2>
            <ul>
              <li>
                <Link to="/" className="hover:text-gray-600" onClick={scrollToTop}>
                  Inicio
                </Link>
              </li>
              <li>
                
                <Link to="/tienda" className="hover:text-gray-600" onClick={scrollToTop}>
                  Tienda
                </Link>
              </li>
              <li>
               
                <Link to="/nosotros" className="hover:text-gray-600" onClick={scrollToTop}>
                  Quiénes Somos
                </Link>
              </li>
              <li>
                
                <Link to="/contacto" className="hover:text-gray-600" onClick={scrollToTop}>
                  Contactenos
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:w-28 items-center ">
            <span className="font-medium">Redes Sociales</span>
            <div className="flex gap-1">
              <RedesSociales url="https://web.facebook.com/?_rdc=1&_rdr" logo={imgFacebook}  />
              <RedesSociales  logo={imgWhatsapp} phoneNumber="3238281579"/>
              <RedesSociales url="https://www.instagram.com/" logo={imgInstagram} />
            </div>
          </div>
        </div>
      </div>

      <div className="justify-center items-center flex p-6 gap-x-1 font-medium font-mono md:text-base text-xs ">
        <span className="material-symbols-outlined text-base">copyright</span>
        <p> 2024 Moderna - Developed By Carlos Dev </p>
      </div>
    </footer>
  );
};

export default Footer;
