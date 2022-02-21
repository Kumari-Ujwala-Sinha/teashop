import React, { useLayoutEffect, useState } from 'react';
import HomeHeader from '../../component/HomeHeader/HomeHeader';
import './shop.css';
import StarIcon from '@material-ui/icons/Star';
import { Link } from 'react-router-dom';
import ShopApi from './ShopApi';

function AllProducts() {
  
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  // const[active, setActive] = useState(true);
  const[items, setItems] = useState(ShopApi);

  const filterItem = (category)=>{
    const updatedItems = ShopApi.filter((currElem)=>{
        return currElem.category === category;
    })

    // list.forEach(element => {
    //     element.classList.remove('tabActive');
    // });
    // let list = document.getElementsByClassName('shopTabItem');
    // const removeNav=()=>{
    //   for(let i=0;i<list.length;i++){
    //       for(let j=0;j<list.length;j++){
    //           list[j].classList.remove('tabActive');
    //           // setActive(true); 
    //       } 
    //   }
    //   removeNav();

      setItems(updatedItems);
  }
  // this.classList.add('tabActive');
    // document.getElementsByClassName(category)[0].classList.add('tabActive');

  return <div className='shopProducts'>
            <HomeHeader />
            <div className='shopHeader'>
              <img src="/shopImages/shopHeader.jpg" className='shopHeaderImg' />

              <div className='shopHeaderDetail'>
                  <h2 className='shopHeaderTitle'>WELNESS TEA</h2>
                  <p className='shopHeaderPara'>Boost your health by sipping a cup of tea lodged with a concoction of herbs, spices, and botanical ingredients to bless you with all the health benefits.     </p>
              </div>
            </div>

            
            <div className='shopProductsWrapper'>

            <div className='shopTabsContainer'>
                <div className='shopTabItem tabActive' onClick={()=> setItems(ShopApi)}>All</div>
                <div className='shopTabItem' onClick={()=> filterItem('mental wellness')}>Mental Wellness</div>
                <div className='shopTabItem' onClick={()=> filterItem('weight management')}>Weight Management</div>
                <div className='shopTabItem' onClick={()=> filterItem('women wellness')}>Women Wellness</div>
                <div className='shopTabItem' onClick={()=> filterItem('skin wellness')}>Skin Wellness</div>
                <div className='shopTabItem' onClick={()=> filterItem('heart wellness')}>Heart Wellness</div>
            </div>
              <div className='shopFilter'>
                  <span>Sort By :</span>
                  <select className="shopFilterInput">
                    <option value="featured">Featured</option>
                    <option value="best-selling">Best Selling</option>
                    <option value="lowtohigh">Price, Low To High</option>
                    <option value="hightolow">Price, High To Low</option>
                  </select>
              </div>
              <div className='shopAllProducts'>
                 
                  {
                    items.map((val)=>{
                      return (
                        <div className='shopProductOne'><Link to={val.path}>
                            <img src={val.image} className='s_ProductImg' />

                            <div className='s_ProductDetail'>
                                <div className='productRating'>
                                    <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                                    <span>{val.rating} Reviews</span>
                                </div>
                                <h2 className='s_ProductHead'>{val.name}</h2>
                                <p className='s_productCategory'>{val.category}</p>
                                <div className='s_ProductQty'>
                                  <span>{val.pouch} pouch</span>
                                  <span>{val.cups} cups</span>
                                </div>
                                <div className='s_ProductPrice'>$ {val.price}</div>
                                <button className='s_ProductBtn'>ADD TO BAG</button>
                            </div></Link>
                        </div>
                      )
                    })
                  }

              </div>  
            </div>
        </div>;
}

export default AllProducts;
