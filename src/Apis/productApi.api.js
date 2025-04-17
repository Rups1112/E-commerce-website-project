import axios from 'axios';


const API_URL = 'http://localhost:8080/ECommerceWebsite/Product';

const addProduct = (productData) => {
    return axios.post(`${API_URL}/addProduct`, productData);
};
const viewProduct=()=>{
    return axios.get(`${API_URL}/getAllProducts`,viewProduct);
}
const updateProduct=(productData)=>{
    return axios.put(`${API_URL}/updateProduct`,productData);
}
const deleteProduct=(productData)=>{
    return axios.delete(`${API_URL}/deleteProduct`,productData);
}
export {addProduct,viewProduct,updateProduct,deleteProduct};