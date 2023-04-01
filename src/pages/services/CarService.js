import axios from "axios"

export default class CarService{

    getCars(){
        return axios.get("https://localhost:44303/api/car/getall")
    }
    getByProductName(productName){
        return axios.get("http://localhost:8080/api/products/getByProductName?productName="+productName)
    }
    getBrands(){
        return axios.get("https://localhost:44303/api/brand/getall")
    }
    
}