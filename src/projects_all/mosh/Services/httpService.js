import axios  from "axios";

import { toast } from 'react-toastify';

axios.defaults.headers.common['x-auth-token'] = ""

axios.interceptors.response.use(null,error=>{
    console.log("entered interceptor ")
    const expectedError = error.response && error.response.status >= 400 && error.response.status < 500;
    if(!expectedError){
        toast.error("unexpected error ");
        console.log("unexpected error ")
    }else toast.error("400 error ");

    return Promise.reject(error)
})

export default {
    get : axios.get,
    post : axios.post,
    put : axios.put,
    delete : axios.delete
}