import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BackEndUrl from "../utils/BackEndUrl";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "../css/cheackOut.css";

const CheckOut = () => {

    const navigate = useNavigate();
    const [myData, setMydata] = useState({});
    const cartData = useSelector(state => state.mycart.cart);

    const loadData = async () => {

        // ✅ FIXED: use the same key name as in Userlogin.jsx (was 'userid', now 'userId')
        const userId = localStorage.getItem("userId"); // <-- FIXED

        if (!userId) {
            toast.error("User ID missing — please log in again!");
            navigate("/userlogin");
            return;
        }

        let api = `${BackEndUrl}/user/getuser/?userid=${userId}`; // <-- FIXED
        try {
            const response = await axios.get(api);
            setMydata(response.data);
            console.log(response.data);
        } catch (err) {
            toast.error("Failed to load user data!");
            console.error(err);
        }
    };

    useEffect(() => {

        // ✅ FIXED: also match the correct key name from login (was 'username', now 'userName')
        if (!localStorage.getItem("userName")) { // <-- FIXED
            navigate("/userlogin");
            return;
        }

        loadData();
    }, []);

    let totalAmount = 0;
    let productName = "";
    let productImg = "";

    cartData.forEach((key) => {
        totalAmount += key.price * key.qnty;
        productName += key.name + " ";
        productImg += key.defaultimage;
    });

    // ✅ Razorpay script loader
    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            if (window.Razorpay) {
                resolve(true);
                return;
            }
            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const initPay = (data) => {
        if (!window.Razorpay) {
            toast.error("Razorpay SDK not loaded properly!");
            return;
        }

        const options = {
            key: "rzp_test_1H7G6ODNdV9FtJ",
            amount: data.totalAmount,
            currency: data.currency,
            name: productName,
            description: "Test",
            image: productImg,
            order_id: data.id,

            handler: async (response) => {
                try {
                    const verifyURL = "http://localhost:5000/api/payment/verify";
                    const res = await axios.post(verifyURL, response);
                    console.log("verification response: ", res.data);
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

        const loaded = await loadRazorpayScript();
        if (!loaded) {
            toast.error("Failed to load Razorpay SDK. Check your internet connection.");
            return;
        }

        try {
            const orderURL = "http://localhost:5000/api/payment/orders";
            const { data } = await axios.post(orderURL, {
                amount: totalAmount,
                products: productName,
                name: myData.name,
                city: myData.city,
                address: myData.address,
                pincode: myData.pincode,
                email: myData.email,
            });

            console.log("Order Created:", data);
            initPay(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="checkout-page">
                <h1 className="chkhead">CHECK-OUT</h1>

                <div className="checkout-container">
                    <form className="checkout-form">
                        <h3 style={{ textAlign: "center" }}>All Details</h3>
                        <label>Name:</label>
                        <input type="text" value={myData.name || ''}  />

                        <label>Email:</label>
                        <input type="email" value={myData.email || ''}  />

                        <label>Shipping Address:</label>
                        <input type="text" value={myData.address}  />

                        <label>City:</label>
                        <input type="text" value={myData.city }  />

                        <label>Contact:</label>
                        <input type="number" value={myData.contact }  />

                        <label>Pincode:</label>
                        <input type="number" value={myData.pincode }  />
                    </form>

                    <button type="button" id="BTN" onClick={handlePay}>
                        Proceed to Pay
                    </button>
                </div>
            </div>
        </>
    );
};

export default CheckOut;
