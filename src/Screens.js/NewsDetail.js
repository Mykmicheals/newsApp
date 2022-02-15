import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function NewsDetail() {
    const [news, setNews] = useState([])
    const params = useParams();
    const fetchHandler = async () => {

        const phoneResponse = await fetch(`http://127.0.0.1:8000/phone/${params.newsId}`)
        const data = await phoneResponse.json()
        setNews(data)
        console.log(data)
    }

    useEffect(() => {

        fetchHandler()
    }, [])
    return (
        <div>
            <img
                src={news.urlToImage}
            />
            <p>{params.description}</p>
        </div>
    )
}

export default NewsDetail

// function ProductDetail() {
//     const [phone, setPhone] = useState([])
//     const params = useParams();
//     const fetchHandler = async () => {

//         const phoneResponse = await fetch(`http://127.0.0.1:8000/phone/${params.productId}`)
//         const data = await phoneResponse.json()
//         setPhone(data)
//         console.log(data)
//     }

//     useEffect(() => {

//         fetchHandler()
//     }, [])
//     return (
//         <div>
//             <ul className={classes.container}>
//                 <li>
//                     <img src={`http://127.0.0.1:8000/${phone.image}`} alt={phone.name} />
//                 </li>

//                 <li>
//                     <h2>{phone.name}</h2>
//                     <p>{phone.description}</p>
//                     <p>{phone.price}</p>
//                     <button>Add to Cart</button>
//                 </li>
//             </ul>
//         </div>
//     )
// }