const Product = require('../models/productModel');

// Controller to create a new product
const createProduct = async (req, res) => {
  const { productName, description, price, videoId } = req.body;

  try {
    const newProduct = new Product({
      productName,
      description,
      price,
      videoId,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller to get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({}, 'productName description price videoId');
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller to get product details by ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller to update product details
const updateProduct = async (req, res) => {
  const { productName, description, price, videoId } = req.body;

  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    product.productName = productName;
    product.description = description;
    product.price = price;
    product.videoId = videoId;

    await product.save();
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller to delete a product
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    await product.remove();
    res.json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};