const path = require('path')

module.exports = {
    async index(req, res) {
        res.sendFile(path.join(__dirname, '../../../front/public', 'index.html'))
    }
}
