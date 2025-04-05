import axios from 'axios';

const API_URL = 'http://localhost:8080/ECommerceWebsite';

const registerUser = (userData) => {
    return axios.post(`${API_URL}/createUser`, userData);
};

const getUser = () => {
    return axios.post(`${API_URL}/getUser`,getUser);
};

export { registerUser,getUser };