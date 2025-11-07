import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackEndUrl from "../utils/BackEndUrl";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const CheckOut = () => {

    const navigate = useNavigate();
    

    const[myData, setMydata] = useState({});

    const cartData = useSelector(state=>state.mycart.cart);
    console.log(cartData)


    const loadData = async()=>{
        let api = `${BackEndUrl}/user/getuser/?userid=${localStorage.getItem('userid')}`
        try{
        const response = await axios.get(api);
        setMydata(response.data);
        // setProdata(response.data)
        console.log(response.data);
        }
        catch(err){
            toast.error("Failed to load user data!");
        }
        
    }
        useEffect(()=>{
            if(localStorage.getItem('username')){
                navigate('/userlogin')
            }

            loadData()
          
        }, [])


        let totalAmount = 0;
        let productName= "";
        let productImg= "";

        const ans = cartData.map((key)=>{
            totalAmount += key.price * key.qnty;
            productName += key.name + " ";
            productImg += key.defaultimage;
        })

        const initPay = (data) => {
          const options = {
            key: "rzp_test_NYJEc9muczQH1r",
            amount: data.totalAmount,
            currency: data.currency,
            name: productName,
            description: "Test",
            image: productImg,
            order_id: data.id,

            handler: async (response) => {
              try {
                const verifyURL = "http://localhost:5000/api/payment/verify";
                const  data  = await axios.post(verifyURL, response);
                console.log('verification response: ', response.data);
                
              } catch (error) {
                console.log(error);
              }
            },
          };
          const rzp1 = new window.Razorpay(options);
          rzp1.open();
        };

        const handlePay = async (e) => {
          e.preventDefault();
            try {
              const orderURL = "http://localhost:5000/api/payment/orders";
              const {data} = await axios.post(orderURL,{
                
              amount: totalAmount, 
              products:productName, 
              name:myData.name, 
              city:myData.city, 
              address:myData.address,
              pincode:myData.pincode, 
              email:myData.email});


              console.log(data);
              initPay(data.data)
            } catch (error) {
              console.log(error);
            }
        }        
  return (
    <>
      {/* <img src={checkbg} style={{width:"100%", maxHeight:"500px"}}/> */}
    
      <div className="checkout-page">
        <h1 className="chkhead">CHECK-OUT</h1>
        
        <div className="checkout-container">
      
          <form className="checkout-form">
            <h3 style={{ textAlign: "center" }}>All Details</h3>
            <label>Name:</label>
            <input type="text" value={myData.name || ""} readOnly />

            <label>Email:</label>
            <input type="email" value={myData.email || ""} readOnly />

            <label>Shipping Address:</label>
            <input type="text" value={myData.address || ""} readOnly />

            <label>City:</label>
            <input type="text" value={myData.city || ""} readOnly />

            <label>Contact:</label>
            <input type="number" value={myData.contact || ""} readOnly />

            <label>Pincode:</label>
            <input type="number" value={myData.pincode || ""} readOnly />
          </form>

          <button type="button" id="BTN" onClick={handlePay}>
            Proceed to Pay
          </button>
        </div>
      </div>
    </>
  );
}


export default CheckOut