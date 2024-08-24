const orderModel = require('../models/orderModel');
const productModel = require('../models/productModel');


// Create Order - /api/v1/order
exports.createOrder =async (req,res,next) =>{
console.log(req.body,'DATA');
       const cartItems = req.body;
        const amount = cartItems.reduce((acc,item) => (acc + item.product.price*item.qty ), 0);
       console.log(amount,'Amount');
       const Status = 'pending';
       const order = await orderModel.create ({cartItems,amount,Status});


//    Updating product Stock in Database
    cartItems.forEach( async(item) => {
       const product = await productModel.findById(item.product._id);
       product.stock = product.stock - item.qty;
       await product.save();
       
    });  

    

       res.json ({
        success : true,

        order
    })
}
