const Razorpay = require("razorpay");


const instance = new Razorpay({
  key_id: "rzp_test_GiJIc1jG5WL47E",
  key_secret: "25TNPnxtk6BZMih0rieH8857",
});

module.exports.generateRazorpayOrder = (orderId, amount) => {
  console.log(orderId)
  console.log(amount)
  return new Promise((resolve, reject) => {
    instance.orders.create(
      {
        amount: amount * 100,
        currency: "INR",
        receipt: "" + orderId,
        payment_capture: 1,
      },
      (err, order) => {
        if (err) {
          reject(err);
          console.log("error")
          console.log(err)
        } else {
          resolve(order);
          console.log("order")
        }
      }
    );
  });
};



