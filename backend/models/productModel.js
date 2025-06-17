const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    name:String,
    price:String,
    distribution:String,
    rating:String,
    stock:String,
    images: [
        {
          public_id: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true,
          },
        },
      ],
    seller:String,
    noOfreviews:String,
    createdat:Date
});
const productModel=mongoose.model('Product',productSchema);
module.exports=productModel;