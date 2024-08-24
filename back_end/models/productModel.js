const mongoose=require('mongoose');

 const productSchema = new mongoose.Schema({
    Name : String,
    price : String,
    description : String,
    ratings : String,
    images :[{
        image : String
}],
    category :String,
    seller: String,
    stock :String,
    numOfreviews : String,
    CreatedAt : Date
})

 const productModel = mongoose.model('product',productSchema)
 module.exports =productModel;