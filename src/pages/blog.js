import Header from '../components/header';
import Footer from '../components/footer';
import {
    checkLogout,
    search
} from '../untils';
const Blog = {
    async render() {
        return /*html */ `
        ${ await Header.render()}
        <div>
        <div class="container mx-auto px-16 pt-24">
            <div class="my-8 ">
                <a href="#/"><span><i class="fas fa-home"></i></span>
                    <span style="font-family: FontAwesome;">Home > <span
                            class="text-gray-600">Blog</span></span>
                    </i></a>
            </div>
            <div>
                <div>
                    <video autoplay loop>
                        <source src="./assets/video/videoplayback.mp4">
                    </video>
                </div>
                <div class="text-xs lg:text-base my-8">
                    <a href="#"
                        class="text-base md:text-xl lg:text-2xl xl:text-4xl font-medium text-red-500">Google
                        inks pact
                        for new
                        35-storey
                        office</a>
                    <p class="text-gray-600">Video is one of the most important tools for a digital marketing
                        strategy. Viewers are consuming video content more than ever before and that trend isn’t
                        slowing down anytime soon.The move from text and visual content to video content has
                        been
                        FAST and businesses who don’t make the transition will be left behind with an
                        underperforming website.</p>
                </div>
            </div>
            <div class="md:flex justify-between mb-20 md:mb-0">
                <section class="wow bounceInLeft" data-wow-duration=" 2s">
                    <div>
                        <article class="relative overflow-hidden">
                            <img src=" ./images/blog/blog-1.jpg" alt="" style="height: 540px;"
                                class="w-full object-cover transition delay-300 duration-500 ease-in-out transform scale-100 hover:scale-110">
                            <div class="absolute bottom-0 left-0 bg-white pr-12 pt-3  ">
                                <a href="" class="font-semibold text-xs lg:text-sm">No Bad Blood! The Reason Why
                                    Tamr<br> Judge
                                    Finally
                                    Made
                                    Up With...</a>
                            </div>
                        </article>
                        <p class="text-xs absolute pt-3"><span class="text-gray-500">by</span> Ema
                            Timahe
                            <span class="text-gray-500 "> | Seb 17,
                                2019</span>
                        </p>
                    </div>
                    <div class="my-24 md:my-12 ">
                        <article class=" relative overflow-hidden">
                            <img src=" ./images/blog/blog-7.jpg" alt="" style="height: 240px;"
                                class="w-full object-cover  transition delay-300 duration-500 ease-in-out transform scale-100 hover:scale-110">
                            <div class="absolute bottom-0 left-0 bg-white pr-12 pt-3  ">
                                <a href="" class="font-semibold text-xs lg:text-sm">Pot Party! See Farrah
                                    Abraham<br>
                                    Flaunt Smoking Body
                                    At...</a>
                            </div>
                        </article>
                        <p class="text-xs absolute pt-3"><span class="text-gray-500">by</span> Ema
                            Timahe
                            <span class="text-gray-500 "> | Seb 17,
                                2019</span>
                        </p>
                    </div>
                    <div>
                        <article class="relative overflow-hidden">
                            <img src="./images/blog/blog-9.jpg" alt="" style="height: 240px;"
                                class="w-full object-cover  transition delay-300 duration-500 ease-in-out transform scale-100 hover:scale-110">
                            <div class="absolute bottom-0 bg-white pr-12 pt-3 ">
                                <a href="" class="font-semibold text-xs lg:text-sm">CMT Awards 2019 Red Carpet
                                    Arrivals<br> Carrie
                                    Underwood,
                                    Sheryl...</a>

                            </div>
                        </article>
                        <p class="text-xs absolute pt-3"><span class="text-gray-500">by</span> Ema Timahe
                            <span class="text-gray-500 "> | Seb 17,
                                2019</span>
                        </p>
                    </div>
                </section>
                <!-- end col1 -->
                <section class="md:mx-3 xl:mx-0 wow bounceInUp" data-wow-duration=" 1s">
                    <div class="my-24 md:my-0">
                        <article class="relative overflow-hidden">
                            <img src="./images/blog/blog-2.jpg" alt="" style="height: 240px;"
                                class="w-full object-cover  transition delay-300 duration-500 ease-in-out transform scale-100 hover:scale-110">
                            <div class="absolute bottom-0 bg-white pr-12 pt-3 ">
                                <a href="" class="font-semibold text-xs lg:text-sm">Amf Cannes Red Carpet
                                    Celebrities<br> Kendall Jenner,
                                    Pamela...</a>
                            </div>
                        </article>
                        <p class="text-xs absolute pt-3"><span class="text-gray-500">by</span> Ema Timahe
                            <span class="text-gray-500 "> | Seb 17,
                                2019</span>
                        </p>
                    </div>
                    <div class="my-12">
                        <article class=" relative overflow-hidden">
                            <img src="./images/blog/blog-4.jpg" alt="" style="height: 240px;"
                                class="w-full object-cover transition delay-300 duration-500 ease-in-out transform scale-100 hover:scale-110">
                            <div class="absolute bottom-0 bg-white pr-12 pt-3 ">
                                <a href="" class="font-semibold text-xs lg:text-sm">Ireland Baldwin Shows Off
                                    Trendy<br> Ilse Valfre
                                    Tattoo At Stagecoach...</a>
                            </div>
                        </article>
                        <p class="text-xs absolute pt-3"><span class="text-gray-500">by</span> Ema Timahe
                            <span class="text-gray-500 "> | Seb 17,
                                2019</span>
                        </p>
                    </div>
                    <div class="my-24 md:my-0">
                        <article class="relative overflow-hidden">
                            <img src="./images/blog/blog-8.jpg" alt="" style="height: 240px;"
                                class="w-full object-cover transition delay-300 duration-500 ease-in-out transform scale-100 hover:scale-110">
                            <div class="absolute bottom-0 bg-white pr-12 pt-3 ">
                                <a href="" class="font-semibold text-xs lg:text-sm">Kim Kardashian Steps Out In
                                    Paris<br> Wearing
                                    Shocking Sparkly...</a>
                            </div>
                        </article>
                        <p class="text-xs absolute pt-3"><span class="text-gray-500">by</span> Ema Timahe
                            <span class="text-gray-500 "> | Seb 17,
                                2019</span>
                        </p>
                    </div>
                    <div class="my-12">
                        <article class=" relative overflow-hidden">
                            <img src="./images/blog/blog-10.jpg" alt="" style="height: 240px;"
                                class="w-full object-cover transition delay-300 duration-500 ease-in-out transform scale-100 hover:scale-110">
                            <div class="absolute bottom-0 bg-white pr-12 pt-3 ">
                                <a href="" class="font-semibold text-xs lg:text-sm">A-list Battle! Angelina
                                    Jolie &
                                    Lady<br> Gaga
                                    Fighting Over Who...</a>
                            </div>
                        </article>
                        <p class="text-xs absolute pt-3"><span class="text-gray-500">by</span> Ema Timahe
                            <span class="text-gray-500 "> | Seb 17,
                                2019</span>
                        </p>
                    </div>

                </section>
                <!-- end col2 -->
                <section class=" wow slideInRight" data-wow-duration=" 2s">
                    <div class="my-24 md:my-0">
                        <article class="relative overflow-hidden">
                            <img src="./images/blog/blog-3.jpg" alt="" style="height: 240px;"
                                class="w-full object-cover transition delay-300 duration-500 ease-in-out transform scale-100 hover:scale-110">
                            <div class="absolute bottom-0 bg-white pr-12 pt-3 ">
                                <a href="" class="font-semibold text-xs lg:text-sm">Gigi Hadid, Rita Ora, Serena
                                    &
                                    Other<br> Hot Celebs
                                    Stun At 2019...</a>
                            </div>
                        </article>
                        <p class="text-xs absolute pt-3"><span class="text-gray-500">by</span> Ema Timahe
                            <span class="text-gray-500 "> | Seb 17,
                                2019</span>
                        </p>
                    </div>
                    <div class="my-12">
                        <article class="  relative overflow-hidden">
                            <img src="./images/blog/blog-5.jpg" alt="" style="height: 240px;"
                                class="w-full object-cover transition delay-300 duration-500 ease-in-out transform scale-100 hover:scale-110">
                            <div class="absolute bottom-0 bg-white pr-12 pt-3 ">
                                <a href="" class="font-semibold text-xs lg:text-sm">Billboard Music Awards:
                                    Best,
                                    Worst<br> & Wackiest
                                    Dresses On The...</a>
                            </div>
                        </article>
                        <p class="text-xs absolute pt-3"><span class="text-gray-500">by</span> Ema Timahe
                            <span class="text-gray-500 "> | Seb 17,
                                2019</span>
                        </p>
                    </div>
                    <div class="mt-24 md:mt-0">
                        <article class="relative overflow-hidden">
                            <img src="./images/blog/blog-6.jpg" alt="" style="height: 540px;"
                                class="w-full object-cover transition delay-300 duration-500 ease-in-out transform scale-100 hover:scale-110">
                            <div>
                                <div class="absolute bottom-0 bg-white pr-12 pt-3 ">
                                    <a href="" class="font-semibold text-xs lg:text-sm">Stephanie Pratt Busts
                                        Out Of
                                        Teeny<br> Black Bikini
                                        During Hawaii...</a>
                                </div>
                        </article>
                        <p class="text-xs absolute pt-3"><span class="text-gray-500">by</span> Ema Timahe
                            <span class="text-gray-500 "> | Seb 17,
                                2019</span>
                        </p>
                    </div>
                </section>
                <!-- end col3 -->
            </div>
            <div
                class=" text-center my-12 transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out">
                <a href="#"
                    class="bg-gray-200 px-4 md:px-12 py-3 rounded-full outline-none hover:bg-gray-500   ">LOAD
                    MORE POSTS</a>
            </div>
        </div>
    </div>
    <!-- end content -->
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
            class=" absolute inset-0 text-white hidden group-hover:block  text-center hover:text-red-800 py-40">
            <span><i class="fab fa-instagram block"></i><br>
                <a href="#">@ ashion_shop</a>
            </span>
        </div>
            </div>
        </div>
        <div class="relative group overflow-hidden">
            <a href="#"><img src="./images/instagram/insta-3.jpg" alt="" class="w-screen object-cover"></a>
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
            <a href="#"><img src="./images/instagram/insta-4.jpg" alt="" class="w-screen object-cover"></a>
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
            <a href="#"><img src="./images/instagram/insta-5.jpg" alt="" class="w-screen object-cover"></a>
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
            <a href="#"><img src="./images/instagram/insta-6.jpg" alt="" class="w-screen object-cover"></a>
            <div class="absolute  inset-0 opacity-75 hover:bg-white ">
            <div
            class=" absolute inset-0 text-white hidden group-hover:block  text-center hover:text-red-800 py-40">
            <span><i class="fab fa-instagram block"></i><br>
                <a href="#">@ ashion_shop</a>
            </span>
        </div>
            </div>
        </div>
    </section>
    <!-- end section instagram -->
        ${Footer.render()}
        `;

    },
    afterRender() {
        checkLogout();
        search();
    }
}
export default Blog;