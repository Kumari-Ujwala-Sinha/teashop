import React from 'react';
import StarIcon from '@material-ui/icons/Star';

function RelatedProduct() {
  return <div class="singleproduct__related">
            <h2>Related items</h2>
            <div class="singleproduct__row">
                <div class="singleproduct__columns">
                    <div class="singleproduct__items">
                        <img src="/item1.jpg" alt=""/>
                        <div class="singleproduct__details">
                            <p className='related__head'>Diabetes Tea</p>
                            <div className='relatedProductRating'>
                                <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                                <span>32 Reviews</span>
                            </div>

                            <p className='related__price'>USD $120.00</p>

                        </div>
                    </div>
                </div>
                {/* <div class="singleproduct__columns">
                    <div class="singleproduct__items">
                        <img src="/item2.png" alt=""/>
                        <div class="singleproduct__details">
                            <p>Navy Blue Flared Palazzos</p>
                            <div class="singleproduct__rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-half-o"></i>
                                <i class="fa fa-star-o"></i>
                            </div>

                            <p>USD $80.00</p>

                        </div>
                    </div>
                </div> */}
                {/* <div class="singleproduct__columns">
                    <div class="singleproduct__items">
                        <img src="/item3.png" alt=""/>
                        <div class="singleproduct__details">
                            <p>Jacquard Banarasi Dupatta</p>
                            <div class="singleproduct__rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                            </div>

                            <p>USD $110.00</p>

                        </div>
                    </div>
                </div> */}
                {/* <div class="singleproduct__columns">
                    <div class="singleproduct__items">
                        <img src="/item4.png" alt=""/>
                        <div class="singleproduct__details">
                            <p>Printed Straight Kurta</p>
                            <div class="singleproduct__rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-half-o"></i>
                                <i class="fa fa-star-o"></i>
                            </div>

                            <p>USD $100.00</p>

                        </div>
                    </div>
                </div> */}
            </div>
</div>;
}

export default RelatedProduct;
