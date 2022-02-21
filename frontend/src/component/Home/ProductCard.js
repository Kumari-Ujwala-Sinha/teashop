import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import "./Product.css"
import {
  clearErrors,
  getProductDetails,
  newReview,
} from "../../actions/productAction";
import { useAlert } from "react-alert";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart } from "../../actions/cartAction";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const [quantity, setQuantity] = useState(1);
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  const increaseQuantity = () => {
    if (product.Stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    dispatch(addItemsToCart(product._id, quantity));
    alert.success("Item Added To Cart");
  };

 
  return (
    <div  className="productCard" >
    <Link to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      </Link>
      <div>
        <Rating {...options} />{" "}
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`₹${product.price}`}</span>
      <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1" style={{display:"flex"}}>
                    <button onClick={decreaseQuantity}>↓</button>
                    <h1 style={{padding:"4px"}}>{quantity}</h1>
                  
                    <button onClick={increaseQuantity}>↑</button>
                  </div>
                  <button
                    disabled={product.Stock < 1 ? true : false}
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </button>
                </div>
   
    </div>
  );
};

export default ProductCard;
