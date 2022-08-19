// routesConfig
import routesConfig from '~/config/routes';

// Pages
import Home from '~/pages/Home';
import Gallerry from '~/pages/Gallerry';
import Blog from '~/pages/Blog';
import Project from '~/pages/Project';
import Contact from '~/pages/Contact';
import Login from '~/pages/Login';

// publics Routes
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.gallerry, component: Gallerry },
    { path: routesConfig.blog, component: Blog },
    { path: routesConfig.project, component: Project },
    { path: routesConfig.contact, component: Contact },
    { path: routesConfig.login, component: Login, layout: null },
];

// private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
