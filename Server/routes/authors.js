const express = require('express');
const authorRouter = express.Router();

const authorModel = require('../models/authorModel');

//Authors Routes

//All Authors
authorRouter.get('/authors', async (req, res) =>{
    const allAuthors = await userModel.find();
    return res.status(200).json(allAuthors);
})

//Author by ID
authorRouter.get('/authors/:id', async (req, res) =>{
    const id = req.params.id;
    try {
        const author = await authorModel.findById(id);
        return res.status(200).json(author);
        
    } catch (error) {
        return res.status(500).json({message: 'Autore non trovato', error: error})
    }
})

//Middlewares


//Export --> 
module.exports = authorRouter;
