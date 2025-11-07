import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import AdminLogin from './Admin/AdminLogin';
import AdminDash from "./Admin/AdminDash"
import FrontPage from "./pages/FrontPage"
import AddProduct from "./Admin/AddProducts"
import UserRegister from "./User/UserRegister"
import UserDash from "./User/UserDash"
import Userlogin from "./User/Userlogin"
import AddToCart from "./Redux/AddToCard";
import productDisplay from "./pages/productDisplay";
import CheckOut from "./Redux/cheackOut";
import AllOrders from "./Admin/Allorders";

  
function App() {

  return (
    <>
    <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<FrontPage />}/>

          </Route>
           <Route path="productdis/:id" element ={<productDisplay/>}/>
           <Route path="checkout" element ={<CheckOut/>}/>
          <Route path="adminlogin" element={<AdminLogin />} />
          <Route path="/admindash" element={<AdminDash />} >
          <Route  path='addproduct' element={<AddProduct/>} />
          </Route>
          
          <Route path="addtocard" element={<AddToCart/>} />
          <Route path="userregis" element={<UserRegister />} />
          <Route path="userdash" element={<UserDash />} />
          <Route path="userlogin" element={<Userlogin />} />
          <Route path="customerorder" element={<AllOrders />} />



        </Routes>

   </>
  )
}

export default App