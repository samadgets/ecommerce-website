import express from 'express';
const router = express.Router();
import {
  authUser,
  registerUser,
  getAllUsers,
  getUserById,
  deleteUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/userController.js';
import { protectRoute, admin } from '../middlewares/authMiddleware.js';

router.route('/').post(registerUser).get(protectRoute, admin, getAllUsers);
router.post('/login', authUser);
router
  .route('/profile')
  .get(protectRoute, getUserProfile)
  .put(protectRoute, updateUserProfile);
router
  .route('/:id')
  .get(protectRoute, admin, getUserById)
  .delete(protectRoute, admin, deleteUser);

export default router;