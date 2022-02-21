import React, { useState } from 'react';
import StarIcon from '@material-ui/icons/Star';
import { PinDropSharp } from '@material-ui/icons';

function MainProduct(props) {

    const[cartItemNo, setCartItemNo] = useState(0);

    const increseCartNo = ()=>{
        setCartItemNo(setCartItemNo+1);
    }
    
  return <div class="singleproduct__row">
            <div class="singleproduct__col">

                <div class="singleproduct__slider">
                    <div class="singleproduct__product">

                        <img src="/shopImages/product1.jpg" alt="" onclick="clickme(this)" />
                        <img src="/shopImages/product2.jpg" alt="" onclick="clickme(this)" />
                        <img src="/shopImages/product3.jpg" alt="" onclick="clickme(this)" />
                        <img src="/shopImages/product1.jpg" alt="" onclick="clickme(this)" />

                    </div>
                    <div class="singleproduct__preview">
                        <img src="/shopImages/product1.jpg" id="imagebox" alt=""/>
                    </div>
                </div>

            </div>
            <div class="singleproduct__col">
                <div class="singleproduct__content">
                    <h2>{props.productName}</h2>
                    <div className='mainProductRating'>
                        <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                        <span>32 Reviews</span>
                    </div>
                    <p className='prod__price'>USD $ {props.price}</p>
                    <p>Relieve occasional sleeplessness with valerian root, 
                    dandelion root, and lavender found in this mild, smooth, and caffeine-free tea. Burdock root and blackberry leaves 
                    work to help clear toxins and aid in digestion. No artificial colors,...</p>
                    <div className='singleproduct__content__input'>
                        <input type="text" placeholder='1'/>
                        <button type="button" onCLick={increseCartNo}>
                        Buy Now
                        </button>
                    </div>

                    
                </div>

            </div>
            </div>;
}

export default MainProduct;
