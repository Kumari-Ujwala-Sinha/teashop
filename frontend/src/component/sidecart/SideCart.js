import React,{Fragment} from 'react';
import { Typography } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart, removeItemsFromCart } from "../../actions/cartAction";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import CartItemCard from "../Cart/CartItemCard"

function SideCart({ history }) {
    const[active, setActive] = useState(false);
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);
    //var cartItem=JSON.parse(localStorage.getItem("cartItems"))
    const increaseQuantity = (id, quantity, stock) => {
        const newQty = quantity + 1;
        if (stock <= quantity) {
          return;
        }
        dispatch(addItemsToCart(id, newQty));
      };
    
      const decreaseQuantity = (id, quantity) => {
        const newQty = quantity - 1;
        if (1 >= quantity) {
          return;
        }
        dispatch(addItemsToCart(id, newQty));
      };
    
      const deleteCartItems = (id) => {
        dispatch(removeItemsFromCart(id));
      };
    
      const checkoutHandler = () => {
        history.push("/login?redirect=shipping");
      };
    


    const sidebarToggle = ()=>{
        setActive(!active);
    }

  return <div className='sideCartWrapper' >


            <div className='cartIcon' onClick={sidebarToggle}>
                <span className="cartNumber">{cartItems.length}</span>
                <ShoppingCartOutlinedIcon />
            </div>        

            <div className={(active)?'sideBarCart':'sideBarCartHide'} style={{overflow:"auto"}}>
          
                    <div className='sideCart' >
                        <div className='crossIcon' onClick={sidebarToggle}>X</div>

                        <div className='sideCardHead'>Shopping Cart</div>
                        <Fragment >
     <div style={{marginTop:"60px"}}>
      {cartItems.length === 0 ? (
          <div>
        <div className="emptyCart" style={{padding:"10px"}}>
          <RemoveShoppingCartIcon />

          <Typography>No Product in Your Cart</Typography>
          </div>
          <div className="checkOutBtn">
                <button > <Link to="/products" className="sideViewCartBtn"  >View Products</Link></button>
              </div>
          
        </div>
      ) : (
        <Fragment>
          <div className="cartPages" >
            <div className="cartHeader">
              <p>Product</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>

            {cartItems &&
              cartItems.map((item) => (
                <div className="cartContainer" key={item.product}>
                  <CartItemCard item={item} deleteCartItems={deleteCartItems} />
                  <div className="cartInput" >
                    <button
                      onClick={() =>
                        decreaseQuantity(item.product, item.quantity)
                      }
                    >
                      ↓
                    </button>
                    <h1 style={{padding:"4px"}}>{item.quantity}</h1>
                    {/*<input type="number" value={item.quantity} readOnly style={{color:"black"}}/>*/}
                    <button
                      onClick={() =>
                        increaseQuantity(
                          item.product,
                          item.quantity,
                          item.stock
                        )
                      }
                    >
                      ↑
                    </button>
                  </div>
                  <p className="cartSubtotal">{`₹${
                    item.price * item.quantity
                  }`}</p>
                </div>
              ))}

            <div className="cartGrossProfit">
              
              <div className="cartGrossProfitBox">
                <p>Gross Total</p>
                <p>{`₹${cartItems.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                )}`}</p>
              </div>
              </div>
              <div>
              <div className="checkOutBtn">
               <button onClick={sidebarToggle} ><Link  to='/cart'>View Cart</Link></button>
              </div>
             {/* <div className='sideCartBtn'>
                            <Link  to='/cart' className='sideViewCartBtn' onClick={sidebarToggle}>View Cart</Link>
                            <Link to='/checkout' className='sideViewCartBtn' onClick={sidebarToggle}>Checkout</Link>
                        </div>*/}
                </div>
          </div>
        </Fragment>
      )}
      </div>
    </Fragment>
                       
                      {/*  <div className='sideCartProduct'>
                        
                            <img className="sideProductImg" src='/product2.jpg' />

                            <div className='sideProductDetail'>
                                <p className='sideProductName'>CLEAR HEAD TOWELETTES - PEPPERMINT & GERANIUM</p>
                                <div className='sideProductQp'>
                                    <span className='sideProductQuantity'>3 X </span> 
                                    <span className='sideProductPrice'>$20.00</span>
                                </div>
                            </div>

                            <div className='sideProductRemove'>x</div>
                            
                        </div>
                        <div className='sideCartTotal'>
                                <span>Total</span>
                                <span>$60.00</span>
                </div>*/}
                        
</div>
                </div>
        </div>;
}

export default SideCart;
