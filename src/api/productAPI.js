import {
    axiosClient
} from './axiosClient';

export const productAPI = {

    list() {
        const url = `/products?_expand=category`;
        return axiosClient.get(url);
    },
    read(id) {
        const url = `products/${id}?_expand=category`;
        return axiosClient.get(url);
    },
    remove(id) {
        const url = `products/${id}`;
        return axiosClient.delete(url);
    },
    add(product) {
        const url = `/products`;
        return axiosClient.post(url, product);
    },
    update(id, data) {
        const url = `/products/${id}`;
        return axiosClient.put(url, data);
    },
    listProductCate(id) {
        const url = `/products?classify=${id}`;
        return axiosClient.get(url);
    },
    listSearch(data) {
        // const url = `/products/?name_like=${data}`;
        const url = `/products?q=${data}`
        return axiosClient.get(url);
    }
}
export default productAPI;