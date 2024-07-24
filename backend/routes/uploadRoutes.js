import express from 'express';
const router = express.Router();
import { upload } from '../middlewares/uploadMiddleware.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.post('/', protect, admin, upload.single('image'), (req, res) => {
  res.send(`/${req.file.path}`);
});

export default router;
