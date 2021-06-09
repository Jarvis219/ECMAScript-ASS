import {
    $$,
    reRender
} from "../untils";
import {
    UserAPI
} from "../api/userAPI";
const ListUsersChild = {
    async render() {

        // const respon = await fetch("http://localhost:3001/users");
        // const users = await respon.json();
        const {
            data: users
        } = await UserAPI.list();
        // console.log(users);
        const userTable = users.map((element, index) => {
            var permission;
            if (element.id < 2) {
                permission = "Admin";
            } else {
                permission = "Customer";
            }
            return /*html*/ `
            <tr class="col-${element.id}">
                <td>${index+1}</td>
                <td>${element.email}</td>
                <td>${element.name}</td>
                <td>${element.password}</td>
                <td>${permission}</td>
                <td class="w-20"><button
                class=" bg-gradient-to-r from-green-400 to-blue-500  text-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center"><a
                    href="#/edituser/${element.id}"
                    class="inline-block py-2 px-3"><i class="far fa-edit"></i></a></button></td>
                <td class="w-20"><button data-id="${element.id}"
                class="list-user-btn bg-gradient-to-r from-purple-200 via-pink-500 to-red-500 text-white rounded-lg  transition duration-300 ease-in-out transform hover:scale-105">
                    <i class="far fa-trash-alt inline-block px-3 py-[13px]"></i></button>
                </td>
            </tr>
            `;
        }).join("");


        return /*html */ `
        <table class="table text-center" id="table-user">
        <thead class=" text-primary">
                                        <th>
                                            stt
                                        </th>
                                        <th>Email</th>
                                        <th>
                                           Name 
                                        </th>
                                        <th >
                                         Password
                                       </th>
                                         <th>Permission</th>
                                        <th colspan="2" class="w-32">Custom</th>
                                    </thead>
                                    <tbody>
                                      ${userTable}
                                    </tbody>
                    </table>
        
        `;
    },
    async afterRender() {
        var btns = $$('.list-user-btn');
        // console.log(btns);
        btns.forEach(element => {
            const id = element.dataset.id;
            element.addEventListener('click', async () => {
                const question = confirm("Are you want to delete?");
                if (question) {
                    await UserAPI.remove(id);
                    await reRender(ListUsersChild, '#table-user')
                }
                // await UserAPI.remove(id);
                // if (question) {
                //     var remoItem = $$(`.col-${id}`);
                //     if (remoItem) {
                //         remoItem.remove();
                //     }
                // }
            });
        });

    }


}
export default ListUsersChild;