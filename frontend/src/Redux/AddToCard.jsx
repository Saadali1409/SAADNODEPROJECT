import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { dataIncrease, dataDecrease, itemRemove } from '../Redux/cartSlice';
import { FaSquarePlus, FaSquareMinus } from "react-icons/fa6";
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../css/AddToCart.css';
import { useEffect } from 'react';
import { useState } from 'react';


const AddToCart = () => {
  const navigate = useNavigate();
  const cartData = useSelector(state => state.mycart.cart );
  const dispatch = useDispatch();

 const [cartItems, setCartItems] = useState([]);

  let totalAmount = 0;

  const ans = cartData.map((key) => {
    totalAmount += key.price * key.qnty;
    return (
      <tr key={key.id}>
        <td><img src={key.defaultimage} className="cart-product-image" alt={key.name} /></td>
        <td>{key.name}</td>
        <td className="currency-icon"> <strong>Rs.</strong>{key.price}</td>
        <td>
          <FaSquarePlus className="qty-icon" onClick={() => dispatch(dataIncrease({ id: key.id }))} />
          <span className="quantity-value">{key.qnty}</span>
          <FaSquareMinus className="qty-icon" onClick={() => dispatch(dataDecrease({ id: key.id }))} />
        </td>
        <td className="currency-icon"><strong>Rs.</strong>{key.qnty * key.price}</td>
        <td><button className="remove-btn" onClick={() => dispatch(itemRemove({ id: key.id }))}>Remove</button></td>
      </tr>
    );
  });


   // ✅ Load cart items from local storage on mount
  useEffect(() => {
    const cart = localStorage.getItem("cartItems");
    if (cart) {
      setCartItems(JSON.parse(cart));
    }
  }, []);

  // ✅ Corrected Checkout Handler for reusability
  const handleCheckout = () => {
    const token = localStorage.getItem('userToken');

    if (token) {
      // ✅ Logged in - navigate to checkout
      navigate("/checkout");
    } else {
      // ❌ Not logged in - show warning & redirect to login
      toast.warn("⚠️ Please login first to proceed!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // ✅ Redirect to login after 3 seconds
      setTimeout(() => {
        navigate("/userlogin",
        // { state: { from: "/checkout" } }
      
      );

      }, 3000);
    }
  };

  return (
    <>
      {/* <Header /> */}

      <div className="cart-head">
        <h1>SHOPPING CART</h1>
      </div>

      {/* <Outlet /> */}

      <div className="cart-container">
        <Table className="cart-table">
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>PRODUCT NAME</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>TOTAL</th>
              <th>REMOVE ITEM</th>
            </tr>
          </thead>
          <tbody>
            {ans}
            <tr className="total-row">
              <td colSpan="4"></td>
              <td className="total-label">TOTAL AMOUNT: </td>
              <td className="total-value">Rs.{totalAmount}</td>
            </tr>
          </tbody>
        </Table>

        <div className="checkout-section">
          <h3>Total : Rs.{totalAmount}</h3>

          {/* ✅ Final Fixed Checkout Button */}
          <button className="checkout-btn" onClick={handleCheckout}>
            <strong>CheckOut</strong>
          </button>
        </div>
      </div>

      {/* <Footer /> */}
      <ToastContainer />
    </>
  );
};

export default AddToCart;
