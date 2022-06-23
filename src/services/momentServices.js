import axios from "axios";

// let baseURL = "http://localhost:5000";

let baseURL = "http://localhost:8080";


export const momentServices = {


    getAllMoments() {
        const moment = axios.get(baseURL + "/moments").then((res) => {
        return res.data;
    });

    return moment;
    },

    







 };

