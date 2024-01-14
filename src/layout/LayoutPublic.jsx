import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import UserContextProvider from "../context/UserContext"

const LayoutPublic = () => {
  return (
    
    <UserContextProvider>
    <Header/>
    <Outlet/>
    <Footer />
    </UserContextProvider>
  )
}

export default LayoutPublic
