const express = require('express');
const router = express.Router();

const authorModel = require('../models/authorModel');

//Middleware

const authMiddleware = require("../middlewares/AuthMiddleware");
//Se faccio Use lo possono utilizzare tutti

router.get("/me", authMiddleware, async (req, res) =>{
    try {
        const author = await authorModel.findById(req.user._id);
        return res.status(200).json(author)
        
    } catch (error) {
        return res.status(500).json({message: "token non valido", error: error});
    }
    
})
  



module.exports = router;