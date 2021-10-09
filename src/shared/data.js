import axios from "axios";
import { API } from "./config";
const GetUser= async function(){
    try {
        const responce =await axios.get(`${API}/User.json`)
        console.log(responce);
        const data=responce.data
        console.log(data);
        return data
    } catch (error) {
        console.error(error);
    }
}
export const Users={
    GetUser,
}