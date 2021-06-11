import Header from '../components/header';
import Footer from '../components/footer';
import {
    cartAPI
} from '../api/cartAPI';
import {
    $$,
    checkLogout,
    isSetAuthen,
    search
} from '../untils';
const ShopCart = {
    async render() {
        if (isSetAuthen()) {
            var {
                data
            } = await cartAPI.listUser(isSetAuthen().email);
        } else {
            var {
                data
            } = await cartAPI.list()
        }
        // console.log(data);
        const showShopCarts = data.map(element => {
            const trashCart = () => {
                if (element.status == 'not approved yet') {
                    return `<button data-id="${element.id}"
                    class="list-cart-btn bg-gradient-to-r from-purple-200 via-pink-500 to-red-500 text-white rounded-lg  transition duration-300 ease-in-out transform hover:scale-105">
                        <i class="far fa-trash-alt inline-block px-3 py-[13px]"></i></button>`;
                } else {
                    return '';
                }
            }
            return /*html*/ `
            <tr class="border-b-2 my-4 box-border cor-${element.id}">
            <td class="md:flex md:justify-between items-center w-64">
                <div class="flex justify-center">
                    <img src="${element.image}"
                        style="width: 150px;height: 100px; object-fit: cover;" alt="">
                </div>
                <div class="text-xs md:text-base mr-2">
                    <h6 >${element.name}</h6>
                </div>
            </td>
            <td class="mx-28 text-red-500 font-normal text-xs md:text-base">$
                <span class="priceProduct">${element.price}</span>
            </td>
            <td class="mx-28 w-56">
                <div class="flex justify-center">
                <input type="number" data-id="${element.id}" class="change-number w-16  pl-3" min="1" value="${element.amount}" id="">
                </div>
            </td>
            <td class="mx-28 text-red-500 font-normal text-xs md:text-base">$ <span
                    class="quantityProduct">${element.totalmoney}</span> </td>
                    <td  class="mx-28 w-56">
                    ${element.status}
                    </td>
            <td>
            ${trashCart()}
            </td>
        </tr>
            `;
        }).join("");


        return /*html */ `
        ${await Header.render()}
        <div  id="scart">
        <main class="pt-24">
            <div>
                <div class="container mx-auto px-16 pt-4">
                    <div class="my-8 ">
                        <a href="./index.html"><span><i class="fas fa-home"></i></span>
                            <span style="font-family: FontAwesome;">Home > <span class="text-gray-600">Shopping
                                    cart</span></span>
                            </i></a>
                    </div>
                    <div class="text-center flex justify-center" id="list-cart">
                        <table class="border-collapse w-full" >
                            <thead class=" border-b-2 ">
                                <tr class="box-border  text-xs md:text-lg ">
                                    <th class="">PRODUCT</th>
                                    <th class=" ">PRICE</th>
                                    <th class=" ">QUANTITY</th>
                                   
                                    <th  >TOTAL</th>
                                    <th class=" ">STATUS</th>
                                </tr>
                            </thead>
                            <tbody class="">
                                ${showShopCarts}
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
                                            $ <span class="subtotal">0</span>
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center mt-2">
                                        <div class=" font-medium  text-sm md:text-lg">
                                            <span>Total</span>
                                        </div>
                                        <div class="text-red-500 font-normal text-xs md:text-base">
                                            $<span class="totals">750</span>
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
        checkLogout();
        search();
        const changeNumber = $$('.change-number')
        const total = $$('.quantityProduct');
        const priceProduct = $$('.priceProduct');


        // function sumTotal() {
        //     changeNumber.forEach((element, index) => {
        //         element.addEventListener('change', () => {
        //             total[index].innerHTML = Number(priceProduct[index].innerHTML) * Number(changeNumber[index].value);
        //         })
        //     })
        // }
        // if (changeNumber.length > 1) {
        //     sumTotal();
        // } else {
        //     total.innerHTML = Number(priceProduct.innerHTML) * Number(changeNumber.value);
        // }

        // function reloadTotal() {
        //     changeNumber.forEach((element, index) => {
        //         total[index].innerHTML = Number(priceProduct[index].innerHTML) * Number(changeNumber[index].value);
        //     })
        // }
        // reloadTotal();
        // for (let i = 0; i < changeNumber.length; i++) {
        //     changeNumber[i].addEventListener('change', () => {
        //         total[i].innerHTML = Number(priceProduct[i].innerHTML) * Number(changeNumber[i].value);
        //     })
        // }

        // function totals() {
        //     var quantityProduct = $$('.quantityProduct');
        //     var sum = 0;
        //     quantityProduct.forEach(element => {
        //         // console.log(element.innerHTML);
        //         sum += Number(element.innerHTML);
        //     });
        //     $$('.totals').innerHTML = Number(sum) + Number($$('.subtotal').innerHTML);
        // }
        // totals();

        const btns = $$('.list-cart-btn')

        function deleteItem(element) {
            const id = element.dataset.id
            element.addEventListener('click', async () => {
                const question = confirm('Are you want to delete?');
                if (question) {
                    // console.log(id);
                    await cartAPI.remove(id);
                    var removeItem = $$(`.cor-${id}`);
                    if (removeItem) {
                        removeItem.remove();
                    }
                }
            })
        }
        if (btns.length > 1) {
            btns.forEach(element => {
                deleteItem(element)
            });
        } else {
            deleteItem(btns);
        }
    }
}
export default ShopCart;