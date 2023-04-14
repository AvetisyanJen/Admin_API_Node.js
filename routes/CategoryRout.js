const express = require('express');
const category_router = express.Router();
const Category = require ('../Controllers/CategoryController');
const { authenticateToken } = require('../jwt/jwt_authenticate');

category_router.get ('/categories',Category.get_Category)
category_router.post ('/new',authenticateToken,Category.get_Category_post)
category_router.get ('/:id',authenticateToken,Category.get_Category_id)
category_router.put ('/update',authenticateToken,Category.get_Category_update)
category_router.delete ('/delete/:id',authenticateToken,Category.get_Category_delete)

module.exports=category_router