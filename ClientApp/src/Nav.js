import React from 'react'
import { withRoute, Link} from 'react-router5'

function Nav(props) {
    const { router } = props

    return (
        <nav>
            <Link
                router={router}
                routeName="home"
                routeOptions={{ reload: true }}
            >
                Home 
            </Link>
            <Link
                router={router}
                routeName="about"
                routeOptions={{ reload: true }}
            >
               About 
            </Link>

        </nav>
    )
}

export default withRoute(Nav)