const Sequelize = require('sequelize')
// const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/juke', {
//   logging: false
// })
const db = new Sequelize('juke', 'postgres', 'jh810506', {
  dialect: 'postgres',
  logging: false,
});

module.exports = db;
