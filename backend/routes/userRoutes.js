import express from 'express';
import { authUser, registerUser, getUsers, getUserById, deleteUser } from '../controllers/userController.js';
import { protectRoute } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').post(registerUser).get(protectRoute, getUsers);
router.route('/login').post(authUser);
router.route('/:id').get(protectRoute, getUserById).delete(protectRoute, deleteUser);

export default router;
