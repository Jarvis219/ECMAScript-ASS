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
        // console.log(product);
        const result = product.map((element, index) => {
            return /*html */ `
            <tr>
            <td>${index+1}</td>
            <td>${element.name}</td>
            <td>${element.category.name}</td>
            <td>$${element.price+`.00`}</td>
            <td>$${element.sale+`.00`}</td>
            <td>${element.size}</td>
            <td>${element.classify}</td>
            <td ><img width="100" height="100" src="${element.imageIntro}"></td>
            <td class="w-20"><a  href="http://localhost:8080/#/products/${element.id}" target="_blank"> <button data-id="${element.id}"
            title="view" class=" text-lg bg-gradient-to-r from-green-400 to-blue-500  text-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center"><i class="far fa-eye"></i></button></a></td>
            <td class="w-20"><button
            title="edit"    class=" bg-gradient-to-r from-green-400 to-blue-500  text-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center"><a
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
                                            stt
                                        </th>
                                        <th>Name</th>
                                        <th>
                                           Category
                                        </th>
                                        <th>
                                        Price
                                        </th>
                                        <th>
                                        Sale
                                         </th>
                                         <th>
                                         size
                                         </th>
                                         <th>
                                         classify
                                         </th>
                                         <th >
                                         imagesIntro
                                       </th>
                                      
                                        <th colspan="3" class="w-32">Custom</th>
                                    </thead>
                                    <tbody>
                                        ${result}
                                    </tbody>
    </table>
        `;
    },

    async afterRender() {
        const btns = $$('.list-product-btn')
        if (btns.length > 1) {
            btns.forEach(element => {
                deleteItem(element)
            });
        } else {
            deleteItem(btns);
        }

        function deleteItem(element) {
            const id = element.dataset.id;
            element.addEventListener('click', async () => {
                const question = confirm('Are you want to delete?');
                if (question) {
                    await productAPI.remove(id);
                    await reRender(ListProductchild, '#table-product');
                }
            });
        }
    }
}
export default ListProductchild;