class NetWork {

  static getTodayProfile(success, faile) {
   return fetch('https://interface.meiriyiwen.com/article/today?dev=1').then(reseponse => reseponse.json())
           .then(responseJson => {
             success(responseJson);
           }).catch(error => {
             faile(error);
           })
  }

}

export default NetWork;