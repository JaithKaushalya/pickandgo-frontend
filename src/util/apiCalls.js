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

export const loadAllBranches = async () => {

    try {

        const token = sessionStorage.getItem("token");

        const res = await axios.get(`${Properties.baseUrl}/branch`, {
            headers: {
                'Authorization': `${token}`
            },
        });
       return { "data": res.data, "status": res.status }
        // return res.data;;

    } catch (error) {
        return { "status": error.response.status, "error": error.response.data }
    }
}

export const loadAllVehicles = async () => {
    
        try {
    
            const token = sessionStorage.getItem("token");
    
            const res = await axios.get(`${Properties.baseUrl}/Vehicle/getAllVehicles`, {
                headers: {
                    'Authorization': `${token}`
                },
            });
            return { "data": res.data, "status": res.status }
    
        } catch (error) {
            return { "status": error.response.status, "error": error.response.data }
        }
    }

export const addBranch = async (branch) => {

    try {

        const token = sessionStorage.getItem("token");

        const res = await axios.post(`${Properties.baseUrl}/branch`, branch, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return { "data": res.data, "status": res.status }

    } catch (error) {
        return { "status": error.response.status, "error": error.response.data }
    }
}

export const addVehicle = async (vehicle) => {

    try {

        const token = sessionStorage.getItem("token");

        const res = await axios.post(`${Properties.baseUrl}/Vehicle`, vehicle, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return { "data": res.data, "status": res.status }

    } catch (error) {
        return { "status": error.response.status, "error": error.response.data }
    }
}

export const deleteBranch = async (branchId) => {
    
        try {
    
            const token = sessionStorage.getItem("token");
    
            const res = await axios.delete(`${Properties.baseUrl}/branch/${branchId}`, {
                headers: {
                    'Authorization': `${token}`
                },
            });
            return { "data": res.data, "status": res.status }
    
        } catch (error) {
            return { "status": error.response.status, "error": error.response.data }
        }
    }

export const deleteVehicle = async (vehicleId) => {

    try {
        const token = sessionStorage.getItem("token");

        const res = await axios.delete(`${Properties.baseUrl}/Vehicle/${vehicleId}`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return { "data": res.data, "status": res.status }
    } catch (error) {
        return { "status": error.response.status, "error": error.response.data }
    }
}

export const loadDeliveries = async (branchId) => {
    
    try {
        const token = sessionStorage.getItem("token");

        const res = await axios.get(`${Properties.baseUrl}/delivery/GoodNotAssignedVehicle/${branchId}`, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return { "data": res.data, "status": res.status }
    } catch (error) {
        return { "status": error.response.status, "error": error.response.data }
    }
}

export const assignVehicle = async (vehicle) => {

    try {

        const token = sessionStorage.getItem("token");

        const res = await axios.post(`${Properties.baseUrl}/delivery/AssignVehicle`, vehicle, {
            headers: {
                'Authorization': `${token}`
            },
        });
        return { "data": res.data, "status": res.status }

    } catch (error) {
        return { "status": error.response.status, "error": error.response.data }
    }
}


