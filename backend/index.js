import express from 'express';
import connectDB from './config/db.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.get('/', (req, res) => {
  res.send('E-Commerce Backend API');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
