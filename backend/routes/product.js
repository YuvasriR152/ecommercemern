const express=require('express');
const router=express.Router();
const{getProducts,getSingleProducts}=require('../controller/productController');
router.route('/products').get(getProducts);
router.route('/products/:id').get(getSingleProducts);

module.exports=router;