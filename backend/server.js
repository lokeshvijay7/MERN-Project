import express from 'express';
// import dotenv from 'dotenv';
import connect_db from './config/db.js';
import product from './models/product.m.js';

// dotenv.config();

const app = express();

app.use(express.json());

app.get('/api/products', async (req, res) => {
  try {
    const products = await product.find({});
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/products', async (req, res) => {
  const product_data = req.body;
  if (!product_data.name || !product_data.price || !product_data.image) {
    return res.status(400).json({ message: 'Please fill all fields' });
  }

  const newproduct = new product(product_data);

  try {
    const created_product = await newproduct.save();
    return res.status(201).json(created_product);
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
});

try {
  connect_db();
  app.listen(3000, () => {
    console.log('server start on port 3000 at http://localhost:3000');
  });
}
catch(err){
  console.log('Mongo db connection error:', err);
}
