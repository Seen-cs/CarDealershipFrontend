import axios from "axios"

export default class CarService{

    getCars(){
        return axios.get("https://localhost:44303/api/car/getall")
    }
    getByName(id){
        return axios.get("https://localhost:44303/api/car/getbyuserid?Carid="+id)
    }
    
    
}