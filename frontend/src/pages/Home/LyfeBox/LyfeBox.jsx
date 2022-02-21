import React from 'react';
import { Link } from 'react-router-dom';
import './lyfebox.css';


function Allproduct() {
  return <>
  <div className='product'>
            <div className='product__header'>
                <h1 className='text__wrapper__head'>GET LYFE</h1>  
            </div>
            
            <div className='product__items'>
                <div className='productImgContainer'>
                    <div className='boxItemOne'><Link to='/product/mental-wellness'>
                        <img src="homeImg/box1.jpg" className='lyfeBoxImg' />
                        <h2>Mental Wellness</h2></Link>
                    </div>
                    <div className='boxItemOne'><Link to='/product/weight-management'>
                        <img src="homeImg/box2.jpg" className='lyfeBoxImg' />
                        <h2>Weight Management</h2></Link>
                    </div>
                    <div className='boxItemOne'><Link to='/product/women-wellness'>
                        <img src="homeImg/box3.jpg" className='lyfeBoxImg' />
                        <h2>Women Wellness</h2></Link>
                    </div>
                    <div className='boxItemOne'><Link to='/product/skin-wellness'>
                        <img src="homeImg/box4.jpg" className='lyfeBoxImg' />
                        <h2>Skin Wellness</h2></Link>
                    </div>
                    <div className='boxItemOne'><Link to='/product/heart-wellness'>
                        <img src="homeImg/box1.jpg" className='lyfeBoxImg' />
                        <h2>Heart Wellness</h2></Link>
                    </div>
                    
                </div>      
            </div>
        </div>
        </>
}

export default Allproduct;

