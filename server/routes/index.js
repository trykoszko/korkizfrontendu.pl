const indexController = require('../controllers/index')
const newsletterController = require('../controllers/newsletter')
const userController = require('../controllers/user')

module.exports = (app) => {

  app.get('/', indexController.index)

  app.post('/subscribe/newsletter', newsletterController.add)
  app.get('/unsubscribe/newsletter/:email/:removalKey', newsletterController.remove)

  app.post('/register', userController.register)
  app.post('/login', userController.login)

}
