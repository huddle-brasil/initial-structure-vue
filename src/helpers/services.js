import axios from 'axios'

export const axiosInstanceCreator = (url) => {
    const axiosInstance = axios.create({
        baseURL : url
    })

    return axiosInstance
}

export const queryStringCreator = (parameters) => {
    const keys = Object.keys(parameters)
    let queryString = '';

    keys.forEach((key, index) => {
        queryString += `${key}=${parameters[key]}`;
        if (index < keys.length - 1) queryString = `${queryString}&`
    })
    return queryString
}