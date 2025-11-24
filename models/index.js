const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

const db = {};
db.CallLog = require("./callRecords")(sequelize, DataTypes);
db.sequelize = sequelize;

(async () => {
  try {
    await sequelize.authenticate();

    await db.sequelize.sync({ force: false });
    console.log("DB Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = db;
