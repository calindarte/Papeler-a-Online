import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import Home from "../pages/Home";
import Store from "../pages/Store";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Account from "../pages/Account";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<LayoutPublic/>,
        children:[
            {
                index:true,
                element: <Home/>
            },
            {
                path:'/tienda',
                element: <Store/>
            },
            {
                path:'/nosotros',
                element: <About/>

            },
            {
                path:'/contacto',
                element: <Contact/>
            },
            {
                path:'/cuenta',
                element: <Account/>
            }


        ]
    }
])