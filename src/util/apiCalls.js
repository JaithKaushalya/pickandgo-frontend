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

export const loadAllDeliveries = async () => {

    try {

        const token = sessionStorage.getItem("token");

        const res = await axios.get(`${Properties.baseUrl}/delivery`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return { "data": res.data, "status": res.status }

    } catch (error) {
        return { "status": error.response.status, "error": error.response.data }
    }
}

export const loadAllPerson = async () => {

    try {

        const token = sessionStorage.getItem("token");

        const res = await axios.get(`${Properties.baseUrl}/delivery-person`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return { "data": res.data, "status": res.status }

    } catch (error) {
        return { "status": error.response.status, "error": error.response.data }
    }
}

export const allocatePerson = async (allocation) => {

    try {

        const token = sessionStorage.getItem("token");

        const res = await axios.put(`${Properties.baseUrl}/delivery/allocation`, allocation, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return { "data": res.data, "status": res.status }

    } catch (error) {
        return { "status": error.response.status, "error": error.response.data }
    }
}

