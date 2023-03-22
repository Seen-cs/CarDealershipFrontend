import axios from "axios"

export default class UserService{
  
    addUser(values){
        return axios.post("http://localhost:8080/api/users/register",values)
    }
    login(values){
        return axios.post("http://localhost:8080/api/users/login",values)
    }
  
}
