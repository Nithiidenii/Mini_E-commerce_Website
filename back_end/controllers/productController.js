const productModel =require ('../models/productModel');
// Get Products API - /api/v1/products

exports .getProducts = async (req,res,next) =>{
    const query = req.query.keyword?{ name : { 
         $regex: req.query.keyword,
         $options: 'i'
      }}: {}
        

      const products = await productModel.find(query);
    
    res.json({
        success: true,
        products
    })
}
// Get  Single Product API - /api/v1/product/:id

exports .getSingleProduct = async  (req,res,next) =>{
    // console.log(req.params.id,'ID')
     try{
     const product = await productModel.findById(req.params.id);
     res.json({
        success: true,
        message:'Get  Single products working!',
        product
    })
    }catch(error){
        res.json({
            success : false,
            message : error.message
        })
    }
}