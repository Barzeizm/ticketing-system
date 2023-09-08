// import {Sequelize} from "sequelize";
// import db from "../config/database.js";
// import User from "./UserModels.js";

// const {DataTypes} = Sequelize;

// const Cards = db.define('cards',{
//     description: DataTypes.TEXT,
//     status: DataTypes.ENUM(['Open Tickets', 'Closed Tickets', 'Warning Tickets']),
//     due_date: DataTypes.DATE,
//     updatedAt: DataTypes.DATE,
//     user_id: DataTypes.STRING
// },{
//     freezeTableName:true
// });

// User.hasMany(Cards)
// Cards.belongsTo(User, {foreignKey: 'user_id'})

// export default Cards;

// (async()=>{
//     await db.sync();
// })();