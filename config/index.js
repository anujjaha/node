const Sequelize = require('sequelize')

const sequelize = new Sequelize('node', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false
});

module.exports = sequelize;