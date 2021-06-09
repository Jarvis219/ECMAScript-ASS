import Header from '../components/header';
import Footer from '../components/footer';
import {
    cartAPI
} from '../api/cartAPI';
import {
    $$,
    checkLogout,
    isSetAuthen,
    prices
} from '../untils';

const CheckOut = {
    async render() {
        const {
            data
        } = await cartAPI.listUser(isSetAuthen().email);
        // console.log(data);
        const sumProduct =
            data.map((element, index) => {
                // console.log(element.name);
                // console.log(index);

                return /*html*/ `
                <div class="flex justify-between items-center text-base py-2">
                                    <div class="w-[200px] overflow-hidden">
                                    ${index+1}   <span>. ${element.name}</span>
                                    </div>
                                    <div class="text-red-500">
                                       $ <span class="priceProduct"> ${prices(element.price).replace('VND','')}</span>
                                    </div>
                                </div>
                `;
            }).join("");

        // console.log(sumProduct); 
        return /* html*/ `
            ${Header.render()}
            <div>
        <main class="container lg:mx-auto lg:px-16 lg:pt-24 lg:mb-12">
            <div>
                <div class="my-8 ">
                    <a href="./index.html"><span><i class="fas fa-home"></i></span>
                        <span style="font-family: FontAwesome;">Home > <span class="text-gray-600">Shopping
                                cart</span></span>
                        </i></a>
                </div>
            </div>
            <div>
                <div class=" grid lg:grid-cols-12  gap-2">
                    <div class="lg:col-span-8">
                        <h3 class="uppercase font-semibold text-xl">BILLING DETAIL</h3>
                        <hr class="my-4">
                        <div>
                            <div>
                                <form id="check-out">
                                    <div class="flex justify-between items-center gap-2 mb-3">
                                        <div>
                                            <label for="#">First Name <span class="text-red-400">*</span> </label><br>
                                            <input type="text" name="" id="firstName"
                                                class="border w-64 xl:w-80 py-2 rounded-sm pl-4" required>
                                        </div>
                                        <div>
                                            <label for="#">Last Name <span class="text-red-400">*</span> </label><br>
                                            <input type="text" name="" id="lastName"
                                                class="border w-64 xl:w-80 py-2 rounded-sm  pl-4" required>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="#">Address <span class="text-red-400">*</span></label><br>
                                        <input type="text" name="" id="address" class="border w-full py-2 rounded-sm  pl-4"
                                            required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="#">Phone <span class="text-red-400">*</span></label><br>
                                        <input type="number" id="phone" class="border w-full py-2 rounded-sm  pl-4" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="#">Email </label><br>
                                        <input type="email" id="email" class="border w-full py-2 rounded-sm  pl-4">
                                    </div>
                                    <div class="mb-3">
                                        <label for="#">Note </label><br>
                                        <textarea name="" id="note" rows="9"
                                            class="border rounded-sm w-full  p-4 "></textarea>
                                    </div>
                                    <div
                                        class="bg-red-400 text-white hover:text-green-400 rounded-md text-center mt-4 ">
                                        <button  class="my-3 uppercase  font-semibold">PLACE ODER</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-4 lg:ml-8 bg-gray-100">
                        <div class="p-8">
                            <h3 class="uppercase font-semibold text-xl">YOUR ORDER</h3>
                            <hr class="my-3">
                            <div>
                                <div class="font-medium flex justify-between items-center text-lg">
                                    <div>
                                        <h4>Product</h4>
                                    </div>
                                    <div>
                                        <h4> Total</h4>
                                    </div>
                                </div>
                                ${sumProduct}
                            </div>
                            <hr class="my-3">
                            <div>
                                <div class="font-medium flex justify-between items-center text-lg">
                                    <div>
                                        <span>Subtotal</span>
                                    </div>
                                    <div class="text-red-500">
                                        <span>$</span><span id="subTotal"> 00</span>
                                    </div>
                                </div>
                                <div class="font-medium flex justify-between items-center text-lg my-2">
                                    <div>
                                        <span>Total</span>
                                    </div>
                                    <div class="text-red-500">
                                        <span>$</span><span id="total">  000 </span>
                                    </div>
                                </div>
                            </div>
                            <hr class="my-3">
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
            ${Footer.render()}
        `;
    },
    afterRender() {
        checkLogout();
        var priceProduct = 0;
        $$('.priceProduct').forEach(element => {
            priceProduct += Number(element.innerHTML)
        })
        // console.log(priceProduct);
        var total = $$('#total');
        total.innerHTML = Number($$('#subTotal').innerHTML) + priceProduct;

        $$('#check-out').addEventListener('click', (e) => {
            e.preventDefault();
            const checkOut = {


            }
        })


    }
}
export default CheckOut;