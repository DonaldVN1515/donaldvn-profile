// routesConfig
import config from '~/config';

// Layouts
import { SidebarLayout } from '~/layouts';

// Pages
import { Home, Gallerry, Blog, Game, Contact, Login, Page404 } from '~/pages';

// publics Routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.gallerry, component: Gallerry },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.game, component: Game },
    { path: config.routes.contact, component: Contact, layout: SidebarLayout },
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.page404, component: Page404, layout: null },
];

// private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
