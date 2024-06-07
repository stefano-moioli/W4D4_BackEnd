const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 3001;
const dbName = 'dbW4D4_backend'

app.use(cors());
app.use(express.json());

//Mode
const authorModel = require('./models/authorModel')

//Endpoints
const authorsEndpoint = require('./routes/authors');
app.use(authorsEndpoint);

async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URL + dbName);
        app.listen(port, () => console.log(`Server attivo sulla porta ${port}`));

    } catch (error) {
        console.log(error);
    }
}
connect();