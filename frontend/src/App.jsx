import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import AdminLogin from './admin/adminlogin';
import AdminDash from "./Admin/AdminDash"
import FrontPage from "./pages/FrontPage"
import AddProduct from "./Admin/AddProducts"

  
function App() {

  return (
    <>
    <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<FrontPage />}/>

          </Route>
      
          <Route path="adminlogin" element={<AdminLogin />} />

      
          <Route path="/admindash" element={<AdminDash />} >
         <Route  path='addproduct' element={<AddProduct/>} />
          </Route>
        </Routes>

   </>
  )
}

export default App