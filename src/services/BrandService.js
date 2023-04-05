import axios from "axios";

export default class BrandService{

    getBrands(){
        return axios.get("https://localhost:44303/api/brand/getall")
    }
}