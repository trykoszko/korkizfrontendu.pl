exports.add = async (req, res) => {
    console.log('NewsletterEntry.add')
    console.log('req.body', req.body)

    // await add to db

    return {
        result: true,
        resultExplanation: 'Explanation'
    }
}
