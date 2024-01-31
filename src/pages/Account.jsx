import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import InfoAccount from "../components/sectionAccount.jsx/InfoAccount";
import IconAccount from "../components/header/IconAccount";

const Account = () => {

  const { user } = useUserContext();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };



  return (
    <div>
      <div className="bg-green-600 text-center pb-20 pt-24">
        <h1 className="md:text-4xl text-2xl font-medium tracking-wide text-gray-900">
          Mi Cuenta
        </h1>
      </div>
      {
        user ? <InfoAccount /> : (<div className="md:py-40 py-28">
        <div className=" flex flex-col  items-center gap-4">
          <div className="">
            <IconAccount className="md:size-36 size-24 fill-gray-900"/>
          </div>
          <div className="flex gap-7 ">
            <Link to="/cuenta/login" onClick={scrollToTop}>
              <button className="bg-blue-500 hover:bg-blue-600 md:text-base text-sm px-10 py-3 rounded-full text-gray-100 font-medium ">
                Acceder
              </button>
            </Link>
            <Link to="/cuenta/register" onClick={scrollToTop}>
            <button className="bg-yellow-500 hover:bg-yellow-600 md:text-base text-sm px-7 py-3 rounded-full text-gray-100 font-medium ">
              Registrarse
            </button>
            </Link>
          </div>
        </div>
      </div>)
      }
      
    </div>
  );
};

export default Account;
