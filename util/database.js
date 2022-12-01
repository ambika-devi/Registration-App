const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'ambika284devi', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;