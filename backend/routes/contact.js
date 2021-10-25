require('dotenv').config();
const mysql = require('mysql2');
const express = require('express');
const router = express.Router();


const database_connection = mysql.createPool( 
    {
        host: `${process.env.HOST}`,
        user: `${process.env.USER}`,
        password: `${process.env.PASSWORD}`,
        database: `${process.env.DATABASE}`,
        multipleStatements: true,
        waitForConnections: true,
        connectionLimit: 100,
        queueLimit: 0
    }
);


const Add_Contact = async (information_data) => {
    if (!information_data.Name || !information_data.Email || !information_data.Contact || !information_data.Subject || !information_data.Message) {
        throw new Error('Please fill the required data and try again.');
    }
    const query = `INSERT INTO portfolio.Contact_Details (Name, Email, Contact, Subject, Message ) 
          VALUES ('${information_data.Name}', '${information_data.Email}', 
          '${information_data.Contact}', '${information_data.Subject}', '${information_data.Message}' );`;

    try {
        database_connection.query(query, (err, result) => {
            console.log(err);
        });
    } 
    catch (error) {
        throw new Error(error.message);
    }

}


router.post("/", (req, res) => {
    try {
        const contact_information = 
        {
          Name: req.body.Name,
          Email: req.body.Email,
          Contact: req.body.Contact,
          Subject: req.body.Subject,
          Message: req.body.Message
        };
        Add_Contact(contact_information);
        console.log(contact_information)
        return res.status(200).json({ msg: 'Message sent successfully!' });
    } 
    catch (error) {
        return res.status(500).json({ msg: `Unable to send your message, due to error "${error.message}"` });
    }
});

module.exports = router;


// CREATE TABLE `Contact_Details` (
//     `Name` VARCHAR(40) NOT NULL,
//     `Email` VARCHAR(45) NOT NULL,
//     `Contact` VARCHAR(20) NOT NULL,
//     `Subject` VARCHAR(45) NOT NULL,
//     `Message` VARCHAR(1000) NOT NULL,
//      PRIMARY KEY (`Email`)
//   );