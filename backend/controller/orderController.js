const orderModel=require('../models/orderModel');

exports.createOrder =(req, res, next) => {
  const cartItems = req.body;
  console.log(cartItems);

  const total = cartItems.reduce((acc, item) => {
    const price = Number(item.products?.price || 0);
    const qty = Number(item.qty || 0);
    return acc + price * qty;
  }, 0).toFixed(2);

  console.log('TOTAL:', total);
  
  res.status(200).json({ 
    success: true, 
    total, 
    message: 'Order calculated successfully' 
  });
};

