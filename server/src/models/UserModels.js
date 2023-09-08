// const dbPool = require('../config/database');

// const getAllUsers = () => {
//     const SQLQuery = 'SELECT * FROM user';

//     return dbPool.execute(SQLQuery);
// }

// const createNewUser = (body) => {
//     const SQLQuery = `  INSERT INTO user (id, username, email, password, role) 
//                         VALUES ('${body.id}', '${body.username}', '${body.email}', '${body.password}', '${body.role}')`;

//     return dbPool.execute(SQLQuery);
// }

// const updateUser = (body, idUser) => {
//     const SQLQuery = `  UPDATE user
//                         SET id='${body.id}', username='${body.username}', email='${body.email}', password='${body.password}', role='${body.role}' 
//                         WHERE id=${idUser}`;

//     return dbPool.execute(SQLQuery);
// }

// const deleteUser = (idUser) => {
//     const SQLQuery = `DELETE FROM user WHERE id=${idUser}`;

//     return dbPool.execute(SQLQuery);
// }

// module.exports = {
//     getAllUsers,
//     createNewUser,
//     updateUser,
//     deleteUser,
// }

import {Sequelize} from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const User = db.define('user',{
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.ENUM(['admin', 'agent', 'user']),
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
},{
    freezeTableName:true
});

export default User;

// (async()=>{
//     await db.sync();
// })();