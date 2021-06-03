import Header from '../components/header';
import Footer from '../components/footer';
import {
    $$
} from '../untils';
const ShopCart = {
    async render() {
        return /*html */ `
        ${Header.render()}
        <div>
        <main class="pt-24">
            <div>
                <div class="container mx-auto px-16 pt-4">
                    <div class="my-8 ">
                        <a href="./index.html"><span><i class="fas fa-home"></i></span>
                            <span style="font-family: FontAwesome;">Home > <span class="text-gray-600">Shopping
                                    cart</span></span>
                            </i></a>
                    </div>
                    <div class=" flex justify-center">
                        <table class="border-collapse w-full">
                            <thead class=" border-b-2 ">
                                <tr class="box-border text-xs md:text-lg">
                                    <th class="">PRODUCT</th>
                                    <th class=" ">PRICE</th>
                                    <th class=" ">QUANTITY</th>
                                    <th class=" " >TOTAL</th>
                                </tr>
                            </thead>
                            <tbody class="text-center">
                                <tr class="border-b-2 my-4 box-border">
                                    <td class="md:flex md:justify-between items-center w-64">
                                        <div class="flex justify-center">
                                            <img src="https://picsum.photos/640/480"
                                                style="width: 90px;height: 90px; object-fit: cover;" alt="">
                                        </div>
                                        <div class="text-xs md:text-base mr-2">
                                            <h6>Chain bucket bag</h6>
                                        </div>
                                    </td>
                                    <td class="mx-28 text-red-500 font-normal text-xs md:text-base">$
                                        <span id="priceProduct">150</span>
                                    </td>
                                    <td class="mx-28 w-56">
                                        <div class="flex justify-center">
                                            <span class="cursor-pointer minus" >-</span>
                                            <input type="text" value="1" name="value" min="0" minlength="0" 
                                                disabled class="w-6 mx-4 number">
                                            <span class="cursor-pointer plus" >+</span>
                                        </div>
                                    </td>
                                    <td class="mx-28 text-red-500 font-normal text-xs md:text-base">$ <span
                                            id="quantityProduct">300</span> </td>
                                    <td>
                                        <button class=" text-xs md:text-lg"> <i class="far fa-trash-alt inline-block text-red-500"></i></button>
                                    </td>
                                </tr>
                                <tr class="border-b-2 my-4 box-border">
                                    <td class="md:flex md:justify-between items-center w-64">
                                        <div class="flex justify-center">
                                            <img src="https://picsum.photos/640/480"
                                                style="width: 90px;height: 90px; object-fit: cover;" alt="">
                                        </div>
                                        <div class="text-xs md:text-base mr-2">
                                            <h6>Chain bucket bag</h6>
                                        </div>
                                    </td>
                                    <td class="mx-28 text-red-500 font-normal text-xs md:text-base">$
                                        <span id="priceProduct">150</span>
                                    </td>
                                    <td class="mx-28 w-56">
                                        <div class="flex justify-center">
                                            <span class="cursor-pointer minus" >-</span>
                                            <input type="text" value="1" name="value" min="0" minlength="0" 
                                                disabled class="w-6 mx-4 number">
                                            <span class="cursor-pointer plus" >+</span>
                                        </div>
                                    </td>
                                    <td class="mx-28 text-red-500 font-normal text-xs md:text-base">$ <span
                                            id="quantityProduct">300</span> </td>
                                    <td>
                                        <button class=" text-xs md:text-lg"> <i class="far fa-trash-alt inline-block text-red-500"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="flex justify-center lg:justify-end">
                        <div class="mt-14 bg-gray-100 w-80">
                            <div class="p-12">
                                <h2 class="text-sm lg:text-lg font-bold">CART TOTAL</h2>
                                <div class="my-4">
                                    <div class="flex justify-between items-center">
                                        <div class="font-medium text-sm md:text-lg">
                                            <span>Subtotal</span>
                                        </div>
                                        <div class="text-red-500 font-normal text-xs md:text-base">
                                            $ <span> 750</span>
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center mt-2">
                                        <div class=" font-medium  text-sm md:text-lg">
                                            <span>Total</span>
                                        </div>
                                        <div class="text-red-500 font-normal text-xs md:text-base">
                                            $<span>750</span>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="text-center font-bold text-white rounded-lg bg-red-500 hover:text-green-300 ">
                                    <a href="#/checkout"><button class="py-1 px-3 text-xs md:text-base" id="check-Btn">
                                    PROCEED TO CHECKOUT
                                </button></a>
                                </div>
                            </div>

                        </div>
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
        </main>
    </div>
    <!-- end container -->
        `;
    },
    async afterRender() {
        var minus = $$('.minus');
        var number = $$('.number');
        var plus = $$('.plus');
        var priceProduct = $$('.priceProduct');
        var quantityProduct = $$('.quantityProduct');
        // console.log(minus);

        // quantityProduct.innerHTML = Number(priceProduct.innerHTML) * Number(number.value);
        // minus.onclick = () => {
        //     number.value = Number(number.value) - 1;
        //     if (number.value <= 1) {
        //         number.value = 1;
        //     }
        //     quantityProduct.innerHTML = Number(priceProduct.innerHTML) * Number(number.value);
        // }
        // plus.onclick = () => {
        //     number.value = Number(number.value) + 1;
        //     quantityProduct.innerHTML = Number(priceProduct.innerHTML) * Number(number.value);
        // }

    }
}
export default ShopCart;