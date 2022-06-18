import axios from "axios";


const baseURL= "https://62ad8de0402135c7acc2a93e.mockapi.io";


export const momentServices = {


    getAllMoments() {
        const moment = axios.get(baseURL + "/moments").then((res) => {
        return res.data;
    });

    return moment;
    },


 };

