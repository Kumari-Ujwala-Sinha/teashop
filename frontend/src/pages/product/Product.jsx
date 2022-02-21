import  React, { useEffect, useLayoutEffect, useState } from "react";
import "./product.css";
import RelatedProduct from "./RelatedProduct";
import MainProduct from "./MainProduct";
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import CustomerReview from "./CustomerReview";
import Description from "./Description";
import Header from "../../component/header/Header";
import { useParams } from "react-router-dom";
import ProductApi from "./productsApi";

function Product() {
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  // let { name } = useParams();

  // const[items,setItems] = useState();

  // const filterItem = (name)=>{
  //   const updatedItems = ProductApi.filter((currElem)=>{
  //     return currElem.category === name;
  //   })
  //   setItems(updatedItems);  
  //   console.log(items);
  // }
 
  // useEffect(() => {
  //   filterItem(name);
  // }, [])
  
  return (
    <div class="singleproduct">
      <Header />
      <MainProduct />
      <Description />
      <RelatedProduct />
      <CustomerReview />
    </div>
  );
}

export default Product;
