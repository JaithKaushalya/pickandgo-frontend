import axios from "axios";
import { Properties } from "../properties";

export const makeDelivery = async (delivery) => {

    
    try {
        
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'AUTHORIZATION': sessionStorage.getItem("token"),
            }
        }
        const res = await axios.post(`${Properties.baseUrl}/delivery/make-delivery`, delivery, config);
        return res;
    } catch (error) {
        console.log(error.response)
        return error.response;
    }

}

