import  { useState } from 'react'
import BackEndUrl from '../utils/BackEndUrl'
import axios from 'axios';
import { Outlet,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '../css/AdminLogin.css'

const AdminLogin = () => {

    const[adminId, setAdminId] = useState('');
    const[password, setPassword] = useState('');
 
    const navigate = useNavigate();

    const handleSubmit=async(e)=>{
        
        e.preventDefault();

        let api = `${BackEndUrl}/admin/adminlogin`;

        try {
            
        const response = await axios.post(`${BackEndUrl}/admin/adminlogin`, {
            adminId,
            password,
          
        });

           const {token, admin, msg} = response.data;

           localStorage.setItem("adminId",adminId._id);
            localStorage.setItem( "token", token);

            toast.success("Admin Login successful",)

           setTimeout(()=>navigate('/admindash'),1000); //1 second delay

        

        } catch (error) {
          toast.error(error?.response?.data?.msg || "login failed");
            console.error("Login error:", error?.response?.data || error.message);
           
            
        }
    };
      
  return (
    
    <>
     <div className="admin-login-page">
      <div className="login-box">
        <h2>Admin Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="adminId">Email *</label>
          <input
            type="text"
            id="adminId"
            value={adminId}
            onChange={(e)=>setAdminId(e.target.value)} 
            placeholder="Enter your email"
          />

          <label htmlFor="password">Password *</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter your password"
          />

          <button type="submit" >Login</button>
        </form>
      </div>
        <ToastContainer />
    </div>
    <TOster position="top-center"/>
       
    </>
  )
}

export default AdminLogin