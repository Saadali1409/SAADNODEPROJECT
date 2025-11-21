import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import BackEndUrl from '../utils/BackEndUrl';
import axios from 'axios';
import { toast, Toaster } from "react-hot-toast";
import '../css/AdminAddProducts.css'

const AddProducts = () => {
  const [inp, setInp] = useState({});
  const [image, setImage] = useState([]);

  // ✅ FIX: handleFile should log e.target.files directly (setState is async)
  function handleFile(e) {
    setImage(e.target.files);
    console.log(e.target.files); // better debugging
  }

  function handleInput(e) {
    let name = e.target.name;
    let value = e.target.value;
    setInp(values => ({ ...values, [name]: value }));
  }

  async function formSubmit(e) {
    e.preventDefault();

    let api = `${BackEndUrl}/admin/productsave`;

    const formData = new FormData();

    // ✅ FIX: Don't use "for (const e in inp)" — that reuses variable name incorrectly
    for (const key in inp) {
      formData.append(key, inp[key]);
    }

    // ✅ FIX: Append images properly
    for (let i = 0; i < image.length; i++) {
      formData.append("images", image[i]);
    }

    try {
      // ✅ FIX: Always wrap axios in try/catch
      const res = await axios.post(api, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // important
        },
      });

      console.log("Response:", res.data);
      toast.success("Product added successfully!");
    } catch (err) {
      // ✅ FIX: Catch and log backend error
      console.error("Error uploading product:", err.response?.data || err.message);
      toast.error("Error adding product");
    }
  }

  return (
    <>
      <div id="contain">
        <Form id="frm" onSubmit={formSubmit}>
          <h3>Add Product</h3>

          <Form.Group className="mb-3">
            <Form.Label>Enter Product name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Product name"
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Enter Product description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              placeholder="Description"
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Enter Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              placeholder="Price"
              onChange={handleInput}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Choose files</Form.Label>
            <Form.Control type="file" multiple onChange={handleFile} />
          </Form.Group>

          <Button id="btn" variant="primary" type="submit">
            Add Product
          </Button>
        </Form>
      </div>

      {/* <Toaster position="top-center" reverseOrder={false} /> */}
    </>
  );
};

export default AddProducts;
