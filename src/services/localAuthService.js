export const localAuthService = {

  // funcions autenticació

    isAuthor(object) {
      if (this.getAuthUser().id !== object.creator.id) return false;
      return true;
    },
  
    isAuth() {
      if (!localStorage.getItem("auth")) return false;
      return true;
    },
  
    getAuthUser() {
      const authJson = localStorage.getItem("auth")
        ? localStorage.getItem("auth")
        : false;
      return JSON.parse(authJson);
    },
  
    saveAuthUser(authUser) {
      localStorage.setItem("auth", JSON.stringify(authUser));
    },



  deleteAuthUser(confirmation) {
    if(confirmation){
      localStorage.removeItem("auth")
      window.location = ("/");
  } return;
}


// deleteAuthUser() {
//   localStorage.removeItem("auth")
// },

}
