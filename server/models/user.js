'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {}
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    clientType: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    address: DataTypes.STRING,
    address2: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    invoiceAdnotations: DataTypes.STRING,
    allowRodo: DataTypes.BOOLEAN,
    allowTerms: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
  })
  return User
}
