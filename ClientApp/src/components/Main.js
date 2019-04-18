import React from 'react'
import { routeNode } from 'react-router5'
import { Home } from './Home/Home'


function Main({ route, emails }) {
    const topRouteName = route.name.split('.')[0]

    if (topRouteName === 'home') {
        return <Home/>
    }


    return <div>tast</div>
}

export default routeNode('')(Main)