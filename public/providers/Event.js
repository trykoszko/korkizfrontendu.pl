exports.getAll = async (req, res) => {
    console.log('Event.getAll')
    return [
        {
            name: 'Korki z Front-endu #1',
            url: '#'
        },
        {
            name: 'Korki z Front-endu #2',
            url: '#'
        },
    ]
}
