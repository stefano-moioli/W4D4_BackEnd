const jwt = require('jsonwebtoken');
require('dotenv').config();



const authMiddleware = (req, res, next) => {
    
    let token = req.headers.authorization;

    if(!token) {
        return res.status(401).json({message: 'Invalid Token'})
    } else {
        token = token.split(' ')[1]
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, data) => {
            if(err) {
                return res.status(401).json({message: 'Invalid Token'})
            } else {
                console.log(data);
            }
        })
    }
    next();
}


module.exports = authMiddleware
