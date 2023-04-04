import axios from "axios";

export default class ModelService{

    getModels(){
        return axios.get("https://localhost:44303/api/model/getall")
    }
        
    
}