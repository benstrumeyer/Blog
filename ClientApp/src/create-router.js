import createRouter from 'router5';
import routes from './routes';

export default function configureRouter(useListenersPlugin = false) {
    const router = createRouter(routes, {
            defaultRoute: 'home'
        })
    return router;
}
