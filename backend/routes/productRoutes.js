import express from 'express';
import {getProducts} from '../controllers/productController.js'


const router = express.Router();

// Example route
router.get('/test', (req, res) => {
  res.send('Product route is working!');
});

router.get('/product', getProducts);

export default router;
