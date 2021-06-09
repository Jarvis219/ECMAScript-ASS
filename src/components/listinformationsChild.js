import {
    informationAPI
} from "../api/informationAPI";
import {
    $$,
    reRender
} from "../untils";

export const ListInformationChild = {
    async render() {
        const {
            data: infor
        } = await informationAPI.list();
        const inforTable = infor.map(element => {
            return /*html*/ `
            <tr class="col-${element.id}">
                <td>${element.id}</td>
                <td ><img width="100" height="100" src="${element.logo}"></td>
                <td>${element.numberPhone}</td>
                <td>${element.email}</td>
                <td>${element.address}</td>
                <td>${element.slogan}</td>
                <td>${element.linkMap}</td>
                <td class="w-20"><button
                class=" bg-gradient-to-r from-green-400 to-blue-500  text-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center"><a
                    href="#/editinformation/${element.id}"
                    class="inline-block py-2 px-3"><i class="far fa-edit"></i></a></button></td>
                <td class="w-20"><button data-id="${element.id}"
                class="list-infor-btn bg-gradient-to-r from-purple-200 via-pink-500 to-red-500 text-white rounded-lg  transition duration-300 ease-in-out transform hover:scale-105">
                    <i class="far fa-trash-alt inline-block px-3 py-[13px]"></i></button>
                </td>
            </tr>
            `;

        }).join("");
        return /*html*/ `
            <table class="table text-center" id="table-informations">
                    <thead class=" text-primary">
                                <th>
                                Mã thông tin
                            </th>
                            <th>
                                Logo
                            </th>
                            <th>
                                Số điện thoại
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Địa chỉ
                            </th>
                            <th>Khẩu hiệu</th>
                            <th>link bản đồ</th>
                            <th colspan="2">Other</th>
                    </thead>
                    <tbody>
                        ${inforTable}
                    </tbody>
            </table> 
            `;
    },
    async afterRender() {
        const btns = $$('.list-infor-btn');
        btns.forEach(element => {
            const id = element.dataset.id;
            element.addEventListener('click', async () => {
                const question = confirm('Are you want to delete?');
                if (question) {
                    await informationAPI.remove(id);
                    await reRender(ListInformationChild, '#table-informations');
                }

                // const remoInfor = $$(`.col-${id}`);
                // if (remoInfor) {
                //     remoInfor.remove();
                // }

            })
        });

    }

}