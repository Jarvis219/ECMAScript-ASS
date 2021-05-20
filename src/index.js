import Home from './pages/home';
import Header from './pages/header';
import Footer from './pages/footer';
import Product from './pages/product';
import Blog from './pages/blog';
import Contact from './pages/contact';
import { parseRequestUrl, $ } from './untils';

const routes = {
    '/': Home,
    '/products': Product,
    '/blog': Blog,
    '/contact': Contact
}

const router = () => {
    const { resource, id } = parseRequestUrl();
    const parseUrl = (resource ? `/${resource}` : '/') + (id ? `/:id` : '');
    console.log(parseUrl);
    const page = routes[parseUrl] ? routes[parseUrl] : 'error404page';
    console.log(page);
    document.querySelector('#header').innerHTML = Header.render();
    document.querySelector('#main-content').innerHTML = page.render();
    document.querySelector('#footer').innerHTML = Footer.render();
}
window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);