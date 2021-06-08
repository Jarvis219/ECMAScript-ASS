import Home from './pages/home';
import Product from './pages/product';
import Blog from './pages/blog';
import Contact from './pages/contact';
import ProductDetail from './pages/productDetail';
import ShopCart from './pages/shopCart';
import CheckOut from './pages/checkout';
import BlogDetail from './pages/blogdetail';
import Error404 from './pages/error404';
import AddCategory from './pages/admin/category/addcategory';
import AdminCategory from './pages/admin/category/listcategory';
import {
    useParams,
    $$
} from './untils';
import Adminproducts from './pages/admin/Product/listproducts';
import EitProduct from './pages/admin/Product/editproduct';
import AddProduct from './pages/admin/Product/addproduct';
import EditCategory from './pages/admin/category/editcategory';
import SignUp from './components/signup';
import SignIn from './components/signin';
import ProductCate from './pages/productCate';
import ListContact from './pages/admin/contact/listcontact';
import ListCarts from './pages/admin/carts/listcart';
import EditCart from './pages/admin/carts/editcart';
// import 'owl.carousel';



const routes = {
    '/': Home,
    '/products': Product,
    '/blog': Blog,
    '/contact': Contact,
    '/products/:id': ProductDetail,
    '/shopcart': ShopCart,
    '/checkout': CheckOut,
    '/blogdetail': BlogDetail,
    '/listproducts': Adminproducts,
    '/listcategory': AdminCategory,
    '/editproduct/:id': EitProduct,
    '/editcategory/:id': EditCategory,
    '/addproduct': AddProduct,
    '/addcategory': AddCategory,
    '/signup': SignUp,
    '/signin': SignIn,
    '/productcate/:id': ProductCate,
    '/listcontact': ListContact,
    '/listcarts': ListCarts,
    '/editcart/:id': EditCart

}
const router = async () => {
    const {
        resource,
        id,
        action
    } = useParams();
    // console.log(action);
    const parseUrl = (resource ? `/${resource}` : '/') + (id ? `/:id` : '') + (action ? `/action` : '');
    // console.log("par :" + parseUrl);
    const page = routes[parseUrl] ? routes[parseUrl] : Error404;
    // console.log(page);
    $$('#main-content').innerHTML = await page.render();
    if (page.afterRender) {
        await page.afterRender();
    } else {
        console.log('not afterRender');
    }

}
window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router);