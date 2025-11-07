import React, { useEffect, useState } from 'react'
import BackEndUrl from '../utils/BackEndUrl'
import axios from 'axios'
// import { RiArmchairFill } from 'react-icons/ri'
// import { TbDeviceDesktopHeart } from 'react-icons/tb'
import { Table } from 'react-bootstrap'

const AllOrders = () => {

  const[mydata, setMydata]= useState([])
  const loadData = async()=>{

    let api = `${BackEndUrl}/admin/cutomerorder`

    try {
        const response = await axios.get(api)
        console.log(response.data);
        setMydata(response.data)
        
    } catch (error) {
      console.log(error);
      
    }
  }

    useEffect(()=>{
      loadData()
    }, [])


    const ans = mydata.map((key, index)=>{

      return (
        <tr>
          <td>{index + 1}</td>
          <td>{key.products}</td>
          <td>{key.amount}</td>
          <td>{key.clientname}</td>
          <td>{key.email}</td>
          <td>{key.address}</td>
          <td>{key.city}</td>
          <td>{key.pincode}</td>
          <td>
            <button style={{backgroundColor:"red"}}>Dispatch</button>
          </td>
          <td></td>
        </tr>
      );
    })

  return (
    <>
    
        <div className="table-container">
          <h1>All Orders</h1>

          <Table hover>
            <thead>
              <tr>
                <th>SR.NO</th>
                <th>PRODUCT</th>
                <th>AMOUNT</th>
                <th>CUSTOMER NAME</th>
                <th>EMAIL</th>
                <th>ADDRESS</th>
                <th>CITY</th>
                <th>PINCODE</th>
              </tr>
            </thead>
            <tbody>
              {ans}
            </tbody>
          </Table>
        </div>
      
    </>
  );
}

export default AllOrders