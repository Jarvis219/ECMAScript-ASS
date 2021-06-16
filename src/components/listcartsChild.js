import {
    $$,
    reRender,
    prices
} from "../untils";

import {
    ordersAPI
} from "../api/ordersAPI";
const ListCartChild = {
    async render() {
        const {
            data
        } = await ordersAPI.list();
        const showListCart = data.map((element, index) => {

            // console.log(element.status);
            // if(element.s)
            const statusTable = () => {
                if (element.status == 'not approved yet') {
                    return /*html*/ `
                    <option value="${element.status}">${element.status}</option>
                    <option value="approved">approved</option>
                    <option value="delivered">delivered</option>
                    `;
                } else if (element.status == 'approved') {
                    return /*html*/ `
                    <option value="approved">approved</option>
                    <option value="delivered">delivered</option>
                    `;
                } else {
                    return ` <option value="delivered">delivered</option>`;
                }
            }
            return /*html*/ `
            <tr>
            <td>${index+1}</td>
            <td>${element.name}</td>
            <td>${element.phone}</td>
            <td>${element.address}</td>
            <td>${prices(element.sumMoney)}</td>
            <td>${element.days}</td>
            <td ><div class="selectorid"> <select data-id="${element.id}" class="status border-2 border-green-400 border-opacity-100 rounded-lg text-green-700">
                ${statusTable()}
            </select></div></td>
            <td class="w-20"> <button data-id="${element.id}"
            class="list-eye-btn text-xl bg-gradient-to-r from-green-400 to-blue-500  text-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center"><i class="far fa-eye"></i></button></td>
            <td class="w-20"><button
            title="edit"    class=" bg-gradient-to-r from-green-400 to-blue-500  text-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center"><a
                href="#/editcart/${element.id}"
                class="inline-block py-2 px-3"><i class="far fa-edit"></i></a></button></td> 
            <td class="w-20"><button data-id="${element.id}"
            class="list-cart-btn bg-gradient-to-r from-purple-200 via-pink-500 to-red-500 text-white rounded-lg  transition duration-300 ease-in-out transform hover:scale-105">
                <i class="far fa-trash-alt inline-block px-3 py-[13px]"></i></button></td>
            </tr>
            `;
        }).join("");
        return /*html*/ `
            <table class="table text-center" id="table-product">
        <thead class=" text-primary">
                                        <th>
                                            stt
                                        </th>
                                        <th>Name</th>
                                        <th>
                                          Phone
                                        </th>
                                        <th >
                                         Address
                                       </th>
                                        <th>
                                        Total money
                                        </th>
                                        <th>
                                        Created at
                                         </th>
                                         <th>Status</th>
                                        <th colspan="3" class="w-32">Custom</th>
                                    </thead>
                                    <tbody>
                                       ${showListCart}
                                    </tbody>
                    </table>
            `;
    },
    async afterRender() {
        const product_detail = $$('#product-detail')

        const close_product = $$('#close-product');
        const list_eye = $$('.list-eye-btn');

        close_product.onclick = () => {
            product_detail.classList.toggle('hidden');
        }
        if (list_eye.length > 1) {
            list_eye.forEach(element => {
                viewOrderDetail(element);
            })
        } else {
            viewOrderDetail(list_eye);
        }

        function viewOrderDetail(element) {
            const id = element.dataset.id
            element.addEventListener('click', async () => {
                const {
                    data
                } = await ordersAPI.read(id);
                const list_table = data.product.map((element, index) => {
                    return /*html*/ `<tr>
                        <td>${index+1}</td>
                        <td>${element.name}</td>
                        <td><img width="100" height="100" src="${element.image}"></td>
                        <td>${prices(element.price)}</td>
                        <td>${prices(element.sale)}</td>
                        <td>${element.amount}</td>
                        <td>${prices(element.totalmoney)}</td>
                    </tr>`
                });
                // console.log(list_table);
                $$('#name').innerHTML = data.name;
                $$('#email').innerHTML = data.email;
                $$('#address').innerHTML = data.address;
                $$('#phone').innerHTML = data.phone;
                $$('#note').innerHTML = data.note;
                $$('#total').innerHTML = data.sumMoney;
                $$('#times').innerHTML = data.days;

                $$('#tbody-list').innerHTML = `${list_table} 
                <tr class="font-bold text-red-400">
                             <td colspan="5" >SUM</td>
                             <td colspan="2" id="sumproduct">total</td>
                         </tr>
                `;
                $$('#sumproduct').innerHTML = data.sumMoney;
                product_detail.classList.toggle('hidden');
            })
        }

        const btns = $$('.list-cart-btn')

        if (btns.length > 1) {
            btns.forEach(element => {
                deleteItem(element)
            });
        } else {
            deleteItem(btns);
        }

        function deleteItem(element) {
            const id = element.dataset.id
            element.addEventListener('click', async () => {
                const question = confirm('Are you want to delete?');
                if (question) {
                    await ordersAPI.remove(id);
                    await reRender(ListCartChild, '#list-cart');
                }
            })
        }
        const stt = $$('.status');
        const selectorid = $$('.selectorid');
        // console.log(selectorid.length);
        if (selectorid.length !== undefined) {
            stt.forEach(element => {
                statuss(element)
            });
        } else {
            statuss(stt);
        }

        async function statuss(element) {
            const id = element.dataset.id
            const {
                data
            } = await ordersAPI.read(id);
            // console.log(data);
            element.addEventListener('change', async () => {
                const editCart = {
                    id: Number(id),
                    address: data.address,
                    email: data.email,
                    name: data.name,
                    note: data.note,
                    phone: data.phone,
                    product: data.product,
                    sumMoney: data.sumMoney,
                    status: element.value,
                    days: data.days,
                }
                // console.log(editCart);
                await ordersAPI.eidt(id, editCart);
                await reRender(ListCartChild, '#list-cart');
            })
        }

    }
}
export default ListCartChild;