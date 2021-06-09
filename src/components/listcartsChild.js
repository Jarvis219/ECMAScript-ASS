import {
    $$,
    reRender,
    prices
} from "../untils";

import {
    cartAPI
} from "../api/cartAPI";
const ListCartChild = {
    async render() {
        const {
            data
        } = await cartAPI.list();
        const showListCart = data.map((element, index) => {
            var status;
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
            <td>${element.user}</td>
            <td>${element.name}</td>
            <td><img width="100" height="100" src="${element.image}"></td>
            <td>${"$ "+prices(Number(element.price)).replace('VND','')}</td>
            <td>${element.amount}</td>
            <td>${"$ "+prices(Number(element.totalmoney)).replace('VND','')}</td>
            <td>${element.size}</td>
            <td>${element.days}</td>
            <td><select data-id="${element.id}" class="status border-2 border-green-400 border-opacity-100 rounded-lg text-green-700">
                ${statusTable()}
            </select></td>
            <td class="w-20"><button
            class=" bg-gradient-to-r from-green-400 to-blue-500  text-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center"><a
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
                                        <th>User</th>
                                        <th>
                                           Name Product
                                        </th>
                                        <th >
                                         Images
                                       </th>
                                        <th>
                                        Price
                                        </th>
                                        <th>
                                        Amount
                                         </th>
                                         <th>
                                         Total
                                         </th>
                                         <th>
                                         Size
                                         </th>
                                         <th>Booking date</th>
                                         <th>Status</th>
                                        <th colspan="2" class="w-32">Custom</th>
                                    </thead>
                                    <tbody>
                                       ${showListCart}
                                    </tbody>
                    </table>
            `;
    },
    async afterRender() {



        const btns = $$('.list-cart-btn')
        // console.log(btns);

        btns.forEach(element => {
            const id = element.dataset.id
            element.addEventListener('click', async () => {
                const question = confirm('Are you want to delete?');
                if (question) {
                    await cartAPI.remove(id);
                    await reRender(ListCartChild, '#list-cart');
                }
            })
        });

        const stt = $$('.status');
        stt.forEach(async (element) => {
            const id = element.dataset.id
            const {
                data
            } = await cartAPI.read(id);
            // console.log(data);
            const {
                data: sizes
            } = await cartAPI.listCartSize(data.productId);
            // console.log(sizes);
            element.addEventListener('change', async () => {
                const editCart = {
                    id: id,
                    productId: sizes.id,
                    user: data.user,
                    name: data.name,
                    image: data.image,
                    price: data.price,
                    sale: data.sale,
                    size: data.size,
                    totalmoney: data.totalmoney,
                    amount: data.amount,
                    status: element.value,
                    days: data.days,
                }
                console.log(editCart);
                await cartAPI.edit(id, editCart);
                await reRender(ListCartChild, '#list-cart');
            })
        });
    }
}
export default ListCartChild;