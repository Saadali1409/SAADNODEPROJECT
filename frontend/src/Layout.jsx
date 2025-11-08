import Header from "./component/Header"
import Footer from "./component/Footer";
import FrontPage from "./pages/FrontPage";
import { Outlet } from "react-router-dom";
import Home from "./component/Home";
import FrontPage2 from "./pages/Frontpage2"

let Layout=()=>{
    return(
        <>
        
        
        <Header/>
       
        {/* <FrontPage/>
         <Home/>
        <FrontPage2/> */}

        <Outlet/>
        
        
        <Footer/>
     
        </>
    )
}

export default Layout;