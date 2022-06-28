import axios from "axios";

// let baseURL = "http://localhost:5000/moments";

let baseURL = "http://localhost:8080";

// let baseURL = "https://62866d7696bccbf32d75019d.mockapi.io/";


export const momentServices = {


    getAllMoments() {
        const moment = axios.get(baseURL).then((res) => {
        return res.data;
    });

    return moment;
    },

    getMomentById(id) {
        const moments = axios
          .get(baseURL + "/moments/" + id)
          .then((res) => res.data);
        return moments;
      },

      updateMoment(id, newMoment) {
          const moments = axios
            .put(baseURL + "/moments/" + id, newMoment)
            .then((res) => res.data);
          return moments;
        },





 };
   
