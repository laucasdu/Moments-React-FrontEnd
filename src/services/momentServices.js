import axios from "axios";
import { localAuthService } from "./localAuthService";

// let baseURL = "http://localhost:5000";

// let baseURL = "http://localhost:8080";

// let baseURL = "https://62866d7696bccbf32d75019d.mockapi.io/";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = false;
axios.interceptors.request.use(function (config) {
  //const token = localStorage.getItem("auth".token);
  const token = localAuthService.getAuthUser().token;
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});


export const momentServices = {


    getAllMoments() {
        const moment = axios.get("/moments").then((res) => {
        return res.data;
    });

    return moment;
    },

    getMomentById(id) {
      console.log(id)
        const moments = axios
          .get("/moments/" + id)
          .then((res) => res.data);
        return moments;
      },

      updateMoment(id, newMoment) {
          const moments = axios
            .put("/moments/" + id, newMoment)
            .then((res) => res.data);
          return moments;
        },

       deleteMoment(id) {
          const deletedMoment = axios
          .delete("/moments/" + id)
          .then((res) => res.data);
              return deletedMoment;
      },

      createMoment(data) {

          const createNewMoment = axios
          .post("/moments/", data)

          // .post(baseURL + "/moments/", {...data,userId:1})
          .then((res) => res.data);
              return createNewMoment;
          },


        searchMoment(search) {
          const moments = axios.get(`/moments?search=${search}`).then((res) => {
            return res.data;
          });
          return moments;
        },
      

 };
   
