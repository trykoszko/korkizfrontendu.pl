import React, { useState } from 'react'
import {
    StyledFeed,
    StyledFeedItem
} from './InstagramFeedStyles'

import Loader from '../Loader/Loader.jsx'

const getInstagramItems = async () => {
    const data = await fetch()
    return data.json()
}

const FeedItem = ({ url, src, alt }) => <StyledFeedItem href={url}><img src={src} alt={'asd'} /></StyledFeedItem>

const InstagramFeed = () => {
    const [isLoaded, setIsLoaded] = useState(false)
    const items = getInstagramItems()

    useEffect(() => {
        console.log('items', items)
    }, [items])

    return isLoaded ? (<StyledFeed>
            {items.map(item => <FeedItem url="" src="" alt="" />)}
        </StyledFeed>) : <Loader />
}

export default InstagramFeed
