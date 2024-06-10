const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const jwtSecretKey = "jwt-secret-key";

const authorModel = require('../models/authorModel');



router.post('/auth/register', (req, res) => {

    const password = req.body.password

    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, async function(err, hash) {
           
            const author = new authorModel({
                ...req.body,
                password: hash,
                verified: false
            });
            await author.save();
            return res.status(201).json('Author Created!!');
        });
    });

    
})

router.post("/auth/login", async (req, res) =>{
    const email = req.body.email;

    const authorLogin = await authorModel.findOne({email: email}) //Vedo se c'è un autore con questa email - findOne ritorna solo un elemento
    if(authorLogin){
        //Se viene trovato autore con questa email controllo la password altrimenti do errore
        const log = await bcrypt.compare(req.body.password, authorLogin.password);
        if(log){
            //Se entro qui la psw è corretta
           

            //Invece di dare i dati dell'autore, vado a restituire al client un token JWT
            
            //jwt.sign(payload, secretKey, expiresIn)
            const token = jwt.sign(
                
                { 
                    id: authorLogin.id,
                    email: authorLogin.email,
                    name: authorLogin.name
                
                }, jwtSecretKey, { expiresIn: "1h" });
               
                return res.status(200).json(token);


        }else{
            return res.status(400).json({message: "Invalid Password"});
        }
    }else{
        return res.status(400).json({message: "Invalid Email"});
    }

});

module.exports = router;