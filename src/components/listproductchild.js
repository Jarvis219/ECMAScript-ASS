import {
    $$,
    reRender
} from '../untils';
import productAPI from "../api/productApi";
const ListProductchild = {
    async render() {
        const {
            data: product
        } = await productAPI.list();
        const result = product.map((element, index) => {
            return /*html */ `
            <tr>
            <td>${element.id}</td>
            <td>${element.name}</td>
            <td>${element.categoryId}</td>
            <td>${element.content}</td>
            <td>${element.price}</td>
            <td>${element.sale}</td>
            <td>${element.introduce}</td>
            <td class="w-[200px] overflow-auto">${element.images}</td>
            <td>${element.size}</td>
            <td>${element.classify}</td>
            <td class="w-20"><button
            class=" bg-gradient-to-r from-green-400 to-blue-500  text-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center"><a
                href="#/editproduct/${element.id}"
                class="inline-block py-2 px-3"><i class="far fa-edit"></i></a></button></td>
    <td class="w-20"><button data-id="${element.id}"
            class="list-product-btn bg-gradient-to-r from-purple-200 via-pink-500 to-red-500 text-white rounded-lg  transition duration-300 ease-in-out transform hover:scale-105">
                <i class="far fa-trash-alt inline-block px-3 py-[13px]"></i></button>
    </td>
        </tr>
            `;
        }).join("");
        return /*html */ `
            
        <table class="table text-center" id="table-product">
        <thead class=" text-primary">
                                        <th>
                                            Id
                                        </th>
                                        <th>Name</th>
                                        <th>
                                           CategoryId
                                        </th>
                                        <th>
                                            Content
                                        </th>
                                        <th>
                                        Price
                                        </th>
                                        <th>
                                        Sale
                                         </th>
                                        <th>
                                        introduce
                                        </th>
                                          <th >
                                           images
                                         </th>
                                        <th>
                                        size
                                        </th>
                                        <th>
                                        classify
                                        </th>
                                    
                                        <td colspan="2" class="w-32">Tùy chỉnh</td>
                                    </thead>
                                    <tbody>
                                        ${result}
                                    </tbody>
    </table>
        `;
    },

    async afterRender() {
        const btns = $$('.list-product-btn')
        btns.forEach(element => {
            const id = element.dataset.id;
            element.addEventListener('click', async () => {
                const question = confirm('Are you want to delete?');
                if (question) {
                    await productAPI.remove(id);
                    await reRender(ListProductchild, '#table-product');
                }
            });
        });
    }
}
export default ListProductchild;