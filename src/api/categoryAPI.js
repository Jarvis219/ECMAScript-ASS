import {
    axiosClient
} from "./axiosClient";

export const categoryAPI = {
    list() {
        const url = `categories`;
        return axiosClient.get(url);
    },
    read(id_cate, id) {
        const url = `products?categoryID=${id_cate}&id_ne=${id}&_limit=4`;
        return axiosClient.get(url);
    },
    edit(id_cate) {
        const url = `categories/${id_cate}`;
        return axiosClient.get(url);
    },
    editProduct(id) {
        const url = `categories?id_ne=${id}`;
        return axiosClient.get(url);
    },
    add(category) {
        const url = `categories`;
        return axiosClient.post(url, category);
    },
    remove(id) {
        const url = `categories/${id}`;
        return axiosClient.delete(url)
    },
    update(id, data) {
        const url = `categories/${id}`;
        return axiosClient.put(url, data);
    }


}
export default categoryAPI;