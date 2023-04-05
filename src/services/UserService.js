import axios from "axios"

export default class UserService{
  
    register(values){
        return axios.post("https://localhost:44303/api/auth/register",values)
    }
    login(values){
        return axios.post("https://localhost:44303/api/auth/login",values)
    }
  
}
