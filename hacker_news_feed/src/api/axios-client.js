import axios from 'axios';

const BASE_URL = 'https://hn.algolia.com/api/v1';

const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
};

const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: headers,
});

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const res = error.response;
        if (res.status === 401) {
            window.location.href = `${BASE_URL}/login`;
        }
        console.error(
            'Looks like there was a problem. Status Code:' + res.status
        );
        return Promise.reject(error);
    }
);

export default axiosClient;
