import Home from './pages/home';
import Product from './pages/product';
import Blog from './pages/blog';
import Contact from './pages/contact';
import ProductDetail from './pages/productDetail';
import ShopCart from './pages/shopCart';
import CheckOut from './pages/checkout';
import BlogDetail from './pages/blogdetail';
import Error404 from './pages/error404';
import { parseRequestUrl } from './untils';
import 'owl.carousel';

const $$ = selector => {
    let elements = document.querySelectorAll(selector);
    return elements.length == 1 ? elements[0] : elements
}

const routes = {
    '/': Home,
    '/products': Product,
    '/blog': Blog,
    '/contact': Contact,
    '/products/:id': ProductDetail,
    '/shopcart': ShopCart,
    '/checkout': CheckOut,
    '/blogdetail': BlogDetail
}
const router = async () => {
    const { resource, id } = parseRequestUrl();
    const parseUrl = (resource ? `/${resource}` : '/') + (id ? `/:id` : '');
    // console.log("par :" + parseUrl);
    const page = routes[parseUrl] ? routes[parseUrl] : Error404;
    // console.log("page: " + page);
    $$('#main-content').innerHTML = await page.render();
    $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true
        });
    });
}
window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);