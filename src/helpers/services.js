import axios from 'axios'
import firebase from 'firebase'

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

export const fieldValueCreator = (data, mode) => {
    let fieldValueData = new Object()
    Object.entries(data).forEach(object => {
        fieldValueData[object[0]] = firebase.firestore.FieldValue[mode](fieldValueData[1]) 
    })

    return fieldValueData
}