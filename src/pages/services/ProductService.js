import axios from "axios"

export default class ProductService{

    getProducts(){
        return axios.get("https://mocki.io/v1/41d80db2-7bee-42b4-923f-f5dc2fc7d7bc")
    }
    getByProductName(productName){
        return axios.get("http://localhost:8080/api/products/getByProductName?productName="+productName)
    }
    addProduct(values){
        return axios.post("http://localhost:8080/api/products/add",values)
    }
    
}