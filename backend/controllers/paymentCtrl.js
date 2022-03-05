
const { generateRazorpayOrder } = require("./FlowController");

const Order = require("../models/orderModel");
const Product = require("../models/productModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.newOrderrazor = catchAsyncErrors(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  const order = await Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paidAt: Date.now(),
    user: req.user._id,
  });

  generateRazorpayOrder(order._id, req.body.totalPrice).then(
    (response) => {
      console.log(response);
      res.status(200).json(response);
    }
  );
 
});

module.exports.createRazororder = async (req, res) => {
    
  
    try {
        const {
            deliveryitem,
            Distance,
            Length,
            addresstodeli,
            deliveryboy,
            category,
            deliveryMode,
            image,
            ServiceType,
            SedndingAddress,
            Price,
            secureProduct,
            Weight,
            CourierType,
            CourierInfo,
            Width,
            Height
          } = req.body;
          const newProduct = new Product({
            deliveryitem,
            customer:req.user.id,
            addresstodeli,
            deliveryboy,
            category,
            deliveryMode,
            image,
            ServiceType,
            SedndingAddress,
            Price,
            secureProduct,
            Weight,
            CourierType,
            CourierInfo,
            Distance,
            Width,
            Height,
            Length
          });
          await newProduct.save();
      
      generateRazorpayOrder(newProduct._id, req.body.Price).then(
        (response) => {
          console.log(response);
          res.status(200).json(response);
        }
      );
    } catch (error) {
      res.status(400).json(error);
    }
  };
  
  
  
  
  module.exports.verifyPayments = async (req, res) => {
    const crypto = require("crypto");
    const hmac = crypto.createHmac("sha256", "25TNPnxtk6BZMih0rieH8857");
    hmac.update(req.body.order_id + "|" + req.body.payment_id);
    const digest = hmac.digest("hex");
    console.log(digest);
    if (digest === req.body.signature) {
      await Order.findByIdAndUpdate(req.body.order.receipt,{paymentInfo :{id:req.body.payment_id,status:"success"}});
      
      console.log("payment successfull");
      res.status(200).json({
        success: true,
        msg: "payment successfull",
      });
    } else {
      console.log("payment failed");
     
     
     
     
      await Order.findByIdAndRemove(req.body.order.receipt);
      res.status(400).json({
        success: false,
        msg: "payment failed",
      });
    }
  };