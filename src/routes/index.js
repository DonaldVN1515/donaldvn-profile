// routesConfig
import config from '~/config';

// Pages
import Home from '~/pages/Home';
import Gallerry from '~/pages/Gallerry';
import Blog from '~/pages/Blog';
import Project from '~/pages/Project';
import Contact from '~/pages/Contact';
import Login from '~/pages/Login';

// publics Routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.gallerry, component: Gallerry },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.project, component: Project },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.login, component: Login, layout: null },
];

// private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
