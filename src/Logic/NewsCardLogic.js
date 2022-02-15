import React, { useState, useEffect, useCallback } from 'react'
import Banner from '../components/Banner'
import NewsCard from '../components/NewsCard'

function NewsCardLogic() {
    const [news, setNews] = useState([])
    const [latest, setLatest] = useState([])

    const fetchNews = async () => {
        const response = await fetch('https://newsapi.org/v2/everything?q=world&apiKey=0a3e33caf6bd4a5b99813e57c5363f22');
        const data = await response.json()
        const articles = data.articles
        setNews(articles)
    }

    const fetchLatest = async () => {
        const response = await fetch('https://newsapi.org/v2/everything?q=latest&apiKey=0a3e33caf6bd4a5b99813e57c5363f22&pageSize=5');
        const data = await response.json()
        const articles = data.articles
        setLatest(articles)
    }

    useEffect(() => {
        fetchNews()
        fetchLatest()
    }, [])


    return (
        <div>
            <NewsCard
                news={news}
                latest={latest}
            />
            <Banner
                latest={latest}
            />
        </div>
    )

}


export default NewsCardLogic
