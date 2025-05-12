import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connect_db = async() => {
  const mongo_url = process.env.MONGO_URL;
  try{
    const conn = await mongoose.connect(mongo_url);
    console.log('Mongo db connected:', conn.connection.host);
    }
  
  catch(err){
    console.log('Mongo db connection error:', err);
  }
}

export default connect_db;