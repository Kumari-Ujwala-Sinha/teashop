import React from 'react';
import './cart.css';
import Header from "../../component/header/Header";
import { Link } from 'react-router-dom';

function Cart() {
  return <div className='mainCart'>
                <Header />

                <div className='cartItemsWrapper'>
                    <div className='mainCartRow'>

                        <div className='cartItemsCol1'>
                            <div className='cartItemsHead'>
                                <div className='cartSmallHead'>
                                    <span>Remove</span>
                                    <span>Image</span>
                                    <span>Product</span>
                                </div>
                                <div className='cartSmallHead'>
                                    <span>Price</span>
                                    <span>Quantity</span>
                                    <span>Total</span>
                                </div>
                            </div>

                            {/* cart product details */}
                            <div className='cartItemsProduct'>
                                <div className='cartProductInfo'>
                                    <span>x</span>
                                    <img src="/product1.jpg" className='cartProductImg' />
                                    <span>SLEEP TEA - LAVENDER & VALERIAN</span>
                                </div>
                                <div className='cartProductInfo'>
                                    <span>$20.00</span>
                                    <span>3</span>
                                    <span>$60.00</span>
                                </div>
                            </div>

                            <div className='cartItemsProduct'>
                                <div className='cartProductInfo'>
                                    <span>x</span>
                                    <img src="/product1.jpg" className='cartProductImg' />
                                    <span>SLEEP TEA - LAVENDER & VALERIAN</span>
                                </div>
                                <div className='cartProductInfo'>
                                    <span>$20.00</span>
                                    <span>3</span>
                                    <span>$60.00</span>
                                </div>
                            </div>

                        </div>

                        <div className='cartItemsCol2'>
                            <div className='cartTotalWrapper'>
                                <div className='cartTotalHead'>Cart Totals</div>
                                
                                <div className='cartTotalDetail'>
                                    <div className='cartTotalInfo'>
                                        <span>Subtotal</span>
                                        <span>$60.00</span>
                                    </div>
                                    <div className='cartTotalInfo'>
                                        <span>Total</span>
                                        <span>$60.00</span>
                                    </div>
                                </div>
                            </div>
                           <div className="cartCheckoutBtn"><Link to='/checkout' className="cartCheckoutLink">Proceed To Checkout</Link></div>
                        </div>  
                    </div>
                    <hr />
                </div>
        </div>;
}

export default Cart;
