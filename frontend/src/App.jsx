import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
// import FrontPage from "./pages/FrontPage";
import Userlogin from "./User/Userlogin";
import UserRegister from "./User/UserRegister";
import UserDash from "./User/UserDash";
import ProductDisplay from "./pages/productDisplay";
import CheckOut from "./Redux/cheackOut";
import AddToCard from "./Redux/AddToCard";
import AdminLogin from "./Admin/AdminLogin";
import AdminDashboard from "./Admin/AdminDash";
import AddProducts from "./Admin/AddProducts";
import AllOrders from "./Admin/Allorders";
import Allfront from "./pages/Allfront";

function App() {
  return (
    <Routes>

      {/* ================= PUBLIC ROUTES WITH SHARED LAYOUT ================= */}
      <Route path="/" element={<Layout />}>
        {/* Home / Main page */}
        {/* <Route index element={<FrontPage />} /> */}
        <Route index element={<Allfront/>} />

        {/* User dashboard & shopping */}
        <Route path="/userdash" element={<UserDash />} />
        <Route path="/productdis/:id" element={<ProductDisplay />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/addtocard" element={<AddToCard />} />
      </Route>

      {/* ================= AUTH PAGES (NO LAYOUT) ================= */}
      <Route path="/userlogin" element={<Userlogin />} />
      <Route path="/userregis" element={<UserRegister />} />

      {/* ================= ADMIN ROUTES ================= */}
      <Route path="/adminlogin" element={<AdminLogin />} />

      <Route path="/admindash" element={<AdminDashboard />}>
        {/* <Route path="addproducts" element={<AddProducts />} /> */}
        <Route path="addproducts" element={<AddProducts />} />
        <Route path="customerorder" element={<AllOrders />} />
      </Route>

    </Routes>
  );
}

export default App;
