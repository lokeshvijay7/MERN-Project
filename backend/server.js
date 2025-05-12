import express from 'express';
import connect_db from './config/db.js';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello woeld');
}
);

console.log(process.env.MONGO_URL)
app.listen(3000, ()=>{
  connect_db();
  console.log('Mongo db connected');
  console.log('server start on port 3000 at http://localhost:3000');

})


// KE90eXhDPxryjqXg