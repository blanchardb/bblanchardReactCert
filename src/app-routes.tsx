import {HomePage, CategoriesPage, JokesPage, SearchPage} from './pages';
import { withNavigationWatcher } from './contexts/navigation';

const routes = [
    {
        path: '/categories',
        element: CategoriesPage
    },
    {
        path: '/home',
        element: HomePage
    },
    {
        path: '/jokes',
        element: JokesPage
    },
    {
        path: '/search',
        element: SearchPage
    }
];

export default routes.map(route => {
    return {
        ...route,
        element: withNavigationWatcher(route.element, route.path)
    };
});
