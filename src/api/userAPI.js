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
    list() {
        const url = `users`;
        return axiosClient.get(url)
    }
}