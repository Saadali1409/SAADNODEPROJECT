import Header from "./component/Header"
import Footer from "./component/Footer";
// import FrontPage from "./pages/FrontPage";
import { Outlet } from "react-router-dom";

let Layout=()=>{
    return(
        <>
        
        
        <Header/>
       
        {/* <FrontPage/> */}
        <Outlet/>
        
        <Footer/>
     
        </>
    )
}

export default Layout;