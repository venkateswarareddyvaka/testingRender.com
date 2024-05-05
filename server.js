const express = require('express')
const mongoose = require('mongoose');
const productRoute = require('./routes/productRoutes')
require('dotenv').config()

const app = express();

app.use(express.json())

app.use('/api/products',productRoute)

const MONGO_URL = process.env.MONGO_URL
// const port = process.env.PORT || 3000



app.get('/',(req,res)=>{
    res.send("Hello World");
})

mongoose.connect(MONGO_URL)
    .then(()=>{
        console.log("Connected to database")
        app.listen(3000,()=>{
            console.log("Server started and listening to port 3000")
        }) 
    }).catch((error)=>{
        console.log("Error while connecting to database")
    })
