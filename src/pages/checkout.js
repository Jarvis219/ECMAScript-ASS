import Header from '../components/header';
import Footer from '../components/footer';
import toast from 'toast-me';
import {
    cartAPI
} from '../api/cartAPI';
import {
    $$,
    checkLogout,
    isSetAuthen,
    prices,
    search
} from '../untils';
import {
    ordersAPI
} from '../api/ordersAPI';

const CheckOut = {
    async render() {
        if (isSetAuthen()) {
            var {
                data
            } = await cartAPI.listUser(isSetAuthen().email);

        } else {
            var data = JSON.parse(localStorage.getItem('dataCart'))
        }

        // console.log(data);
        const sumProduct =
            data.map((element, index) => {
                // console.log(element);
                // console.log(index);

                return /*html*/ `
                <div class="flex justify-between items-center text-base py-2">
                                    <div class="w-[190px] overflow-hidden">
                                    ${index+1}   <span>. ${element.name}</span>
                                    </div>
                                    <div class="text-red-500">
                                        <span class="priceProduct" data-idp = "${element.productId}" data-idname ="${element.name}" data-idprice = "${element.price}" 
                                       data-idsale = "${element.sale}" data-idsize ="${element.size}"  data-idimage="${element.image}" 
                                        > ${prices(element.totalmoney)}</span>
                                    </div>
                                </div>
                `;
            }).join("");

        // console.log(sumProduct); 
        return /* html*/ `
            ${await Header.render()}
            <div>
        <main class="container lg:mx-auto lg:px-16 lg:pt-24 lg:mb-12">
            <div>
                <div class="mt-12 ">
                    <a href="./index.html"><span><i class="fas fa-home"></i></span>
                        <span style="font-family: FontAwesome;">Home > <span class="text-gray-600">Shopping
                                cart</span></span>
                        </i></a>
                </div>
            </div>
            <div class="z-50 my-custom-class"></div>
            <div>
                <div class=" grid lg:grid-cols-12  gap-2">
                    <div class="lg:col-span-8">
                        <h3 class="uppercase font-semibold text-xl">BILLING DETAIL</h3>
                        <hr class="my-4">
                        <div>
                            <div>
                                <form id="check-out">
                                    <div class=" mb-3">
                                      
                                            <label for="#"> Name <span class="text-red-400">*</span> </label><br>
                                            <input type="text" name="name" id="name"
                                                class="check-validate border w-full py-2 rounded-sm  pl-4" >
                                       
                                    </div>
                                    <div class="mb-3">
                                        <label for="#">Address <span class="text-red-400">*</span></label><br>
                                        <input type="text" name="address" id="address" class=" check-validate border w-full py-2 rounded-sm  pl-4"
                                            >
                                    </div>
                                    <div class="mb-3">
                                        <label for="#">Phone <span class="text-red-400">*</span></label><br>
                                        <input type="number" id="phone" name="phone" class="check-validate border w-full py-2 rounded-sm  pl-4" >
                                    </div>
                                    <div class="mb-3">
                                        <label for="#">Email </label><br>
                                        <input type="email" id="email" name ="email" class=" border w-full py-2 rounded-sm  pl-4">
                                    </div>
                                    <div class="mb-3">
                                        <label for="#">Note </label><br>
                                        <textarea  id="note" rows="9"
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
    async afterRender() {

        if (isSetAuthen()) {
            var {
                data
            } = await cartAPI.listUser(isSetAuthen().email);
        } else {
            var data = JSON.parse(localStorage.getItem('dataCart'))
        }

        checkLogout();
        search();
        var priceProduct = 0;
        if ($$('.priceProduct').length > 1) {
            $$('.priceProduct').forEach(element => {
                // console.log(Number(element.innerHTML.replace(/\D/g, '')));
                priceProduct += Number(element.innerHTML.replace(/\D/g, ''))
            })
        } else {
            priceProduct = Number($$('.priceProduct').innerHTML.replace(/\D/g, ''));
        }


        // console.log(priceProduct);
        var total = $$('#total');
        total.innerHTML = prices(Number($$('#subTotal').innerHTML) + priceProduct);
        var day = moment(new Date()).format('DD-MM-YYYY');



        $$('#check-out').addEventListener('submit', (e) => {
            e.preventDefault();
            var sumCheck = 0;
            $$('.check-validate').forEach(element => {
                if (element.value == "") {
                    element.style.border = "2px solid #e84e4e"
                    element.placeholder = "Fill in this field";
                    sumCheck += sumCheck + 1;
                } else {
                    element.style.border = "thick solid #FFFFFF"
                }
            });
            if (sumCheck === 0) {
                const checkOut = {
                    id: Math.round(Math.random() * 700000),
                    user: isSetAuthen().email,
                    name: $$('input[name="name"]').value,
                    email: $$('input[name="email"]').value,
                    phone: $$('input[name="phone"]').value,
                    address: $$('input[name="address"]').value,
                    note: $$('#note').value,
                    sumMoney: total.innerHTML,
                    product: data,
                    days: day,
                    status: "not approved yet",
                }
                if (ordersAPI.add(checkOut)) {
                    if (isSetAuthen()) {
                        data.forEach(async (element) => {
                            if (element.user == isSetAuthen().email) {
                                await cartAPI.remove(element.id);
                            }
                        })
                    } else {
                        localStorage.removeItem('dataCart')
                    }

                    toast(
                        'Order success', {
                            duration: 3000
                        }, {
                            // label: 'Confirm',
                            action: () => alert('Fill in this field!'),
                            class: 'my-custom-class', // optional, CSS class name for action button
                        },
                    );
                    setTimeout(() => {
                        window.location.hash = `/order`;
                    }, 3000)


                }
            } else {
                toast(
                    'Fill in this field!!!', {
                        duration: 3000
                    }, {
                        // label: 'Confirm',
                        action: () => alert('Fill in this field!'),
                        class: 'my-custom-class', // optional, CSS class name for action button
                    },
                );
            }


        })

    }
}
export default CheckOut;