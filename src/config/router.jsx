import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import Home from "../pages/Home";
import Store from "../pages/Store";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Account from "../pages/Account";
import OfficeItems from "../pages/OfficeItems";
import LayoutStore from "../layout/LayoutStore";
import PaperItems from "../pages/PaperItems";
import SchoolItems from "../pages/SchoolItems";
import ArtItems from "../pages/ArtItems";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/tienda",
        element: <LayoutStore />,
        children: [
          {
            index:true,
            element: <Store/>,
          },
          {
            path: "/tienda/oficina",
            element: <OfficeItems/>,
          },
          {
            path: "/tienda/papeleria",
            element: <PaperItems/> ,
          },
          {
            path: "/tienda/escolar",
            element: <SchoolItems /> ,
          },
          {
            path: "/tienda/arte",
            element: <ArtItems /> ,
          },
        ],
      },
      {
        path: "/nosotros",
        element: <About />,
      },
      {
        path: "/contacto",
        element: <Contact />,
      },
      {
        path: "/cuenta",
        element: <Account />,
      },
    ],
  },
]);
