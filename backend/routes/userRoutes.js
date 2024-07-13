import express from 'express';
import { getUsers} from '../controllers/userController.js';

const router = express.Router();

// Example route
router.get('/test', (req, res) => {
  res.send('User route is working!');
});

router.get('/test2', getUsers);

export default router;