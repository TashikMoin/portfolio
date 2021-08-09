const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = `${process.env.PORT}`;
const homeRoute = require('./routes/home')
const aboutRoute = require('./routes/about')
const contactRoute = require('./routes/contact.js')


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use('/',homeRoute); 
app.use('/about',aboutRoute);
app.use('/contact',contactRoute);
app.listen(port, () => console.log('Listening on port 8080'));


 
