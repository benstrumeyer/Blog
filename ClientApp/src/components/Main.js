import React from 'react'
import { routeNode } from 'react-router5'
import { About } from './About'


function Main({ route, emails }) {
    const topRouteName = route.name.split('.')[0]

    if (topRouteName === 'home') {
        return <About/>
    }


    return <div>tast</div>
}

export default routeNode('')(Main)