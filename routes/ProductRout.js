const express = require('express');
const product_router = express.Router();
const Product = require ('../Controllers/ProductController');
const { authenticateToken } = require('../jwt/jwt_authenticate');
const { upload } = require('../multer_config/multer');



product_router.get ('/',Product.get_Product)
product_router.get ('/:id',Product.get_Product_id)
product_router.put ('/update/:id',authenticateToken,Product.get_Product_update)
product_router.post ('/post',authenticateToken,  upload.array("photo"),Product.get_Product_post)
product_router.delete ('/delete',authenticateToken,Product.get_Product_delete)

module.exports=product_router