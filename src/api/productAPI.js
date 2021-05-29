import{axiosClient} from './axiosClient';

export const productAPI={
    
    list(){
        const url = `/products`;
        return axiosClient.get(url);
    },
    read(id){
        const url = `products/${id}`;
        return axiosClient.get(url);
    },
    remove(id){
        const url = `products/${id}`;
        return axiosClient.delete(url);
    }
}
export default productAPI;