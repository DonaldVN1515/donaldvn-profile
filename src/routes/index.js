// Pages
import Home from '~/pages/Home';
import Gallerry from '~/pages/Gallerry';
import Blog from '~/pages/Blog';
import Project from '~/pages/Project';
import Contact from '~/pages/Contact';

// publics Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/gallerry', component: Gallerry },
    { path: '/blog', component: Blog },
    { path: '/project', component: Project },
    { path: '/contact', component: Contact },
];

// private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
