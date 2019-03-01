const express   = require('express')
const sequelize = require('./../config')
const Sequelize = require('sequelize')
const fillable  = [
    'name', 'qty'
];

const Product   = sequelize.define('data_products', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        trim: true,
        get() {
            return this.getDataValue('name').toString() + "test";
        }
    },
    qty: {
        type: Sequelize.INTEGER,
    },
    price: {
        type: Sequelize.FLOAT,
    }
}, {
    timestamps: false
});

module.exports = Product;

/*module.exports = {

  // single transformation
  transform (product) {
    return {
      'id'      : product.id,
      'name'    : product.name,
      'qty'     : product.qty,
      'price'   : product.price
    };
  },

  //
  transformCollection(products) {
    var self = this;
    var data = [];
    for (var i = 0; i <= products.length; i++) {
        data.push(this.transform(products[i]));
    }
    return data;
  }
};*/    