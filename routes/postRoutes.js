const express = require ('express');
const Post = require ('../models/Posts');
const router = express.Router();

// fetch all post endpoint
router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({success: true, data: posts});
    } catch (err) {
        res.json({ message: err });
    }
});

// create new post endpoint
router.post('/create-post', async (req, res) => {
    // destructure the request body
    const { title, contact, category, tags, postImg } = req.body;
    // create a new post
    try {
        const post = new Post({
            title, 
            contact, 
            category, 
            tags, 
            postImg
        });
        const savedPost = await post.save();
        res.status(201).json({success: true, data: savedPost});
    } catch (error) {
        res.json({ message: error});
    }
});

// fetch single  post endpoint
router.get('/post/:postId', async (req, res) => {
    // extract postId
    try {
        const posts = await Post.find();
        res.status(200).json({success: true, data: posts});
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;