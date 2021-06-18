import Header from '../components/header';
import Footer from '../components/footer';
import {
    checkLogout,
    search
} from '../untils';
const BlogDetail = {
    async render() {
        return /*html */ `
       ${await Header.render()}
        <div class="mb-12">
        <main class="container mx-auto lg:px-16 lg:pt-24">
            <div>
                <div class="my-8 ">
                    <a href="./index.html"><span><i class="fas fa-home"></i></span>
                        <span style="font-family: FontAwesome;">Home > <span class="text-gray-600">Blog > Name
                                blog</span></span>
                        </i></a>
                </div>
            </div>
            <div class="grid lg:grid-cols-12 gap-2">
                <div class="col-span-8">
                    <img src="https://picsum.photos/640/480" alt="" style="width: 750px; height: 500px;">
                    <div class="my-4">
                        <h2 class=" uppercase font-semibold">Being seen: how is age diversity effecting change in
                            fashion and beauty?</h2>
                        <p class="font-serif text-gray-400 text-base">by <span>author | </span><span>seb 17,2021 |
                            </span><span>39
                                comment</span></p>
                    </div>
                    <div class="font-serif text-gray-600">
                        <p class="my-2">Afashion season can be defined as much by the people on the catwalk as it can by
                            the clothes
                            they are wearing. This time around, a key moment came at the end of Marc Jacobs’ New York
                            show, when an almost makeup-free Christy Turlington made a rare return to the catwalk, aged
                            50 (she also stars, with the designer himself, in the label’s AW ad campaign), where the
                            average catwalk model is around 18.</p>
                        <p class="my-2">A few days later, Simone Rocha arguably upped the ante. The 32-year-old’s show –
                            in part
                            inspired by Louise Bourgeois, who lived until she was 98 – featured models in their 30s and
                            40s, including cult favourite Jeny Howorth and actor Chloë Sevigny.
                        </p>
                        <p class="my-2">Occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                            id est
                            laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate.</p>
                    </div>
                    <div>
                        <h3 class="uppercase font-semibold mb-4">39 Comment</h3>
                        <div class="flex justify-between items-center gap-2 my-2">
                            <div>
                                <img src="https://picsum.photos/640/480" class="rounded" alt=""
                                    style="width: 90opx; height: 90px;">
                            </div>
                            <div>
                                <h5 class="font-semibold text-base">Brandon Kelley</h5>
                                <p class="font-serif text-gray-600 text-sm">Duis voluptatum. Id vis consequat consetetur
                                    dissentiet, ceteros commune perpetua mei
                                    et. Simul viderer facilisis egimus tractatos splendi.</p>
                                <span class="font-serif text-gray-600 text-sm"><i class="far fa-clock"></i> Seb 17,
                                    2019</span>
                            </div>
                        </div>
                        <div class="flex justify-between items-center gap-2 my-4">
                            <div>
                                <img src="https://picsum.photos/640/480" class="rounded" alt=""
                                    style="width: 90opx; height: 90px;">
                            </div>
                            <div>
                                <h5 class="font-semibold text-base">Brandon Kelley</h5>
                                <p class="font-serif text-gray-600 text-sm">Duis voluptatum. Id vis consequat consetetur
                                    dissentiet, ceteros commune perpetua mei
                                    et. Simul viderer facilisis egimus tractatos splendi.</p>
                                <span class="font-serif text-gray-600 text-sm"><i class="far fa-clock"></i> Seb 17,
                                    2019</span>
                            </div>
                        </div>
                        <div class="flex justify-between items-center gap-2 my-2">
                            <div>
                                <img src="https://picsum.photos/640/480" class="rounded" alt=""
                                    style="width: 90opx; height: 90px;">
                            </div>
                            <div>
                                <h5 class="font-semibold text-base">Brandon Kelley</h5>
                                <p class="font-serif text-gray-600 text-sm">Duis voluptatum. Id vis consequat consetetur
                                    dissentiet, ceteros commune perpetua mei
                                    et. Simul viderer facilisis egimus tractatos splendi.</p>
                                <span class="font-serif text-gray-600 text-sm"><i class="far fa-clock"></i> Seb 17,
                                    2019</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-4 ">
                    <div class=" font-serif text-xl mb-4">
                        <h3>FEATURE POSTS</h3>
                    </div>
                    <div class="flex justify-between items-center gap-2 my-2">
                        <div>
                            <img src="https://picsum.photos/640/480" style="width: 110px; height: 73px;" alt="">
                        </div>
                        <div class="">
                            <h4 class="font-serif text-sm">Amf Cannes Red Carpet Celebrities Kend...</h4>
                            <span class="font-serif text-gray-600 text-sm">Seb 17, 2019</span>
                        </div>
                    </div>
                    <div class="flex justify-between items-center gap-2 my-2">
                        <div>
                            <img src="https://picsum.photos/640/480" style="width: 110px; height: 73px;" alt="">
                        </div>
                        <div class="">
                            <h4 class="font-serif text-sm">Amf Cannes Red Carpet Celebrities Kend...</h4>
                            <span class="font-serif text-gray-600 text-sm">Seb 17, 2019</span>
                        </div>
                    </div>
                    <div class="flex justify-between items-center gap-2 my-2">
                        <div>
                            <img src="https://picsum.photos/640/480" style="width: 110px; height: 73px;" alt="">
                        </div>
                        <div class="">
                            <h4 class="font-serif text-sm">Amf Cannes Red Carpet Celebrities Kend...</h4>
                            <span class="font-serif text-gray-600 text-sm">Seb 17, 2019</span>
                        </div>
                    </div>
                    <div class="flex justify-between items-center gap-2 my-2">
                        <div>
                            <img src="https://picsum.photos/640/480" style="width: 110px; height: 73px;" alt="">
                        </div>
                        <div class="">
                            <h4 class="font-serif text-sm">Amf Cannes Red Carpet Celebrities Kend...</h4>
                            <span class="font-serif text-gray-600 text-sm">Seb 17, 2019</span>
                        </div>
                    </div>
                    <div class="flex justify-between items-center gap-2 my-2">
                        <div>
                            <img src="https://picsum.photos/640/480" style="width: 110px; height: 73px;" alt="">
                        </div>
                        <div class="">
                            <h4 class="font-serif text-sm">Amf Cannes Red Carpet Celebrities Kend...</h4>
                            <span class="font-serif text-gray-600 text-sm">Seb 17, 2019</span>
                        </div>
                    </div>
                    <div class="flex justify-between items-center gap-2 my-2">
                        <div>
                            <img src="https://picsum.photos/640/480" style="width: 110px; height: 73px;" alt="">
                        </div>
                        <div class="">
                            <h4 class="font-serif text-sm">Amf Cannes Red Carpet Celebrities Kend...</h4>
                            <span class="font-serif text-gray-600 text-sm">Seb 17, 2019</span>
                        </div>
                    </div>
                    <div class="flex justify-between items-center gap-2 my-2">
                        <div>
                            <img src="https://picsum.photos/640/480" style="width: 110px; height: 73px;" alt="">
                        </div>
                        <div class="">
                            <h4 class="font-serif text-sm">Amf Cannes Red Carpet Celebrities Kend...</h4>
                            <span class="font-serif text-gray-600 text-sm">Seb 17, 2019</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
            ${Footer.render()}
        `;
    },
    async afterRender() {
        checkLogout();
        search();
    }
}
export default BlogDetail;