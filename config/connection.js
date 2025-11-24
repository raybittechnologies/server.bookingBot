// Load config from the root directory
const { Sequelize, DataTypes } = require("sequelize");

// const sequelize = new Sequelize("bookingbot", "root", "x]0TQ!4d7mS7zJ", {
const sequelize = new Sequelize("bookingbot", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});
module.exports = sequelize;
