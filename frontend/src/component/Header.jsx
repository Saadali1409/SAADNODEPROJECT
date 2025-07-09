import '../css/Header.css'; 
import { Link } from "react-router-dom";

let Header = ()=>{
    return(
        <>
 <nav className="navbar">
      <ul className="nav-left">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/lookbook">Lookbook</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="nav-center">
        <Link to="/" className="logo"><i>Day.</i> DREAM</Link>
      </div>

      <ul className="nav-right">
        <li><Link to="/login">Log In</Link></li>
        <li><Link to="/cart" className="cart">🛒 Cart <span>0</span></Link></li>
      </ul>
    </nav>    
    
      </>
    )
}

export default Header;