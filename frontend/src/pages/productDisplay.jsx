import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BackEndUrl from "../utils/BackEndUrl";
import axios from "axios";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "../css/productDisplay.css"; // Assuming you have a CSS file for styling


const ProductDisplay = () => {
  const { id } = useParams();
  const [mydata, setMydata] = useState({});
  const [imglist, setimgList] = useState([]);
  const [DefaultImage, SetDefaultImage] = useState("");

  // console.log(imglist);

  const loadData = async () => {
    let api = `${BackEndUrl}/product/productdis/?id=${id}`;

    try {
      const response = await axios.get(api);
      console.log(response.data);
      setMydata(response.data);
      setimgList(response.data.image  );
      SetDefaultImage(response.data.defaultimage);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const ans = imglist.map((key, index) => (

    
        <img
          src={key}
          key={index}
          width="50"
          height="50"
          style={{ border: "5px solid lightblue", margin: "5px" }}
          onMouseOver={() => {
            SetDefaultImage(key);
          }}
          
          alt={`Thumbnail ${index}`}
        />
        
        
      
  
  ));

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <div className="product-container">
        <div className="product-left">
          <img className="main-image" src={DefaultImage} alt="Main product" />
          <div className="thumbnail-row">{ans}</div>
        </div>

        <div className="product-right">
          <h3 className="product-title">{mydata.name}</h3>
          <p className="product-description">{mydata.description}</p>
          <p className="product-price">Rs. {mydata.price}</p>
          <p className="product-subtext">Tax included.</p>
          <p className="product-stock-info">
            6575 people are viewing this product right now.
          </p>

          {/* Rating Section */}
          <div className="rating">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star" style={{ color: "#ccc" }}>
              ★
            </span>
            <span style={{ marginLeft: "8px", color: "#777" }}>
              4.0 (120 reviews)
            </span>
          </div>

          <button className="buy-now-btn">Buy Now</button>
        </div>
      </div>{" "}
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};
export default ProductDisplay;