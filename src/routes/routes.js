// routesConfig
import config from '~/config';

// Pages
import { Home, Gallerry, Blog, Project, Contact, Login } from '~/pages';

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
