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
            const Permission = () => {
                if (element.permission == "Admin") {
                    return `
                    <label>Admin <input type="radio" data-id="${element.id}" class="permission" value="Admin"   name="permission"
                     checked> </label>
                    <label>Member  <input type="radio"  data-id="${element.id}"  class="permission" value="Member"  name="permission"
                    > </label>
                    `;
                } else {
                    return `
                    <label>Admin <input type="radio"  data-id="${element.id}"   class="permission" value="Admin"   name="permission"
                     > </label>
                    <label>Member  <input type="radio"  data-id="${element.id}"  class="permission" value="Member"  name="permission"
                    checked> </label>
                    `;
                }
            }

            return /*html*/ `
            <tr class="col-${element.id}">
                <td>${index+1}</td>
                <td>${element.email}</td>
                <td>${element.name}</td>
                <td><form>
                    ${Permission()}
            </form></td>
                <td><button data-id="${element.id}"
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
                                         <th>Permission</th>
                                        <th colspan="" class="w-32">Custom</th>
                                    </thead>
                                    <tbody>
                                      ${userTable}
                                    </tbody>
                    </table>
        
        `;
    },
    async afterRender() {
        var btns = $$('.list-user-btn');

        function deleteItem(element) {
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
        }
        if (btns.length > 1) {
            btns.forEach(element => {
                deleteItem(element)
            });
        } else {
            deleteItem(btns);
        }


        var permission = $$('.permission');
        permission.forEach(element => {
            const id = element.dataset.id;

            element.addEventListener('change', async () => {
                const {
                    data
                } = await UserAPI.listedit(id);
                const dataUser = {
                    id: Number(id),
                    email: data.email,
                    name: data.name,
                    password: data.password,
                    permission: element.value,
                }
                await UserAPI.update(id, dataUser);
                reRender(ListUsersChild, '#table-user');
            })
        })
    }



}
export default ListUsersChild;