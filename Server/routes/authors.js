const express = require('express');
const authorRouter = express.Router();

const authorModel = require('../models/authorModel');

//Authors Routes

//All Authors
authorRouter.get('/authors', async (req, res) => {
    const allAuthors = await authorModel.find();
    return res.status(200).json(allAuthors);
})

//Author by ID
authorRouter.get('/authors/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const author = await authorModel.findById(id);
        return res.status(200).json(author);

    } catch (error) {
        return res.status(500).json({ message: 'Autore non trovato', error: error })
    }
})

//New Author
authorRouter.post('/authors', async (req, res) => {
    const obj = req.body;
    try {
        const newAuthor = authorModel(obj);
        const saveAuthor = await newAuthor.save();
        return res.status(200).json(saveAuthor);

    } catch (error) {
        res.status(500).json({ message: "Problemi nella creazione dell'autore", error: error })
    }
})

//Modify Author
authorRouter.put('/authors/:id', async(req, res) =>{
    const id = req.params.id;
    const obj = req.body;
    try {
        const editAuthor = await authorModel.findByIdAndUpdate(id, obj);
        return res.status(200).json(editAuthor);
    } catch (error) {
        res.status(500).json({Message: "Problemi nella modifica di un autore", error: error})
    }
})

//Delete Author
authorRouter.delete("/authors/:id", async(req, res) =>{
    const id = req.params.id;
    try {
        await authorModel.findByIdAndDelete(id);
        return res.status(200).json({message: "Autore eliminato"});
    } catch (error) {
        res.status(500).json({message: "Errore nella cancellazione dell'autore", error: error})
    }
})

authorRouter.patch("/authors/:id/avatar", async(req, res, next) =>{
    const id = req.params.id;
    try {
        await authorModel.findById(id);
        // Ora vediamo        
    } catch (error) {
        next(error);
    }
})

//Middlewares


//Export --> 
module.exports = authorRouter;