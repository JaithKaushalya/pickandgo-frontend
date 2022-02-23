import axios from "axios";
import { Properties } from "../properties";

export const login = async (user) => {

    try {

        const res = await axios.post(`${Properties.baseUrl}/auth/login`, user);
        const userData = res.data.user;
        const token = res.data.token;
        return { "data": { userData, token }, "status": res.status }

    } catch (error) {
        console.log(error.response)
        if (error.response.data.status === 403)
            return { "status": error.response.data.status }
    }

}

export const register = async (user) => {

    try {

        const res = await axios.post(`${Properties.baseUrl}/auth/register`, user);
        const userData = res.data.user;
        const token = res.data.token;
        return { "data": { userData, token }, "status": res.status }

    } catch (error) {
        return { "status": error.response.status, "error": error.response.data }
    }
}