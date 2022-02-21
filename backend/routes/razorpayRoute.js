const express =require('express')
const Razorpayo = require("../models/razorpayModel");
const Order = require("../models/orderModel");

const Razorpay=require('razorpay')
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");






router.get('/get-razorpay-key',isAuthenticatedUser,(req,res)=>{
    res.send({key:process.env.RAZORPAY_KEY_ID})
})

router.post('/create-order',isAuthenticatedUser, async (req, res) =>{
    try{
        console.log("createorder")
        const instance=new Razorpay({
            key_id:process.env.RAZORPAY_KEY_ID,
            key_secret:process.env.RAZORPAY_KEY_SECRET
        });
        const options={
            amount:req.body.amount,
            currency:'INR'
        }
        const order=await instance.orders.create(options);
        if(!order) return res.status(500).send('Some error occured');
        res.send(order)
        console.log(order)
    }catch(error){
        res.status(500).send(error);
    }
})

router.post('/pay-order',isAuthenticatedUser, async (req, res) =>{
    try{

       const {amount, razorpayPaymentId, razorpayOrderId, razorpaySignature,shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice} = req.body;
       const newPayment =new Order({
           isPaid:true,
           amount:amount,
           shippingInfo,
           paidAt: Date.now(),
           user: req.user._id,
    orderItems,
   
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    razorpay:{
               orderId:razorpayOrderId,
               paymentId:razorpayPaymentId,
               signature:razorpaySignature
           }
       })
       await newPayment.save();
       console.log("payment")
       res.send({msg:'Payment was successfull'})
    }catch(error){
        console.log("checking")
        res.status(500).send(error);
    }
})
router.post('/pay-orders', async (req, res) =>{
    try{
        
      console.log("checking")
       res.send({msg:'Payment was successfull'})
    }catch(error){
        res.status(500).send(error);
    }
})


module.exports = router;
