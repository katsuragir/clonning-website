import axios from 'axios';

export async function sendEmail(data) {
    const response = await axios.post(`https://express-cake.herokuapp.com/crypto/send`, data).catch(err => err.response);
    if (response.error === 1) {
        return response;
    } else {
        const axiosResponse = response.data;
        return axiosResponse;
    }
}