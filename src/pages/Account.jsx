import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import InfoAccount from "../components/sectionAccount.jsx/InfoAccount";

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
      <div className="bg-green-300 text-center pb-20 pt-24">
        <h1 className="text-4xl font-medium tracking-wide text-gray-800">
          Mi Cuenta
        </h1>
      </div>
      {
        user ? <InfoAccount /> : (<div className="py-40">
        <div className=" flex flex-col  items-center gap-4">
          <div className="">
            <span className="material-symbols-outlined text-9xl">
              account_circle
            </span>
          </div>
          <div className="flex gap-7 ">
            <Link to="/cuenta/login" onClick={scrollToTop}>
              <button className="bg-blue-500 px-10 py-3 rounded-full text-gray-100 font-medium ">
                Acceder
              </button>
            </Link>
            <Link to="/cuenta/register" onClick={scrollToTop}>
            <button className="bg-yellow-500 px-7 py-3 rounded-full text-gray-100 font-medium ">
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
