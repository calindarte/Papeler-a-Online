import { Link } from "react-router-dom";
import Button from "./Button";

const CardOptions = ({
  url,
  parrafo,
  textButton,
  color,
  path,
  target = "",
}) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col items-center px-6 py-8 gap-6 justify-center shadow-xl hover:bg-gray-100 hover:cursor-pointer">
      <div className="px-12 flex flex-col gap-6">
        <img src={url} alt="" className="rounded-md p-4" />
        <p className="font-medium tracking-wider text-center text-gray-800 md:text-base text-sm">
          {parrafo}
        </p>
      </div>
      <div >
        <Link to={path} target={target} rel="noopener noreferrer" onClick={scrollToTop}>
          <Button text={textButton} type="button" color={color}  />
        </Link>
      </div>
    </div>
  );
};

export default CardOptions;
