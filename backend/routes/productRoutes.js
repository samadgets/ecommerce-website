import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
} from '../controllers/productController.js';
import { protectRoute, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getProducts).post(protectRoute, admin, createProduct);
router
  .route('/:id')
  .get(getProductById)
  .delete(protectRoute, admin, deleteProduct)
  .put(protectRoute, admin, updateProduct);
router.route('/:id/reviews').post(protectRoute, createProductReview);

export default router;
