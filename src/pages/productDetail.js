import Header from '../components/header';
import Footer from '../components/footer';
import { useParams } from '../untils';
import productAPI from '../api/productAPI';

const ProductDetail = {
    async render() {
        // console.log(useParams());
        const { id } = useParams();
        // const response = await fetch("http://localhost:3001/products");
        // const data = await response.json();
        // console.log(data);
        // const result = data.find(element => {
        //     return element.id == id;
        // })
        // console.log(result.name);
        
        const {data:result} = await productAPI.read(id);
        // console.log(result);
        return /*html*/`
        ${Header.render()}
            <div class="container mx-auto px-16 pt-24">
                <div class="my-8">
                    <a href="./index.html"><span><i class="fas fa-home"></i></span>
                        <span style="font-family: FontAwesome;">Home > Women's > <span class="text-gray-600"></span></span>
                        </i></a>
                </div>
                <div class="grid md:grid-cols-2 gap-2 mt-12 md:mt-0 wow fadeInDown " data-wow-duration=" 1s">
                    <div class=" grid grid-cols-4">
                        <div class="pr-1 md:pr-0">
                            <span><img onclick="showDetails(this)" data-src="./images/product/details/product-3.jpg"
                                    src="./images/product/details/thumb-1.jpg" alt="" id="imgOne"
                                    class="object-cover"></span>
                            <span class="block py-1 md:py-5"><img onclick="showDetails(this)"
                                    data-src="./images/product/details/product-1.jpg"
                                    src="./images/product/details/thumb-2.jpg" id="imgTwo" alt=""
                                    class="object-cover"></span>
                            <span><img onclick="showDetails(this)" data-src="./images/product/details/product-2.jpg"
                                    src="./images/product/details/thumb-3.jpg" id="imgThree" alt=""
                                    class="object-cover"></span>
                            <span class="block py-1 md:py-5"><img onclick="showDetails(this)"
                                    data-src="./images/product/details/product-4.jpg"
                                    src="./images/product/details/thumb-4.jpg" id="imgFore" alt=""
                                    class="object-cover"></span>
                        </div>
                        <div class="col-span-3">
                            <img src="https://picsum.photos/200/300"  style="Width:430px; height:550px" alt="" id="imgAll" class="object-cover">
                        </div>
                    </div>
                    <!-- end content-img -->
                    <div >
                        <div class="mx-8">
                            <div>
                                <h3 class=" font-semibold text-xl md:text-3xl uppercase">
                                ${result.name}
                                </h3>
                                <span class="text-sm text-gray-600">Brand: SKMEIMore Men Watches from SKMEI</span>
                            </div>
                            <div>
                                <span class="inline-block py-2 text-xs text-yellow-500"><i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i></span>
                                <span class="inline text-xs text-gray-700">( 138 reviews )</span>
                            </div>
                            <div class="pb-6">
                                <span class="text-red-700 text-3xl font-semibold inline-block pt-2 pr-2">$  </span>
                                <span class="text-gray-500 text-lg line-through font-medium">$ 83.0</span>
                            </div>
                            <p class="text-sm text-gray-700 pb-8">Nemo enim ipsam
                                voluptatem quia aspernatur aut odit aut loret
                                fugit, sed<br> quia
                                consequuntur magni
                                lores eos qui ratione voluptatem sequi nesciunt.</p>
                            <div>
                                <span>Quantity:</span>
                                <div class="inline-block border border-gray-500 rounded-full py-3 text-gray-700">
                                    <a href="#" class="pl-3" id="minus">-</a>
                                    <input type="text" name="" id="number" value="1" min="0"
                                        class=" outline-none text-center w-24">
                                    <a href="#" class="pr-5" id="plus">+</a>
                                </div>
                                <a href=""
                                    class="bg-red-700 text-white py-4 px-6 rounded-full inline-block my-8 "><span>
                                        <i class="fas fa-cart-plus"> </i> ADD TO CART
                                    </span></a>
                                <div class="inline-block">
                                    <span class="border boder-gray-700 rounded-full p-4 mx-2"><i
                                            class="far fa-heart"></i></span>
                                    <span class="border boder-gray-700 rounded-full p-4 "><i
                                            class="fas fa-sliders-h"></i></span>
                                </div>
                            </div>
                            <hr class="my-8">
                            <div>
                                <div class="flex">
                                    <span>Availability:</span>
                                    <div class="pl-12">
                                        <label for="" class="text-gray-600 text-sm "><input type="checkbox" name=""
                                                id="">
                                            In
                                            Stock</label>
                                    </div>
                                </div>
                                <div class="flex py-2 relative">
                                    <span>Available color:</span>
                                    <div class="pl-6">
                                        <input type="radio" name="color" id="red">
                                        <input type="radio" name="color" id="blue" class="mx-4">
                                        <input type="radio" name="color" id="yellow">
                                    </div>
                                    <div class="absolute  inset-0 pt-1 " style="padding-left: 144px;">
                                        <span class="text-red-600 text-xl  rounded-full "><i
                                                class="fas fa-circle"></i></span>
                                        <span class="text-blue-600 text-xl  rounded-full pl-2"><i
                                                class="fas fa-circle"></i></span>
                                        <span class="text-yellow-600 text-xl  rounded-full pl-2"><i
                                                class="fas fa-circle"></i></span>
                                    </div>
                                </div>
                                <div class=" flex relative">
                                    <span>Available size:</span>
                                    <div class="pl-6 hidden">
                                        <label class="pl-2 text-sm text-gray-700" for=""><input type="radio" name="size"
                                                id=""></label>
                                        <label class="pl-2 text-sm text-gray-700" for=""><input type="radio" name="size"
                                                id=""></label>
                                        <label class="pl-2 text-sm text-gray-700" for=""><input type="radio" name="size"
                                                id=""></label>
                                        <label class="pl-2 text-sm text-gray-700" for=""><input type="radio" name="size"
                                                id=""></label>
                                    </div>
                                    <div class="absolute inset-0 pl-24">
                                        <div class="pl-4">
                                            <span class="pl-8 text-red-500">XL</span>
                                            <span class="pl-1">S</span>
                                            <span class="pl-2">M</span>
                                            <span class="pl-2">L</span>
                                        </div>

                                    </div>
                                </div>
                                <div class="py-2">
                                    <span>Promotions:</span>
                                    <span class="pl-10  text-sm text-gray-700">Free shipping</span>
                                </div>
                            </div>
                        </div>
                        <!-- end shop cart -->
                    </div>
                </div>
                <div class="mt-20">
                    <section class="wow rotateIn" data-wow-duration="2s" ">
                <nav>
                    <ul class=" flex justify-center">
                        <li class="text-lg font-medium"><a href="#"></a>Description</li>
                        <li class="text-lg px-2 md:px-14"><a href="#"></a>Specification</li>
                        <li class="text-lg"><a href="#"></a>Reviews ( 2 )</li>
                        </ul>
                        </nav>
                        <article class="text-gray-600 pt-12">
                            <h6 class="text-gray-800 text-base font-medium">Description</h6>
                            <p class="pt-6 pb-4">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                                loret
                                fugit, sed quia
                                consequuntur magni dolores eos qui ratione voluptatem sequi<br> nesciunt loret. Neque
                                porro
                                lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam voluptatem quia
                                voluptas sit aspernatur aut odit aut loret<br> fugit, sed quia ipsu consequuntur magni
                                dolores eos qui ratione voluptatem sequi nesciunt. Nulla consequat massa quis enim.</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                dolor.
                                Aenean massa. Cum sociis natoque penatibus et magnis dis<br> parturient montes, nascetur
                                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                        </article>
                    </section>
                    <section class="mt-20">
                        <h5 class="pb-8 font-semibold text-xl text-center">
                            RELATED PRODUCTS
                        </h5>
                        <div class="md:flex justify-between  wow bounceInUp" data-wow-duration=" 1s">
                            <article class="group my-8 md:my-0 md:mx-2 xl:mx-0">
                                <div class="relative  overflow-hidden">
                                    <img src="./images/product/related/rp-1.jpg" alt="" class="w-full object-cover">
                                    <div class="absolute top-0 mt-4 ml-4">
                                        <span class="bg-green-400 text-sm px-2 py-1 text-white">NEW</span>
                                    </div>
                                    <div class="flex justify-center">
                                        <div
                                            class="absolute bottom-0 mb-8   text-xs  xl:text-xl transition duration-500 ease-in-out transform translate-y-40 group-hover:translate-y-0">
                                            <a href="#"
                                                class="bg-gray-200  p-3 md:m-1 md:p-1 lg:p-3 xl:p-2 xl:px-3 rounded-full  hover:bg-red-600 hover:text-white"><i
                                                    class="fas fa-expand-arrows-alt transform hover:rotate-360 transition duration-500 ease-in-out "></i></a>
                                            <a href="#"
                                                class="bg-gray-200  p-3 md:m-1  md:p-1 lg:p-3 xl:p-2 xl:px-3 rounded-full mx-4 hover:bg-red-600 hover:text-white"><i
                                                    class="far fa-heart transform hover:rotate-360 transition duration-500 ease-in-out "></i></a>
                                            <a href="#"
                                                class="bg-gray-200  p-3  md:m-1  md:p-1 lg:p-3 xl:p-2 xl:px-3 rounded-full  hover:bg-red-600 hover:text-white"><i
                                                    class="fas fa-cart-plus transform hover:rotate-360 transition duration-500 ease-in-out "></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center pt-4">
                                    <a href="#" class="block hover:text-red-500">Buttons tweed blazer</a>
                                    <span class="block py-2 text-sm text-yellow-400"><i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i></span>
                                    <span class="font-medium">$ 59.0</span>
                                </div>
                            </article>
                            <article class="group my-8 md:my-0 md:mx-2 xl:mx-0">
                                <div class="relative  overflow-hidden">
                                    <img src="./images/product/related/rp-2.jpg" alt="" class="w-full object-cover">
                                    <div class="flex justify-center">
                                        <div
                                            class="absolute bottom-0 mb-8   text-xs xl:text-xl  transition duration-500 ease-in-out transform translate-y-40 group-hover:translate-y-0">
                                            <a href="#"
                                                class="bg-gray-200    p-3 md:m-1 md:p-1 lg:p-3 xl:p-2 xl:px-3  rounded-full  hover:bg-red-600 hover:text-white"><i
                                                    class="fas fa-expand-arrows-alt transform hover:rotate-360 transition duration-500 ease-in-out "></i></a>
                                            <a href="#"
                                                class="bg-gray-200    p-3 md:m-1 md:p-1 lg:p-3 xl:p-2 xl:px-3  rounded-full mx-4 hover:bg-red-600 hover:text-white"><i
                                                    class="far fa-heart transform hover:rotate-360 transition duration-500 ease-in-out "></i></a>
                                            <a href="#"
                                                class="bg-gray-200    p-3 md:m-1 md:p-1 lg:p-3 xl:p-2 xl:px-3  rounded-full  hover:bg-red-600 hover:text-white"><i
                                                    class="fas fa-cart-plus transform hover:rotate-360 transition duration-500 ease-in-out "></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center pt-4">
                                    <a href="#" class="block hover:text-red-500">Flowy striped skirt </a>
                                    <span class="block py-2 text-sm text-yellow-400"><i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i></span>
                                    <span class="font-medium">$ 49.0</span>
                                </div>
                            </article>
                            <article class="group my-8 md:my-0 md:mx-2 xl:mx-0">
                                <div class="relative  overflow-hidden">
                                    <img src="./images/product/related/rp-3.jpg" alt="" class="w-full object-cover">
                                    <div class="absolute top-0 mt-3 ml-3">
                                        <span class="bg-black text-white text-sm px-2 py-1">OUT OF STOCK</span>
                                    </div>
                                    <div class="flex justify-center">
                                        <div
                                            class="absolute bottom-0 mb-8  text-xs xl:text-xl  transition duration-500 ease-in-out transform translate-y-40 group-hover:translate-y-0">
                                            <a href="#"
                                                class="bg-gray-200    p-3 md:m-1 md:p-1 lg:p-3 xl:p-2 xl:px-3  rounded-full  hover:bg-red-600 hover:text-white"><i
                                                    class="fas fa-expand-arrows-alt transform hover:rotate-360 transition duration-500 ease-in-out "></i></a>
                                            <a href="#"
                                                class="bg-gray-200    p-3 md:m-1 md:p-1 lg:p-3 xl:p-2 xl:px-3  rounded-full mx-4 hover:bg-red-600 hover:text-white"><i
                                                    class="far fa-heart transform hover:rotate-360 transition duration-500 ease-in-out "></i></a>
                                            <a href="#"
                                                class="bg-gray-200    p-3 md:m-1 md:p-1 lg:p-3 xl:p-2 xl:px-3  rounded-full  hover:bg-red-600 hover:text-white"><i
                                                    class="fas fa-cart-plus transform hover:rotate-360 transition duration-500 ease-in-out "></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center pt-4">
                                    <a href="#" class="block hover:text-red-500">Cotton T-Shirt</a>
                                    <span class="block py-2 text-sm text-yellow-400"><i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i></span>
                                    <span class="font-medium">$ 59.0</span>
                                </div>
                            </article>
                            <article class="group my-8 md:my-0 md:mx-2 xl:mx-0">
                                <div class="relative  overflow-hidden">
                                    <img src="./images/product/related/rp-4.jpg" alt="" class="w-full object-cover">
                                    <div class="flex justify-center">
                                        <div
                                            class="absolute bottom-0 mb-8  text-xs xl:text-xl   transition duration-500 ease-in-out transform translate-y-40 group-hover:translate-y-0">
                                            <a href="#"
                                                class="bg-gray-200   p-3 md:m-1 md:p-1 lg:p-3 xl:p-2 xl:px-3  rounded-full  hover:bg-red-600 hover:text-white"><i
                                                    class="fas fa-expand-arrows-alt transform hover:rotate-360 transition duration-500 ease-in-out "></i></a>
                                            <a href="#"
                                                class="bg-gray-200   p-3 md:m-1 md:p-1 lg:p-3 xl:p-2 xl:px-3  rounded-full mx-4 hover:bg-red-600 hover:text-white"><i
                                                    class="far fa-heart transform hover:rotate-360 transition duration-500 ease-in-out "></i></a>
                                            <a href="#"
                                                class="bg-gray-200    p-3 md:m-1 md:p-1 lg:p-3 xl:p-2 xl:px-3  rounded-full  hover:bg-red-600 hover:text-white"><i
                                                    class="fas fa-cart-plus transform hover:rotate-360 transition duration-500 ease-in-out "></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center pt-4">
                                    <a href="#" class="block hover:text-red-500">Slim striped pocket shirt</a>
                                    <span class="block py-2 text-sm text-yellow-400"><i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i></span>
                                    <span class="font-medium">$ 59.0</span>
                                </div>
                            </article>
                        </div>
                    </section>
                </div>
                <!-- end content bottom -->
            </div>
            <section class="instagram md:flex my-16 ">
                <div class="relative group overflow-hidden">
                    <a href="#"><img src="./images/instagram/insta-1.jpg" alt="" class="w-screen object-cover"></a>
                    <div class="absolute  inset-0 opacity-75 hover:bg-white ">
                        <div
                            class=" absolute inset-0 text-white hidden group-hover:block  text-center hover:text-red-800 py-40">
                            <span><i class="fab fa-instagram block"></i><br>
                                <a href="#">@ ashion_shop</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="relative group overflow-hidden">
                    <a href="#"><img src="./images/instagram/insta-2.jpg" alt="" class="w-screen object-cover"></a>
                    <div class="absolute  inset-0 opacity-75 hover:bg-white ">
                        <div
                            class="absolute inset-0 text-white  text-center hidden group-hover:block hover:text-red-800  py-40">
                            <span><i class="fab fa-instagram block "></i><br>
                            </span>
                            <a href="#">@ ashion_shop</a>
                        </div>
                    </div>
                </div>
                <div class="relative group overflow-hidden">
                    <a href="#"><img src="./images/instagram/insta-3.jpg" alt="" class="w-screen object-cover"></a>
                    <div class="absolute  inset-0 opacity-75 hover:bg-white ">
                        <div
                            class="absolute inset-0 text-white hidden group-hover:block text-center hover:text-red-800 py-40">
                            <span><i class="fab fa-instagram block "></i><br>
                            </span>
                            <a href="#">@ ashion_shop</a>
                        </div>
                    </div>
                </div>
                <div class="relative group overflow-hidden">
                    <a href="#"><img src="./images/instagram/insta-4.jpg" alt="" class="w-screen object-cover"></a>
                    <div class="absolute  inset-0 opacity-75 hover:bg-white ">
                        <div
                            class="absolute inset-0 text-white hidden group-hover:block text-center hover:text-red-800 py-40">
                            <span><i class="fab fa-instagram block "></i><br>
                            </span>
                            <a href="#">@ ashion_shop</a>
                        </div>
                    </div>
                </div>
                <div class="relative group overflow-hidden">
                    <a href="#"><img src="./images/instagram/insta-5.jpg" alt="" class="w-screen object-cover"></a>
                    <div class="absolute  inset-0 opacity-75 hover:bg-white ">
                        <div
                            class="absolute inset-0 hidden group-hover:block text-white  text-center hover:text-red-800 py-40">
                            <span><i class="fab fa-instagram block "></i><br>
                            </span>
                            <a href="#">@ ashion_shop</a>
                        </div>
                    </div>
                </div>
                <div class="relative group overflow-hidden">
                    <a href="#"><img src="./images/instagram/insta-6.jpg" alt="" class="w-screen object-cover"></a>
                    <div class="absolute  inset-0 opacity-75 hover:bg-white ">
                        <div
                            class="absolute inset-0 text-white hidden group-hover:block  text-center hover:text-red-800 py-40">
                            <span><i class="fab fa-instagram block "></i><br>
                            </span>
                            <a href="#">@ ashion_shop</a>
                        </div>
                    </div>
                </div>
            </section>
            <!-- end section instagram -->
            ${Footer.render()}
            `;
    }
}
export default ProductDetail;