const indexController = require('../controllers/index')
const newsletterController = require('../controllers/newsletter')

module.exports = (app) => {

  app.get('/', indexController.index)

  app.post('/subscribe/newsletter', newsletterController.add)
  app.get('/unsubscribe/newsletter/:email/:removalKey', newsletterController.remove)

}
