// import axios from "axios"

// export default class SubscribeService{
    
//   getBySupUserId(value){
//     const token = localStorage.getItem("token");
//     return axios.post("https://localhost:44303/api/subscribe/subscribe?supUserId="value, {
//       headers: {
//         'Authorization': `Bearer ${token}`
//       }
//     });
//   }
  
// }
import axios from "axios"

export default class SubscribeService{
    
  getBySupUserId(supUserId){
    const token = localStorage.getItem("token");
    return axios.post("https://localhost:44303/api/subscribe/subscribe?supUserId="+supUserId
      ,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );
  }
  
}
