import  { useState } from 'react'
import BackEndUrl from '../utils/BackEndUrl'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
            
        const response = await axios.post(api, {adminId:adminId, password:password});
        toString.success (response.data.msg,{
          position:"top-center",
          autoClose: 2000,
          hideProgressBar:false,
        });
           localStorage.setItem("adminId",response.data.adminId)

           setTimeout(()=>navigate('/admindash'),2500);

        

        } catch (error) {
          toast.error(error.response?.msg || "login failed",{
           position:"top-center",
           autoClose:3000,
           hideProgressBar:false,
         } );
            
        }
    }
      
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
       
    </>
  )
}

export default AdminLogin