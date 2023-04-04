import axios from "axios";

export default class ColorService{

    getColors(){
        return axios.get("https://localhost:44303/api/color/getall")
    }
}