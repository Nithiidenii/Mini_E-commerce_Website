// app.js : backend application files ,from this  file only application goes to run for backend 

const express = require ('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
//  dotenv :  this package is for reading the Environment
 const path = require('path');

 dotenv.config({path: path.join(__dirname, 'config', 'config.env')})
 const connectDatabase  = require('./config/connectDatabase');
//  __dirname : to get the current folder
//  app.listen(8000,() =>{
//     console.log('Server Listening to port 8000 in production')
//  })

const products =require('./routes/product');    
const orders =require('./routes/order');

connectDatabase();

app.use(cors());
app.use(express.json());      
app.use('/api/v1',products);
app.use('/api/v1',orders);


app.listen(process.env.PORT,() =>{
    console.log(`Server Listening to port ${process.env.PORT} in ${process.env.NODE_ENV}`);
 })
