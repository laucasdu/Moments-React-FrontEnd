import axios from "axios";

let baseURL = "http://localhost:8080";

export const authService = {

    login(req){
        const auth = axios.post(`${baseURL}/auth/signin`, req)
        .then(res => {return res.data});
        return auth;
    },

    signup(req){
        const auth = axios.post(`${baseURL}/auth/signup`, req)
        .then(res => {return res.data});
        return auth;

    },

}








    
   