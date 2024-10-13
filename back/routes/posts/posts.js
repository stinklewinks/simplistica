import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const response = await fetch(`${process.env.WP_POSTS}`);
        const data = await response.json();
        
        if (!data || data.length === 0) {
            return res.status(404).json({ message: 'No posts found' });
        }

        return res.json(data);
    } catch (error) {
        console.error('Error fetching posts:', error);
        return res.status(500).json({ error: 'Failed to fetch posts' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const response = await fetch(`${process.env.WP_POSTS}/${id}`);
        const data = await response.json();
        
        if (!response.ok) {
            return res.status(404).json({ message: 'This post does not exist. Please check id.' });
        }

        return res.json(data);
    } catch (error) {
        console.error('Error fetching post:', error);
        return res.status(500).json({ error: 'Failed to fetch post' });
    }
});

router.get('/:category', async (req, res) => {
    try {
        const { category } = req.params;
        // Get the category from the WP site
        const response = await fetch(`${process.env.WP_POSTS}?category=${category}`);
        // Check if the response is ok
        if (!response.ok) {
            return res.status(404).json({ message: 'Could not find posts related to this category. Please check category.' });
        }
        // Put data into json format
        const data = await response.json();
        // Check if the category is empty
        if(!data || data.length === 0){
            return res.status(404).json({ message: 'This category is empty...' });
        }
        
        return res.json(data);
    
        } 
    catch (error) 
    {
        console.error('Error fetching posts:', error);
        return res.status(500).json({ error: 'Failed to fetch posts' });
    }
});

export default router;