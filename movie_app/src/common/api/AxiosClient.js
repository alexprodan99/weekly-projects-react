import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const ACCESS_TOKEN =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYThkZDVmYTUxZjdmODg3ZTEwMzc2OGI1N2ZmMDY0MyIsInN1YiI6IjYxNDViNGNlNTVjOTI2MDA5MTFhNWQ4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.htBdM9_PJ8PATvl__HJgvP29XEF2Ir6dHNNLhyi7Ry8';

const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
        Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
});

axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const res = error.response;
        if (res.status == 401) {
            window.location.href = `${BASE_URL}/login`;
        }

        console.error(`${res.status}- ${error.message}`);
        return Promise.reject(error);
    }
);

export default axiosClient;
