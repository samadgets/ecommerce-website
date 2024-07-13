import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import productRoutes from './routes/productRoutes.js';
import { protectRoute } from './middlewares/authMiddleware.js';
import { errorHandler } from './middlewares/errorMiddleware.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


// Connect to MongoDB
connectDB();


// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', protectRoute, orderRoutes);


app.use(errorHandler);


app.get('/', (req, res) => {
  res.send('E-Commerce Backend API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
