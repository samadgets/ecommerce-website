import express from 'express';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';


const app = express();
const PORT = process.env.PORT || 5000;


// Connect to MongoDB
connectDB();


// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);


app.get('/', (req, res) => {
  res.send('E-Commerce Backend API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
