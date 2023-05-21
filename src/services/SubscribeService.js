
import axios from "axios"

export default class SubscribeService {

  subscribe(supUserId) {//subscribe araç sahibine
    const token = localStorage.getItem("token");
    return axios.post(
      "https://localhost:44303/api/subscribe/subscribe?supUserId=" + supUserId,
      null, // boş veri gövdesi
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );
  }
  //araba sahibinin id
  unSubscribe(id) {
    const token = localStorage.getItem("token");
    return axios.post(
      "https://localhost:44303/api/subscribe/deletesubscribe?supUserId=" + id,
      null, // boş veri gövdesi
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );
  }

  getBySubUser() {
    const token = localStorage.getItem("token");

    return axios.get("https://localhost:44303/api/subscribe/getallsubuser"
      ,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );
  }
}
