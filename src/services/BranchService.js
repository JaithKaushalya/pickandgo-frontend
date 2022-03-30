import axios from "axios"

const BRANCHES_REST_API_URL = "http://localhost:9091/branch";

class BranchService {

    getBranches() {
        return axios.get(BRANCHES_REST_API_URL);
    }

}

export default new BranchService();