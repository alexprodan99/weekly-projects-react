import axios from "axios";
import { HOST } from "../common/api/Host";

const BASE_ENDPOINT = HOST.backend_api;


export const getPokemonByName = (name) => {
    return axios.get(`${BASE_ENDPOINT}/pokemon/${name}`);
};

