const Sequelize = require('sequelize')

const dbConfig = require('../config/database')

const connection = new Sequelize(dbConfig.development)

const Proffy = require('../models/Proffy')

Proffy.init(connection)

connection.authenticate().then(()=>{
  console.log('conectado com sucesso')
}).catch((error)=>{
  console.log(error)
})

module.exports = connection