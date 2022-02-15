import React from 'react'
import { Link } from 'react-router-dom'

function NewsCard({ news, latest }) {
    // if (!loading) {
    //     console.log(news)
    // }
    // const truncate = (text) => {
    //     text.stringify()
    //     text?.length > 50 ? text.substring(0, 20) + "..." : text
    // }

    return (


        <div className='container'>
            <ul>
                {news.map((ne) => {
                    return (
                        <li>
                            <a href={ne.url}>
                                <div className='card'>
                                    <img src={ne.urlToImage} />
                                    <p> {ne.title}</p>
                                    <small>{ne.author}</small>
                                </div>
                            </a>
                        </li>


                    )
                })}
            </ul>


        </div>




    )
}

export default NewsCard
