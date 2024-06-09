const express = require('express');
const blogPostRouter = express.Router();

const blogPostModel = require('../models/blogPostModel');



blogPostRouter.get('/blogPosts', async (req, res) => {
    const allBlogPosts = await blogPostModel.find();
    return res.status(200).json(allBlogPosts);
})

blogPostRouter.get('/blogPosts/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const blogPost = await blogPostModel.findById(id);
        return res.status(200).json(blogPost);
    }
    catch (error) {
    // return res.status(500).json({ message: 'post non trovato', error: error })
    next(error);
    }
})

blogPostRouter.post('/blogPosts', async (req, res, next) =>{
    const obj = req.body;
    try {
        const newPost =  blogPostModel(obj);
        const savePost = await newPost.save();
        return res.status(200).json(savePost);
        
    } catch (error) {
    // return res.status(500).json({ message: 'errore nel caricamento del post', error: error })
    next(error);
    }
})

blogPostRouter.put('/blogPosts/:id', async (req, res, next) =>{
    const id = req.params.id;
    const obj = req.body;
    try {
        const editPost = await blogPostModel.findByIdAndUpdate(id, obj);
        return res.status(200).json(editPost);
    } catch (error) {
    // return res.status(500).json({ message: 'errore nella modifica del post', error: error })
    next(error);
    }
})

blogPostRouter.delete('/blogPosts/:id', async (req, res, next) =>{
    const id = req.params.id;
    try {
        await blogPostModel.findByIdAndDelete(id);
        return res.status(200).json({message: 'Post eliminato'});
    } catch (error) {
        next(error)
    // return res.status(500).json({ message: 'errore nella cancellazione del post', error: error })
    }
})

module.exports = blogPostRouter;