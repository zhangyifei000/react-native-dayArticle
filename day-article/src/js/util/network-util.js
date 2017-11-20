const TODAY_FILE_URL = "https://interface.meiriyiwen.com/article/today?dev=1";
const DAY_FILE_URL = "https://interface.meiriyiwen.com/article/day?dev=1";
const RANDOM_FILE_URL = "https://interface.meiriyiwen.com/article/random?dev=1";

class NetWork {
  static getTodayProfile(success, faile) {
   return fetch(TODAY_FILE_URL).then(reseponse => reseponse.json())
           .then(responseJson => {
             success(responseJson);
           }).catch(error => {
             faile(error);
           })
  }

  static getDayProfile(date ,success, faile) {
    return fetch(DAY_FILE_URL + `&date=${date}`).then(reseponse => reseponse.json())
      .then(responseJson => {
        success(responseJson);
      }).catch((error) => {
        faile(error);
      });
  }

  static getRandomProfile(success, faile) {
    return fetch(RANDOM_FILE_URL).then(reseponse => reseponse.json())
      .then(responseJson => {
        success(responseJson);
      }).catch((error) => {
        faile(error);
      });
  }
}

export default NetWork;