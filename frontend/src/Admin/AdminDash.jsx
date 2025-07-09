import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import '../css/Admindash.css';
const AdminDashboard = () => {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
       <div className="main">
        <div className='topbar'>
        <h3>Dashboard</h3>
        <h2>
          Welcome to the Admin Dashboard{localStorage.getItem("adminUsr")}
        </h2>
        <button className="logout" onClick={logout}>Log out</button>
       </div>


       <div className="content">
        <aside className="sidebar">
          <ul>
            <li>
              <Link to="users">Users</Link>
            </li>

            <li>
              <Link to="addproduct">Add Product</Link>
            </li>

            <li>
              <Link to="setting">Setting</Link>
            </li>

            <li>
              <Link to="logout">Logout</Link>
            </li>

          </ul>
        </aside>

        <main className="outlet">
          <Outlet />

        </main>
       </div>
       </div>

    </>
  );
}

export default AdminDashboard;


