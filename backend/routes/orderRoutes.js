import express from 'express';
import {getOrders} from '../controllers/orderController.js'




const router = express.Router();

// Example route
router.get('/test', (req, res) => {
  res.send('Order route is working!');
});

router.get('/Order', getOrders);

export default router;
