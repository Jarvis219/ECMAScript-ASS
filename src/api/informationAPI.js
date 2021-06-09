import {
    axiosClient
} from "./axiosClient";

export const informationAPI = {
    list() {
        const url = `informations`;
        return axiosClient.get(url);
    },
    listedit(id) {
        const url = `informations/${id}`;
        return axiosClient.get(url);
    },
    listcontact() {
        const url = `informations?_limit=1`;
        return axiosClient.get(url);
    },
    add(data) {
        const url = `informations`;
        return axiosClient.post(url, data);
    },
    edit(id, data) {
        const url = `informations/${id}`;
        return axiosClient.put(url, data);
    },
    remove(id) {
        const url = `informations/${id}`;
        return axiosClient.delete(url);
    }

}