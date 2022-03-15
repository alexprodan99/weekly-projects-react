import axios from 'axios'

const BASE_URL = 'https://covid2019-api.herokuapp.com/v2'

const _toStringParams = (params) => {
    let paramsString = ''
    for (const paramKey in Object.keys(params)) {
        paramsString += params[paramKey] + '&'
    }
    paramsString = paramsString.slice(0, -1)

    return paramsString
}

const getRequest = (endpoint, params = {}) => {
    const paramsString = _toStringParams(params)

    if (paramsString) {
        return axios.get(`${BASE_URL}/${endpoint}?${paramsString}`)
    }
    return axios.get(`${BASE_URL}/${endpoint}`)
}

const postRequest = (endpoint, data) => {
    return axios.post(`${BASE_URL}/${endpoint}`, data)
}

const putRequest = (endpoint, data) => {
    return axios.put(`${BASE_URL}/${endpoint}`, data)
}

const deleteRequest = (endpoint) => {
    return axios.delete(endpoint)
}

export { BASE_URL, getRequest, postRequest, putRequest, deleteRequest }
