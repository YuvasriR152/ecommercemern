const { Query } = require('mongoose');
const productModel=require('../models/productModel');

exports.getProducts=async(req,res,nest)=>{
    const query=req.query.keyword?{name:{
        $regex:req.query.keyword,
        $options:'i'
    }}:{}
    const products=await productModel.find(query);
res.status(200).json({
    success:true,
    products
});

};


exports.getSingleProducts=async(req,res,next)=>{
    console.log(req.params.id,'ID');
    try{
    const product=await productModel.findById(req.params.id);
    res.status(200).json({
        success:true,
        product

    });
}
catch{
    res.status(404).json({
    success:false,
    message:'error try again Champ...'
    });
}

};
