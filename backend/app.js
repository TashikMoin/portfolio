const express = require('express');
const app = express();
require('dotenv').config();
const port = `${process.env.PORT}`;
const homeRoute = require('./routes/home')
const aboutRoute = require('./routes/about')
const contactRoute = require('./routes/contact')


app.use('/',homeRoute); 
app.use('/about',aboutRoute);
app.use('/contact',contactRoute);
app.listen(port, () => console.log('Listening on port 4000'));


 
