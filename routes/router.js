const express = require('express')
const router  = express.Router();

const indexController   = require('./../controllers/indexController')
const productController = require('./../controllers/productController')

router.get('/', indexController.index);
router.get('/products', productController.getAll);
router.get('/products/:id/view', productController.getById);
router.post('/products/create', productController.createProduct);
router.post('/products/update', productController.updateProduct);
router.post('/products/:id/delete', productController.deleteProduct);


module.exports = router;