const Post = require('../models/Post');

// Get all posts
exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('owner', 'email role');
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get single post by id
exports.getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate('owner', 'email role');
        if (!post) return res.status(404).json({ message: "Post not found" });
        res.json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a protected post
exports.createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const post = await Post.create({ title, content, owner: req.user.id });
        res.status(201).json(post);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Updates a post
exports.updatePost = async (req, res) => {
    try {
        // First, find the post to check authorization
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });

        if (post.owner.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not authorized to edit this post" });
        }

        // Now update using the model directly
        const updated = await Post.findByIdAndUpdate(
            req.params.id,
            { title: req.body.title, content: req.body.content },
            { new: true }  // return the updated document
        );

        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Delete post 
exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });

        if (post.owner.toString() !== req.user.id) {
            return res.status(403).json({ message: "Not authorized to delete this post" });
        }

        await Post.findByIdAndDelete(req.params.id);
        res.json({ message: "Post deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
