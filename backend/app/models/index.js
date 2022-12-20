require("dotenv").config();
const { fromWeb } = require("form-data");
const { Sequelize, Op, DataTypes } = require("sequelize");
 
const sequelize = new Sequelize(
  process.env.DBNAME,
  process.env.DBUSER,
  process.env.DBPASSWORD,
  {
    host: process.env.DBHOST,
    dialect: process.env.DBDIALECT,
    port: process.env.DBPORT,
    dialectOptions: {},
    pool: {
      max: 100,
      min: 10,
      acquire: 30000,
      idle: 10000,
    },
  }
);
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Op = Op;

db.isUnique = (key, value, table) => {
  return db[table]
    .findOne({ where: { [key]: value } })
    .then((value) => (value ? true : false));
};

module.exports = db;
