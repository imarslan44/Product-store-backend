import express from 'express';
import dotenv from 'dotenv';
dotenv.config({path: './.env'});
import { connectDB } from './config/db.js';
import productRoutes from './Routes/product.routes.js';
import cors from 'cors';


const app = express();
app.use(cors({
  origin: "https://product-store-4000.netlify.app/", // Allow requests from this origin
})); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies
// app.use(express.static('dist')); // Serve static files from the 'public' directory
//get all products

app.use('/api/products', productRoutes);





app.listen(process.env.PORT, () => {

  connectDB()
  console.log('Server is running on port http://localhost:' + process.env.PORT + "/api/products");

});



