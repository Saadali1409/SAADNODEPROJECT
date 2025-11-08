import '../css/Header.css'; 
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios';
import BackEndUrl from '../utils/BackEndUrl';
import { useEffect } from 'react';
import { FiUser, FiSearch, FiHeart, FiShoppingBag } from "react-icons/fi";

let Header = ()=>{

  
  const nav=useNavigate()
  function handleUser(){
     nav('/userlogin')
  }

  const handleCart=()=>{
    nav('addtocard')
  }

  const auth = async()=>{
    let token= localStorage.getItem("token")
    console.log(token)

    if(token){
      let api = `${BackEndUrl}/admin/jwt`

      try {

        const response = await axios.post(api, null, {headers:{"x-token":token}})
        console.log(response.data);
        localStorage.setItem("name", response.data.name);
        nav('/admindash')
        
      } catch (error) {
        console.log(error);
        
      }
    }
  }
    useEffect(()=>{
      auth()
    },[])



    return(
        <>



         <header className="header">
      {/* <div className="top-banner">
        BEST SPECIAL OFFERS! 40% OFF!
      </div> */}
      <div className="nav-container">
        <div className="logo">
          <Link to="/">DREAM HOME FURNITURE</Link>
        </div>
        <nav className="nav">
          <ul className="nav-links">
            <li><Link to="/">HOMES</Link></li>
            <li><Link to="/shop">SHOP</Link></li>
            <li><Link to="/blog">BLOG</Link></li>
            <li><Link to="/pages">PAGES</Link></li>
            <li><Link to="/mega">MEGA</Link></li>
            <li><Link to="/contacts">CONTACTS</Link></li>
          </ul>
        </nav>
        <div className="icons">
          <FiUser onClick={handleUser} />
          <FiSearch />
          <FiHeart onClick={handleCart} />
          <FiShoppingBag onClick={handleCart} />
        </div>
      </div>
    </header>






{/*         
 <nav className="navbar">
      <ul className="nav-left">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="nav-center">
        <Link to="/" className="logo"> DREAM HOME FURNITURE</Link>
      </div>

      <ul className="nav-right">
        <li><Link to="/login">Log In</Link></li>
        <li><Link to="/addtocard" className="cart">🛒 Cart <span>0</span></Link></li>
      </ul>
    </nav>     */}
    
      </>
    )
}

export default Header;