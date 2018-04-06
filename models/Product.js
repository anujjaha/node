const express   = require('express')
const sequelize = require('./../config')
const Sequelize = require('sequelize')
const Product   = sequelize.define('data_products', {
    name: {
        type: Sequelize.STRING
    },
    qty: {
        type: Sequelize.INTEGER
    },
    price: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

module.exports = Product;