import React, { Fragment,useState } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector,useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import "./ConfirmOrder.css";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import axios from "axios";
import { removeItemsFromCarts } from "../../actions/cartAction";

const ConfirmOrder = ({ history }) => {
  const [loading, setLoading]=useState(false);
  const [value, setvalue]=useState(1);
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const shippingCharges = subtotal > 1000 ? 0 : 0;

  const tax = subtotal * 0;

  const totalPrice = subtotal + tax + shippingCharges;

  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;

  const token=JSON.parse(localStorage.getItem("token"))
  function loadRazorpay(){
    setvalue(2)
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
    };;
    const script= document.createElement('script');
    script.src="https://checkout.razorpay.com/v1/checkout.js";
    script.onerror=()=>{
      alert('Razorpay SDk failed')
    }

    script.onload=async()=>{
      try{
        setLoading(true);
        const result =await axios.post('/api/v1/create-order',{
          amount:subtotal + '00',

        },config);
        console.log(result)
        const {amount, id:order_id, currency}=result.data
        const {
          data:{key:razorpayKey},

        }=await axios.get('/api/v1/get-razorpay-key',config);
        const options={
          key:razorpayKey,
          amount:amount.toString(),
          currency:currency,
          name:user.name,
          description:'example transaction',
          order_id:order_id,
          handler: async function(response){
            console.log(response)
            console.log(shippingInfo)
            console.log(cartItems)
            console.log(subtotal)
            console.log(totalPrice)
            console.log(tax)
            console.log(shippingCharges)
            const result =await axios.post('/api/v1/pay-order',{
              shippingInfo,
              orderItems: cartItems,
              itemsPrice: subtotal,
              taxPrice: tax,
              shippingPrice: shippingCharges,
              totalPrice: totalPrice,
              amount:subtotal,
              razorpayPaymentId:response.razorpay_payment_id,
              razorpayOrderId:response.razorpay_order_id,
              razorpaySignature:response.razorpay_signature,
            },config);
            if(result){
              dispatch(removeItemsFromCarts());
              history.push("/success");
             
            }
            alert(result.data.msg);
           
            
         
          },
          prefill:{
            name:user.name,
            email:user.email,
            contact:`+91${shippingInfo.phoneNo}`
          },
          notes:{
            address:{
              line1: shippingInfo.address,
              city: shippingInfo.city,
              state: shippingInfo.state,
              postal_code: shippingInfo.pinCode,
              country: shippingInfo.country,
            }
          },
          theme:{
            color:"#ffc107"
          }
        };
        setLoading(false);
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
       
      }catch(err){
        alert(err);
        setLoading(false);
      }
    }

document.body.appendChild(script);
  }

  return (
    <Fragment>
      <MetaData title="Confirm Order" />
      <div style={{marginTop:"100px"}}>
      <CheckoutSteps activeStep={value} />
      <div className="confirmOrderPage">
        <div>
          <div className="confirmshippingArea">
            <Typography>Shipping Info</Typography>
            <div className="confirmshippingAreaBox">
              <div>
                <p>Name:</p>
                <span>{user.name}</span>
              </div>
              <div>
                <p>Phone:</p>
                <span>{shippingInfo.phoneNo}</span>
              </div>
              <div>
                <p>Address:</p>
                <span>{address}</span>
              </div>
            </div>
          </div>
          <div className="confirmCartItems">
            <Typography>Your Cart Items:</Typography>
            <div className="confirmCartItemsContainer">
              {cartItems &&
                cartItems.map((item) => (
                  <div key={item.product}>
                    <img src={item.image} alt="Product" />
                    <Link to={`/product/${item.product}`}>
                      {item.name}
                    </Link>{" "}
                    <span>
                      {item.quantity} X ₹{item.price} ={" "}
                      <b>₹{item.price * item.quantity}</b>
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div className="orderSummary">
            <Typography>Order Summery</Typography>
            <div>
              <div>
                <p>Subtotal:</p>
                <span>₹{subtotal}</span>
              </div>
              <div>
                <p>Shipping Charges:</p>
                <span>₹{shippingCharges}</span>
              </div>
              <div>
                <p>GST:</p>
                <span>₹{tax}</span>
              </div>
            </div>

            <div className="orderSummaryTotal">
              <p>
                <b>Total:</b>
              </p>
              <span>₹{totalPrice}</span>
            </div>

           
            <button disabled={loading} onClick={loadRazorpay}>razorpay</button>
          </div>
        </div>
      </div>
      </div>
    </Fragment>
  );
};

export default ConfirmOrder;
