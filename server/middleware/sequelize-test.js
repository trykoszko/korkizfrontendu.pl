const db = require('../models')

const testSequelize = async (req, res, next) => {
    try {
      await db.sequelize.authenticate()
      console.log('Sequelize connected')
      next()
    } catch (error) {
      console.log({
        error: 'Sequelize couldnt connect',
        data: error
      })
      return res.status(400).send({
        error: 'Sequelize couldnt connect',
        data: error
      })
    }
}

module.exports = testSequelize
