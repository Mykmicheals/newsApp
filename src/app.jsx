
import React, { Fragment, Suspense } from 'react'
import Header from './components/Header'
// import NewsCardLogic from './Logic/NewsCardLogic'
import { Route } from 'react-router-dom'
import Home from './components/Home'


const NewsCardLogic = React.lazy(() => import('./Logic/NewsCardLogic'))

function App() {
    return <Suspense fallback={
        <p>Loading...</p>
    }>
        <Header />
        <Route path='/'>
            <NewsCardLogic />
        </Route>
        <Route path='/login'>
            <Home />
        </Route>



    </Suspense>
}



export default App