import { Sequelize } from 'sequelize';
import db from '../config/Database.js';

const { DataTypes } = Sequelize;

const users = db.define('users', {
    name : DataTypes.STRING,
    email : DataTypes.STRING,
    gender : DataTypes.STRING

}, {
    freezeTableName:true
});

export default users;

(async()=>{
    await db.sync();
})();