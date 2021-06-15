import {
    axiosClient
} from "./axiosClient";
export const ordersAPI = {
    list() {
        const url = `orders`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = `orders`;
        return axiosClient.post(url, data)
    },
    eidt(id, data) {
        const url = `orders/${id}`;
        return axiosClient.put(url, data);
    },
    remove(id) {
        const url = `orders/${id}`;
        return axiosClient.delete(url)
    },
    read(id) {
        const url = `orders/${id}`;
        return axiosClient.get(url);
    }


}