import axios from "axios";
const baseURL = "http://localhost:8080";


export const likeServices = {
    
    likes(id) {
        const likes = axios
          .post(baseURL + "/likes", {momentId: id, userId: 2})
          .then((res) => {
            return res.data;
          })
          // .catch((err) => {
          //   window.alert("Cant like your own moment");
          // });
        return likes;
      },


      // likes(data) {

      //   const likes = axios
      //   .post(baseURL + "/likes/", data)
      //   .then((res) => res.data);
      //       return likes;
      //   },



}

