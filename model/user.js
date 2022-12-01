const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Users = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        unique:true
    },
    phone: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        unique:true
    }
});

module.exports = Users;