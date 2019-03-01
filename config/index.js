const Sequelize = require('sequelize')

const sequelize = new Sequelize('node', 'user', 'root@123', {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
      socketPath: '/var/run/mysqld/mysqld.sock',
    },
    operatorsAliases: false
});

module.exports = sequelize;