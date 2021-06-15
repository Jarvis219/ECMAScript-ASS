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
            <td>${element.name}</td>
            <td>${element.phone}</td>
            <td>${element.address}</td>
            <td>${prices(element.sumMoney)}</td>
            <td>${element.days}</td>
            <td><select data-id="${element.id}" class="status border-2 border-green-400 border-opacity-100 rounded-lg text-green-700">
                ${statusTable()}
            </select></td>
            <td class="w-20"><button data-id="${element.id}"
            class=" text-xl bg-gradient-to-r from-green-400 to-blue-500  text-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center"><i class="far fa-eye"></i></button></td>
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
                                        <th colspan="2" class="w-32">Custom</th>
                                    </thead>
                                    <tbody>
                                       ${showListCart}
                                    </tbody>
                    </table>
            `;
    },
    async afterRender() {

        function deleteItem(element) {
            const id = element.dataset.id
            element.addEventListener('click', async () => {
                const question = confirm('Are you want to delete?');
                if (question) {
                    await cartAPI.remove(id);
                    await reRender(ListCartChild, '#list-cart');
                }
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

        const stt = $$('.status');
        // console.log(stt.length);
        if (stt.length > 3) {
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