import {
    axiosClient
} from "./axiosClient";

export const contactAPI = {
    add(data) {
        const url = `/contacts`;
        return axiosClient.post(url, data);
    },
    list() {
        const url = `/contacts`;
        return axiosClient.get(url);
    },
    remove(id) {
        const url = `/contacts/${id}`;
        return axiosClient.delete(url);
    },
    listCt(id) {
        const url = `/contacts/${id}`;
        return axiosClient.get(url);
    },
    update(id, data) {
        const url = `/contacts/${id}`;
        return axiosClient.put(url, data)
    }
}