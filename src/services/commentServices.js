import axios from "axios";

let baseURL = "http://localhost:8080";

export const commentServices = {
    
    getAllComments() {
      const comments = axios.get(baseURL + "/comments").then((res) => {
        return res.data;
      });
      return comments;
    },

    getCommentById(id) {
        const comment = axios.get(baseURL  + "/comments/" + id).then((res) => res.data);
        return comment;
    },

    getCommentsByMomentId(id) {
        const comments = axios.get(baseURL  + "/moments/" + id + "/comments").then((res) => res.data);
        return comments;
    }


}

