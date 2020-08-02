//service to update the backend results
import axios from 'axios'
//const baseUrl = 'http://localhost:3001/api/persons'
//const baseUrl = 'https://stark-spire-17132.herokuapp.com/api/persons' //connnected to exercises part the backend
//because we have middle ware, dont need the domain
const baseUrl = '/api/persons' //uses proxy
const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const remove = (id,currentObject) => {
const request = axios.delete(`${baseUrl}/${id}`, currentObject)
return request.then(response => response.data)
}

export default {getAll, create, update, remove}