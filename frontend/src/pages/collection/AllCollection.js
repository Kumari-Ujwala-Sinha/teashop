import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../component/header/Header';
import './collection.css';
import collectionItem from './collectionItems';

function Collection() {

  return <div className='collection'>
            <Header />
            
            <div className='shopAllCollection'>
                <div className='collectionWrapper'>
                    <h2>Shop All Products</h2>
                    
                    <div className='collectionProducts'>
                        {
                            
                            collectionItem.map((val)=>{
                                
                                
                                return (
                                    <div className='colProduct2'><Link className='linkProduct' to="/product" >
                                        <img src={val.image} className='colProductImg'/>
                                        <div className='colProductDesc'>
                                            <div className='colProductTitle'>{val.name}</div>
                                            <div class="singleproduct__rating">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star-half-o"></i>
                                            </div>
                                            <div className='colProductPrice'>{val.price}</div>
                                        </div></Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                </div>
            </div>
  </div>;
}

export default Collection;
