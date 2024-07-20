import express from 'express';
const router = express.Router();
import { addOrderItems, getOrderById, getMyOrders, getOrders } from '../controllers/orderController.js';
import { protectRoute } from '../middlewares/authMiddleware.js';


router.route('/').post(protectRoute, addOrderItems).get(protectRoute, admin, getOrders);
router.route('/myorders').get(protectRoute, getMyOrders);
router.route('/:id').get(protectRoute, getOrderById);

export default router;
