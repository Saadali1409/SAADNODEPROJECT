import '../css/FrontPage.css'
import img2 from "../images/img2.jpg";
import img1 from "../images/img1.jpg"
import img3 from "../images/img3.jpg";
import card1 from "../images/card1.webp";
import card2 from "../images/card2.webp";
import card3 from "../images/card3.webp";
import card4 from "../images/card4.webp";
import card5 from "../images/card5.webp";
import card6 from "../images/card6.webp";
import one from "../images/one.jpeg";
import two from "../images/two.jpeg";
import three from "../images/three.jpeg";
import product1 from "../images/product1.webp";
import Product2 from "../images/Product2.webp";
import browse from "../images/browseroom1.jpg";
import browse1 from "../images/browse2.jpeg";
import video from "../images/video1.mp4";

const FrontPage = () => {
    return ( 
        <>
        
        <div className="front-page">
         <div className="content">
            <h1><span>Exquisite design <br />combined with <br /> functionalities</span></h1>
            <p>Pellentesque ullamcorper dignissim condimentum <br />volutpat consequat mauris nunc lacinia quis.</p>
         </div>

         <div className="img">

            <div className='img3'>
              <img src={img3} alt="" />
            
             </div>

           {/* <div className='img2'>
           <img src={img2} alt="" />
          </div> */}

           <div className='img1'>
            <img src={img1} alt="" />

           <img className='killkill' src={img2} alt="" />

            </div>
              

         </div>


        </div>
      

    {/* ---------------------------------  section 2 ---------------------------------------------------------------- */}
  <div className='section2'>
     <h1> <span>Bestsellers of the week</span> </h1>
     <p>Quam elementum pulvinar etiam non quam. Faucibus nisl tincidunt eget nullam non nisi elementum sagittis vitae et leo duis ut diam quam.</p>

  </div>
  <div className='item'>
   
     <div className='item-card'>
       <img src={card1} alt="" />
         <h3>Diam Volutpat</h3>
         <p>Decor</p>
         <p className='price'>$400</p>
         <button className='btn'>Add to cart</button>
     </div>


    
     <div className='item-card'>
       <img src={card2} alt="" />
         <h3>Aliquam Blandit</h3>
         <p>Tables</p>
         <p className='price'>$400</p>
         <button className='btn'>Add to cart</button>
     </div>
     


     <div className='item-card'> 
       <img src={card3} alt="" />
         <h3>Augue Mauris</h3>
         <p>chairs</p>
         <p className='price'>$400</p>
         <button className='btn'>Add to cart</button>
     </div>



     <div className='item-card'> 
       <img src={card4} alt="" />
         <h3>Bibendum Arcu</h3>
         <p>chairs</p>
         <p className='price'>$400</p>
         <button className='btn'>Add to cart</button>
     </div>




     <div className='item-card'> 
       <img src={card5} alt="" />
         <h3>Commodo Amcorper</h3>
         <p>Beds</p>
         <p className='price'>$400</p>
         <button className='btn'>Add to cart</button>
     </div>


     <div className='item-card'> 
       <img src={card6} alt="" />
         <h3>Diam Arcu</h3>
         <p>Sofas</p>
         <p className='price'>$400</p>
         <button className='btn'>Add to cart</button>
     </div>


  </div>


      {/* ---------------------------------  section 3 ---------------------------------------------------------------- */}

   <div className='section3'>
   <div className='section3-0ne'>
       <h1> <span>Browse by rooms</span> </h1>
       <p>Sit massa etiam urna id. Non pulvinar aenean ultrices lectus vitae <br />imperdiet vulputate a eu. Aliquet ullamcorper leo mi vel sit pretium <br /> euismod eget..</p>
       <img src={browse} alt="" />
   </div>

   <div className='section3-two'>
         <div className='section3-card'>
            <img src={browse1} alt="" />
         </div>
   
         <div className='section3-card1'>
            <img src={img2} alt="" />
            
        
            <img src={img3} alt="" />
            
         </div>
   </div>

   </div>

   {/* section 4 */}



   <div className='section2'>
     <h1> <span>Top selling furniture</span> </h1>
     <p>Quam elementum pulvinar etiam non quam. Faucibus nisl tincidunt eget <br />nullam non nisi elementum sagittis vitae et leo duis ut diam....</p>

  </div>
  <div className='item'>
   
     <div className='item-card'>
       <img src={product1} alt="" />
         <h3>Mollis Nunc</h3>
         <p>Storage</p>
         <p className='price'>$400</p>
         <button className='btn'>Add to cart</button>
     </div>


    
     <div className='item-card'>
       <img src={card1} alt="" />
         <h3>Diam Volutpat</h3>
         <p > Decor </p>
         <p className='price'>$400</p>
         <button className='btn'>Add to cart</button>
     </div>
     


     <div className='item-card'> 
   <img src={Product2} alt="" />
         <h3>Sem Integer</h3>
         <p >Storage</p>
         <p className='price'>$400</p>
         <button className='btn'>Add to cart</button>
     </div>

  </div>

{/* section 5 */}


<h1  style={{ alignItems:"center", justifyContent:"center", marginLeft:"500px"}}>Special Discount </h1>

<div class="discounts">
  
  <div class="card special">
            <img src={one} alt="" />
    <h2>Special Discount <br /> <span>30% OFF</span></h2>
    <p>Aliquet sagittis purus faucibus egestas.</p>
    <button>Browse Now</button>
  </div>

  <div class="card weekly">
            <img src={two} alt="" />
    <h2>Weekly Discount <br /> <span>25% OFF</span></h2>
    <p>Nulla facilisi cras fermentum odio feugiat.</p>
    <button>Browse Now</button>
  </div>

  <div class="card birthday">
            <img src={three} alt="" />
    <h2>Birthday Discountbr <br /> <span>40% OFF</span></h2>
    <p>Porta non pulvinar neque laoreet suspendisse.</p>
    <button>Browse Now</button>
  </div>
</div>

{/* section 6 */}

<div className="video-section">
      <video
        className="bg-video"
        src={video}
        autoPlay
        muted
        loop
        playsInline
      ></video>
      <div className="video-overlay">
        <div className="video-content">
          <h2 className="video-title">Luxurious Furniture Starts <br /> with the Best Quality Materials</h2>
          <p className="video-subtitle">
            Donec et odio pellentesque diam volutpat commodo amet consectetur adipiscing elit....
          </p>
          {/* <button className="shop-now-btn">Shop Now</button> */}
        </div>
      </div>
    </div>


   {/* section 7 */}


  <marquee behavior="scroll" direction="right" scrollamount="20" loop="infinite" >
    <div className='marquee' style={{display:"flex", alignItems:"center", justifyContent:"space-between" ,marginTop:"20px",gap:"20px" }}>
      
        <img src="https://dukaan.b-cdn.net/700x700/webp/upload_file_service/c153799b-2716-4a2d-86a6-e8e4c2efc027/whatsapp-image-2023-02-19-at-11-46-23-pm.jpeg" alt="Team" style={{ width: "150px", height: "px", borderRadius:"20%" }} />


        <img src="https://m.media-amazon.com/images/I/71u3F2NZ9gL.jpg" alt="Team" style={{ width: "150px", height: "150px",  borderRadius:"20%" }} />


        <img src="https://buildhub.in/storage/bedroom-sets/10-bh-sleek-bedroom-set-with-bed-3-door-wardrobe-side-table-and-dressing-table-4.jpg" alt="Team" style={{ width: "150px", height: "150px" ,  borderRadius:"20%" }} />


        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjT4BTcha6TUAVsnStj6fJGolxyJLAc2eN_A&s" alt="Team" style={{ width: "150px", height: "150px" ,  borderRadius:"20%" }} />



        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPWPdQ6A3MEx3uIHs_gVOsPc_1TGSfp607zg&s" alt="Team" style={{ width: "150px", height: "150px" ,  borderRadius:"20%" }} />
        

        <img src="https://woodenbazar.com/cdn/shop/files/royal-furniture-design-2024-bedroom-set-wooden-bazar-118.webp?v=1729442682" alt="Team" style={{ width: "150px", height: "150px",   borderRadius:"20%" }} />



         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_lfLkd2zNY48DL7oLENJOF3Vxiq3HnHQ-7g&s" alt="Team" style={{ width: "150px", height: "150px" ,  borderRadius:"20%" }} />



          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCsQV8LrYVblYd8mHkK7w-HH1GUZzLNKlvfA&s" alt="Team" style={{ width: "150px", height: "150px" ,  borderRadius:"20%" }} />



           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPD6gzWOUhVrU8gbUqWJk831a1nmYxatDWjg&s" alt="Team" style={{ width: "150px", height: "150px" ,  borderRadius:"20%" }} />



            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqgF8cY9bx77WSbXu2TO89jDxLCCdlu1Gh5Q&s" alt="Team" style={{ width: "150px", height: "150px" ,  borderRadius:"20%" }} />

</div>
  </marquee>





   {/* section 8 */}

<div className="headding">
  <h2>Happy Clients</h2>
</div>

<div className="clients-container">
   <div className="client-card">
   <img src={img1} alt="" />
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
      <h3>John Doe</h3>
   </div>
   
   <div className="client-card">
   <img src={img1} alt="" />
      <p>"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
      <h3>Jane Smith</h3>
   </div>
   
   <div className="client-card">
   <img src={img1} alt="" />
      <p>"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</p>
      <h3>Emily Johnson</h3>
   </div>



</div>

   </> );
} 
export default FrontPage;