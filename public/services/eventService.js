exports.getAll = async (req, res) => {
    console.log('eventService.getAll service')
    // await // get data
    return [
        {
            id: '123123',
            name: 'Korki z Front-endu #2',
            slug: 'korki-z-front-endu-2',
            date: Date.now(),
            url: '#'
        },
        {
            id: '123124',
            name: 'Korki z Front-endu #3',
            slug: 'korki-z-front-endu-3',
            date: Date.now(),
            url: '#'
        },
        {
            id: '123125',
            name: 'Korki z Front-endu #4',
            slug: 'korki-z-front-endu-4',
            date: Date.now(),
            url: '#'
        },
        {
            id: '123126',
            name: 'Korki z Front-endu #5',
            slug: 'korki-z-front-endu-5',
            date: Date.now(),
            url: '#'
        }
    ]
}
