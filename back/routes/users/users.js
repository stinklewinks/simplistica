import express from 'express';
import dotenv from 'dotenv';

const router = express.Router();
dotenv.config();
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await fetch(`${process.env.WP_USERS}?id=${id}`);
        const data = await response.json();
        
        if (!data || data.length === 0) {
            return res.status(404).json({ message: 'Author data not found' });
        }

        return res.json(data);
    } catch (error) {
        console.error('Error fetching author data:', error);
        return res.status(500).json({ error: 'Failed to fetch author data' });
    }
});

export default router;