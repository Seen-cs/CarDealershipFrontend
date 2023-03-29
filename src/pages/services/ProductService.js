import axios from "axios"

export default class ProductService{

    getProducts(){
        return axios.get("https://localhost:44303/api/car/getall")
    }
    getByProductName(productName){
        return axios.get("http://localhost:8080/api/products/getByProductName?productName="+productName)
    }
    addProduct(values){
        return axios.post("http://localhost:8080/api/products/add",values)
    }
    
}