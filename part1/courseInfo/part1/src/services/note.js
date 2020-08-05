//single module to handle the backend calls
import axios from 'axios'
//const baseUrl = 'http://localhost:3001/notes'
//deploying to th'http://localhost:3001e internet
const baseUrl = '/api/notes' //because of the app.use(express.static('build'))

const getAll = () => 
{
    const request = axios.get(baseUrl)
    //hardcoded note
    const nonE = {
        id: 10000,
        contnent: 'test note not saved to the server',
        date: 'example date',
        important: true
    }
    return request.then(response => response.data.concat(nonE))
    }

const create = (newObject) => {
    const request = axios.post(baseUrl,newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {

    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)

}

// export default {
//     getAll: getAll, 
//     create: create,
//     update: update
// }
//since the keys and assigned varibles are the same we ca use... 
export default {getAll, create, update}