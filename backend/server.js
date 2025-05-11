import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';  

dotenv.config();


const app = express();

app.get('/', (req ,res) =>{
  res.send("Rich Broo...")
})


app.listen(3000, ()=>{
  console.log('server start on port 3000 at http://localhost:3000');

})


// KE90eXhDPxryjqXg