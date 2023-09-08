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
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import router from "./routes/UserRoute.js";
// import router from "./routes/CardsRoute.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);
app.use(express.json());
app.use(router)

app.listen(PORT, () => console.log(`Server Berjalan pada Port ${PORT}`));
