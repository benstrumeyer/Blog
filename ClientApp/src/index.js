import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'
import { RouterProvider } from 'react-router5'
import createRouter from './create-router'
import browserPlugin from 'router5-plugin-browser'
import emails from './emails'

const router = createRouter(true);
router.usePlugin(browserPlugin());

router.start(() => {
    ReactDOM.render((
        <RouterProvider router={router}>
            <App emails={emails}/>
        </RouterProvider>
    ), document.getElementById('root'))
})

if (module.hot) {
    module.hot.accept();
  }