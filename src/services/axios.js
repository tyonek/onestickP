import axios from 'axios';

const instance = axios.create({
    baseURL:"https://phelbbackend.herokuapp.com/",
   headers: {"Access-Control-Allow-Origin": "*"}
})
const getStudentsData = () => instance({
    'method': 'GET',
    'url': '/students',

})
const postStudentData = (incomingData) => instance({
    'method': 'POST',
    'url': '/students',   
    "data": { ...incomingData, accountType:"student"},
    'headers': {
        'content-type': 'application/json',
        
    }})

const loginUser = (incomingData) => instance({
    'method': 'POST',
    'url': '/login',
    "data": incomingData,
    'headers': {
        'content-type': 'application/json',

    }
})
export {
    getStudentsData,
    postStudentData,
    loginUser

}