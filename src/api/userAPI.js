import {
    axiosClient
} from "./axiosClient";

export const UserAPI = {
    signup(data) {
        const url = `signup`;
        return axiosClient.post(url, data);
    },
    signin(data) {
        const url = `signin`;
        return axiosClient.post(url, data);
    },
    update(id, data) {
        const url = `users/${id}`;
        return axiosClient.put(url, data)
    },
    listedit(id) {
        const url = `users/${id}`;
        return axiosClient.get(url);
    },
    list() {
        const url = `users`;
        return axiosClient.get(url);
    },
    remove(id) {
        const url = `users/${id}`;
        return axiosClient.delete(url);
    }
}