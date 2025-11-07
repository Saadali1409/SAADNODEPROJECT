
import React from "react";
import Button from "react-bootstrap/Button";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { RiSettings5Line } from "react-icons/ri";
import { GiShoppingCart } from "react-icons/gi";
import { FiPackage } from "react-icons/fi";
import { TbHelpTriangleFilled } from "react-icons/tb";
import { LuLogOut } from "react-icons/lu";
import { MdHomeRepairService } from "react-icons/md";
import toast, {Toaster} from "react-hot-toast";

const UserDash = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    toast.success("User Loged Out Successfully!! ")
    setTimeout(()=>{
    navigate("/");
    },1500);//wait 1 sec

  };

  return (
    <>
      <div id="mainPG">
        <div id="topvar">
          <h3>USER Dashboard!</h3>

          <Button id="btn2" onClick={logout}>
            <LuLogOut /> Log out!
          </Button>
        </div>
        
        <h2 style={{ color: "white" }}>Welcome!</h2>
        <div className="sidetab">
          <ul>
            <li>
              <Link to="users" id="link">
                <GiShoppingCart /> Orders
              </Link>
            </li>

            <li>
              <Link to="addproduct" id="link">
                <FiPackage /> Products
              </Link>
            </li>

            <li>
              <Link to="setting" id="link">
                <MdHomeRepairService /> Services
              </Link>
            </li>

            <li>
              <Link to="setting" id="link">
                <TbHelpTriangleFilled />   Help
              </Link>
            </li>

            <li>
              <Link to="setting" id="link">
                <RiSettings5Line /> Settings
              </Link>
            </li>

            <li>
              <Link to="logout" id="link">
                <LuLogOut /> Logout
              </Link>
            </li>
          </ul>
        </div>

        <Outlet />
        <Toaster position="top-center"  reverseOrder={false}/>
      </div>
    </>
  );
};

export default UserDash;
