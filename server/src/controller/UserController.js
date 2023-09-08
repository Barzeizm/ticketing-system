// const UsersModel = require("../models/user");

// const getAllUsers = async (req, res) => {
//     try {
//         const [data] = await UsersModel.getAllUsers();
//         res.header("Access-Control-Allow-Origin", "*");
//         res.json({
//             message: "GET all users success",
//             data: data,
//         });
//     } catch (error) {
//         res.status(500).json({
//             message: "Server Error",
//             serverMessage: error,
//         });
//     }
// };

// const createNewUser = async (req, res) => {
//     const { body } = req;

//     if (!body.id || !body.username || !body.email || !body.password || !body.role) {
//         return res.status(400).json({
//             message: "Anda mengirimkan data yang salah",
//             data: null,
//         });
//     }

//     try {
//         await UsersModel.createNewUser(body);
//         res.status(201).json({
//             message: "CREATE new user success",
//             data: body,
//         });
//     } catch (error) {
//         res.status(500).json({
//             message: "Server Error",
//             serverMessage: error,
//         });
//     }
// };

// const updateUser = async (req, res) => {
//     const { idUser } = req.params;
//     const { body } = req;
//     try {
//         await UsersModel.updateUser(body, idUser);
//         res.json({
//             message: "UPDATE user success",
//             data: {
//                 id: idUser,
//                 ...body,
//             },
//         });
//     } catch (error) {
//         res.status(500).json({
//             message: "Server Error",
//             serverMessage: error,
//         });
//     }
// };

// const deleteUser = async (req, res) => {
//     const { idUser } = req.params;
//     try {
//         await UsersModel.deleteUser(idUser);
//         res.json({
//             message: "DELETE user success",
//             data: null,
//         });
//     } catch (error) {
//         res.status(500).json({
//             message: "Server Error",
//             serverMessage: error,
//         });
//     }
// };

// module.exports = {
//     getAllUsers,
//     createNewUser,
//     updateUser,
//     deleteUser,
// };


import User from "../models/UserModels.js";

export const getUsers = async(req, res) =>{
    try {
        const response = await User.findAll();
        // res.header("Access-Control-Allow-Origin", "*");
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}