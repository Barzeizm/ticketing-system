// require("dotenv").config();
// const PORT = process.env.PORT || 6000;
// const express = require("express");
// const cors = require("cors");

// const usersRoutes = require("./routes/user");

// const middlewareLogRequest = require('./middleware/logs');
// const upload = require('./middleware/multer');

// const app = express();
// app.use(cors());

// app.use(middlewareLogRequest);
// app.use(express.json());
// app.use('/assets', express.static('public/images'))

// app.use("/", usersRoutes);
// app.post('/upload',upload.single('photo'),(req, res) => {
//     res.json({
//         message: 'Upload berhasil'
//     })
// })

// app.use((err, req, res, next) => {
//     res.json({
//         message: err.message,
//     });
// });

// app.listen(PORT, () => {
//     console.log(`Server berjalan di port ${PORT}`);
// });
//import dotenv from "dotenv";
//import express from "express";
//import cors from "cors";
//import router from "./routes/UserRoute.js";
// import router from "./routes/CardsRoute.js";

// dotenv.config();

// const PORT = process.env.PORT;

// const app = express();
// app.use(
//     cors({
//         credentials: true,
//         origin: "http://localhost:3000",
//     })
//);
// app.use(express.json());
// app.use(router)

// app.listen(PORT, () => console.log(`Server Berjalan pada Port ${PORT}`));

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
//const cors = require('cors');
//const bcrypt = require('bcryptjs');
const { check, validationResult, query } = require('express-validator');
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;

exports.runValidation = (req,res,next) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()) {
    return res.status(404).json({
      status: false,
      message: errors.array()[0].msg
    })
  } else {
    return next()
  }
}

exports.validationRegister = [
  check('username', 'username tidak boleh kosong').notEmpty(),
  check('email', 'email tidak boleh kosong').notEmpty().notEmpty().matches(/.+\@.+\..+/).withMessage('email harus bertanda @'),
  check('password', 'password tidak boleh kosong').notEmpty().isLength({ min: 6 }).withMessage('password minimal 6 characters'),
  
]

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL database configuration
const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to the database');
  }
});

app.post('/api/register', ...this.validationRegister, (req, res, next) => {
  // this.runValidation(req, res, next);
  const errors = validationResult(req)
  if(!errors.isEmpty()) {
    return res.status(404).json({
      status: false,
      message: errors.array()[0].msg
    })
  }
  const { username, email, password } = req.body;

  // You should add validation and hashing here for security.
      // Store the hashed password in the database
      const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
      db.query(sql, [username, email, password], (err, result) => {
        if (err) {
          console.error('Registration error:', err);
          res.status(500).json({ message: 'Registration failed'});
        } else {
          console.log('User registered', username);
          res.status(200).json({ message: 'Registration successful'});
        }
      })
    });
   

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
