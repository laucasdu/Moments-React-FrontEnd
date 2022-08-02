import axios from "axios";
const baseURL = "http://localhost:8080";


export const likeServices = {
    
    like(id) {
        const like = axios
          .post(baseURL + "/likes", { momentId: id, likesId: 1 })
          .then((res) => {
            return res.data;
          })
          .catch((err) => {
            window.alert("Cant like your own moment");
          });
        return like;
      },

}

