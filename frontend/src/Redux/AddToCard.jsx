import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import {dataIncrease, dataDecrease} from '../Redux/cartSlice'
import { FaSquarePlus } from "react-icons/fa6";
import { FaSquareMinus } from "react-icons/fa6";
import { FaRupeeSign } from "react-icons/fa";
// import "../css/AddToCart.css"


const AddToCart = () => {
     const cardData = useSelector(state =>state.mycart.cart);
        const dispatch = useDispatch();

        let totalAmount = 0;
        const ans = cardData.map((key) => {
       

    return (
        <>
        <tr>
          <td>
            <img src={key.defaultImage} width="100px" height="100px" />
          </td>
          <td>{key.name}</td>
          <td>{key.description}</td>
          <td>{key.category}</td>
          <td>{key.price}</td>
          <td>
            <FaSquarePlus onClick={()=>{dispatch(dataIncrease({id:key.id}))}} />
              {key.qnty}
              <FaSquareMinus onClick={()=>{dispatch(dataDecrease({id:key.id}))}} />
          </td>
    
          <td> {key.qnty * key.price} </td>
         
         <td>
          <Button onClick={()=>{dispatch(itemRemove({id:key.id}))}}>Remove</Button>
         </td>
        </tr>
        </>
           )
           })
           return (
    <>
      <div id="saad">
        <h1>Our Cart Data</h1>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Product name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {ans}
          <tr>
            <th colSpan="6">
              <b>Total Price: </b>
            </th>

            <th>{totalAmount}</th>
            <th> </th>
          </tr>
        </tbody>
      </Table>
      <h3>
        <FaRupeeSign /> {totalAmount}
        <Button>Check Out</Button>
      </h3>
      
    </>
  );
}

export default AddToCart
