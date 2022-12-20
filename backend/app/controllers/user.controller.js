const db = require('../models');
var bcrypt = require('bcryptjs');
const { Sequelize } = require('sequelize');

const user_obj = db.user;

exports.getTest = (req, res) => {
  console.log('checking the DB')
  user_obj.count().then((results) => {
    console.log(`${results} user(s) in the DB!`)
    res.send(`${results} user(s) in the DB!`)
  })
}