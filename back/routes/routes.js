import express from 'express';
import postsRoutes from './posts/posts.js';
import userRoutes from './users/users.js';

const router = express.Router();

router.use('/posts', postsRoutes);
router.use('/users', userRoutes);

export default router;