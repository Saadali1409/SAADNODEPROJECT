import React, { useState } from 'react'
import BackEndUrl from '../utils/BackEndUrl';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserRegister = () => {
    const nav = useNavigate()
    const[inp, setInp] = useState("")

    const handleInput = async(e)=>{

        let name = e.target.name;
        let value = e.target.value;

        setInp(values=>({...values, [name]:value}));
        console.log(inp);
        
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        let api = `${BackEndUrl}/user/userregis`

        try {
            
            const response = await axios.post(api, inp);
            console.log(response);
            nav('/userlogin')

        } catch (error) {
            console.log(error);
            
        }
    }

  return (
    <>
      <div className="login-containerr">
        <div className="login-form">
          <h1>Register Yourself</h1>

          <div className="form-group">
            <label style={{ fontSize: "20px" }}>Enter Name</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleInput}
            />
          </div>

          <div className="form-group">
            <label style={{ fontSize: "20px" }}>Enter Email</label>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleInput}
            />
          </div>

          <div className="form-group">
            <label style={{ fontSize: "20px" }}>Enter Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInput}
            />
          </div>

          {/* <div className="form-group">
            <label style={{ fontSize: "20px" }}>Enter Contact</label>
            <input
              type="number"
              placeholder="Contact"
              name='contact'
              onChange={handleInput}
            />
          </div> */}

          <div className="form-group">
            <label style={{ fontSize: "20px" }}>Enter Address</label>
            <input
              type="text"
              placeholder="Address"
              name="address"
              onChange={handleInput}
            />
          </div>
          <button onClick={handleSubmit}>Register</button>
        </div>
      </div>
    </>
  );
}

export default UserRegister