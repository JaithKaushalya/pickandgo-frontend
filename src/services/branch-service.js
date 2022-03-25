import axios from "axios";
import { Properties } from "../properties";

export const getAllBranches = async () => {

    console.log("called.......");
    try {
        
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'AUTHORIZATION': sessionStorage.getItem("token"),
            }
        }
        const res = await axios.get(`${Properties.baseUrl}/branch`, config);
        return res;
    } catch (error) {
        console.log(error.response)
        return error.response;
    }

}

export const getNearestBranches = async (inputDto) => {

    console.log("called.......");
    try {
        
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'AUTHORIZATION': sessionStorage.getItem("token"),
            }
        }
        const res = await axios.post(`${Properties.baseUrl}/delivery/nearestBranches`, inputDto, config);
        return res;
    } catch (error) {
        console.log(error.response)
        return error.response;
    }

}

