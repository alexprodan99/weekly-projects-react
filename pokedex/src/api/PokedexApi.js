import axios from "axios";
import { HOST } from "../common/api/Host";

const BASE_ENDPOINT = HOST.backend_api;


export const getPokemonDetails = (filter) => {
    return axios.get(`${BASE_ENDPOINT}/pokemon/${filter}`);
};

export const getPokemons = () => {
    return axios.get(`${BASE_ENDPOINT}/pokemon`);
}