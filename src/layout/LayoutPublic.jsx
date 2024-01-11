import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const LayoutPublic = () => {
  return (
    <>
    <Header/>
    <Outlet/>
      
    </>
  )
}

export default LayoutPublic
