import express from 'express';
const router = express.Router();

// Example route
router.get('/test', (req, res) => {
  res.send('Order route is working!');
});

export default router;
