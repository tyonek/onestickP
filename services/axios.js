import axios from 'axios';

const instance = axios.create({
    baseURL:"https://phelbbackend.herokuapp.com/",
    headers:{}
})

export default {
    getStudentsData:()=> instance({
        'method':'GET',
        'url':'/students',
       
    })
}