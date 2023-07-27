const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to the MongoDB database
connectDB();

// Use the video routes
const videoRoutes = require('./routes/videoRoutes');
const userRoutes = require('./routes/userRoutes');
const commentRoutes = require('./routes/commentRoutes');
const productRoutes = require('./routes/productRoutes'); // Include the product routes

app.use('/', videoRoutes);
app.use('/', userRoutes);
app.use('/', commentRoutes);
app.use('/', productRoutes); // Use the product routes

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});