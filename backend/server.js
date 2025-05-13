import express from 'express';
// import dotenv from 'dotenv';
import connect_db from './config/db.js';
import product from './models/product.model.js';

// dotenv.config();

const app = express();

app.use(express.json());

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

// connect_db().then(() => {
//   console.log('Mongo db connected');
//   app.listen(3000, () => {
//     console.log('server start on port 3000 at http://localhost:3000');
//   });
// }).catch((err) => {
//   console.error('Failed to connect to MongoDB', err);
// });

try {
  connect_db();
  app.listen(3000, () => {
    console.log('server start on port 3000 at http://localhost:3000');
  });

}
catch(err){
  console.log('Mongo db connection error:', err);

}
