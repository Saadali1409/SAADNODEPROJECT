import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import BackEndUrl from "../utils/BackEndUrl";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/Home.css";

const Home = () => {
  const dis = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.mycart.cart); 
  const [myData, setMydata] = useState([]);

  const loadData = async () => {
    let api = `${BackEndUrl}/product/homepage`;
    try {
      const response = await axios.get(api);
      setMydata(response.data);
      // console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item.id === product._id);

    if (exists) {
      toast.warning("Product already in cart");
    } else {
      dis(
        addToCart({
          id: product._id,
          name: product.name,
          price: product.price,
          defaultimage: product.defaultimage,
          qnty: 1,
        })
      );
      toast.success("Product added to cart");
    }
  };

  return (
    <>
      <div className="card-parent">
        <h3 className="collection-heading">
          LATEST COLLECTION
        </h3>

        <div className="card-con">
          {myData.length === 0 ? (
            <p className="no-products">No products available</p>
          ) :  // agar koi dikkat ayi toh yaha se lekar myData.length tak ka code hata dena
          myData.map((e) => (
            <div className="card" key={e._id}>
              <div className="card-img">
                <img
                  src={e.defaultimage}
                  alt={e.name}
                  onClick={() => navigate(`/productdis/${e._id}`)}
                />
              </div>
              <div className="card-content">
                <p>{e.name}</p>
                <p>PRICE : {e.price}</p>
              </div>
              <div>
                <Button onClick={() => handleAddToCart(e)}>Add to cart</Button>
              </div>
            </div>
          ))
          }
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default Home;
