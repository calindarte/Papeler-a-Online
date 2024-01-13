import {Outlet} from "react-router-dom";



const LayoutStore = () => {   
  return (
    <div>
    <Outlet />
    </div>
  );
};

export default LayoutStore;
