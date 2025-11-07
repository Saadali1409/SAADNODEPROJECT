import  { useState } from 'react'
import BackEndUrl from '../utils/BackEndUrl';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/AddProducts.css'



// -----------------------------------------------------------//
const AddProducts = () => {
    
    const[inp,setInp]=useState({})
    const[image,setImage]=useState([])
   
     function handleInput(e){

       let name= e.target.name
       let value=e.target.value
       
       setInp(values=>({...values,[name]:value}))
       
     }

     function handleFile(e){
       
       setImage(e.target.files)
       console.log(image);
     }
         
      async function formSubmit(e) {
        
         e.preventDefault()
        
          let api=`${BackEndUrl}/admin/productsave`;

         const formData=new FormData()

         for(const e in inp){
          formData.append(e,inp[e])
        
         }

         for(let i=0;i<image.length;i++){
          formData.append('images',image[i])
          
         }

         await axios.post(api,formData).then((res)=>{
            
            console.log(res.data)
         })
         console.log(formData)
          toast.success("Product added successfull");

  

    //    try {
    //   const res = await axios.post(api, formData);
    //   console.log(res.data);
    //   toast.success('Product added successfully!', {
    //     position: 'top-right',
    //     autoClose: 3000,
    //   });
    // } catch (error) {
    //   console.error(error);
    //   toast.error('Failed to add product.', {
    //     position: 'top-right',
    //     autoClose: 3000,
    //   });
    // }

 }    
 
  return (
    <>
        <div id="contain">
        <Form id='frm' >
          <h3>Add Product</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label id='lavel' >Enter Product name</Form.Label>
            <Form.Control type="text" name='name' placeholder='Product name' onChange={handleInput}  />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter Product description</Form.Label>
            <Form.Control type="text" name='description' placeholder='Description' onChange={handleInput} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter Price</Form.Label>
            <Form.Control type="number" name='price' placeholder='Price' onChange={handleInput} />
          </Form.Group>

         

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Choose files</Form.Label>
            <Form.Control type="file" multiple  onChange={handleFile} />
          </Form.Group>

          <Button id='btn' variant="primary" type="submit" onClick={formSubmit}>
            Add Product
          </Button>
        </Form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default AddProducts