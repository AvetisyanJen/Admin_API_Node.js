'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
  
    static associate(models) {
this.belongsTo(models.Category,{foreignKey:"categoriId"})
    }
  }
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    categoriId:DataTypes.DECIMAL
 
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};