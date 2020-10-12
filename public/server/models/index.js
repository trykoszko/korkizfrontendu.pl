const Sequelize = require("sequelize")

const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: 'postgres',
  operatorsAliases: 0
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.newsletterEntries = require("./newsletterEntry.js")(sequelize, Sequelize)

module.exports = db
