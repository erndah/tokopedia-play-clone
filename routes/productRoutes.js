const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/api/products', productController.createProduct);
router.get('/api/products', productController.getAllProducts);
router.get('/api/products/:productId', productController.getProductById);
router.put('/api/products/:productId', productController.updateProduct);
router.delete('/api/products/:productId', productController.deleteProduct);

module.exports = router;