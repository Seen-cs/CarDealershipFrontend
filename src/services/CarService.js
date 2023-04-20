import axios from "axios"

export default class CarService{

    getCars(){
        return axios.get("https://localhost:44303/api/car/getall")
    }
    getByName(id){
        return axios.get("http://localhost:8080/api/products/getByProductName?productName="+id)
    }
    
    
}