import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";

import { useAlert } from "react-alert";

import MetaData from "../layout/MetaData";
import { Link } from "react-router-dom";

const categories = [
  "Mental Wellness",
  "Weight Management",
  "Women Wellness",
  "Skin Wellness",
  "Heart Wellness",

];

const Products = ({ match }) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("-createdAt");

  const [ratings, setRatings] = useState(0);

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  
  let count = filteredProductsCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword, currentPage, price, category, ratings,sort));
  }, [dispatch, keyword, currentPage, price, category, ratings, alert, error,sort]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          
         
            
            <div className='shopHeader'>
              <img src="/shopImages/shopHeader.jpg" className='shopHeaderImg' />

              <div className='shopHeaderDetail'>
                  <h2 className='shopHeaderTitle'>WELNESS TEA</h2>
                  <p className='shopHeaderPara'>Boost your health by sipping a cup of tea lodged with a concoction of herbs, spices, and botanical ingredients to bless you with all the health benefits.     </p>
              </div>
            </div>

            
            <div className='shopProductsWrapper'>

            <div className='shopTabsContainer'>
           <Link to="/products"> <div className='shopTabItem tabActive'  onClick={() => setCategory("")}>All</div></Link>
            {categories.map((category) => (
                <div
                  className="shopTabItem"
                  key={category}
                  onClick={() => setCategory(category)}
                >
                  {category}
                </div>
              ))}

                
            </div>
              <div className='shopFilter'>
                  <span>Sort By :</span>
                  <select className="shopFilterInput" onChange={(e) => setSort(e.target.value)}>
                  <option value="-ratings"  >---sort by---</option>
                    <option value="-ratings"  >Featured</option>
                    <option value="-sold">Best Selling</option>
                    <option value="price" 
                  >Price, Low To High</option>
                    <option value="-price" 
                  >Price, High To Low</option>
                  </select>
              </div>
              
              
            </div>
      
          

          <div className="products">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          
          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
