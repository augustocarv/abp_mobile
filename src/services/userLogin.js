import axios from "axios";
class UserLogin {

    async register(body) {
        return axios.post(`api/register`, body)
    }
    async login(body) {
        return axios.post(`api/signin`, body)
    }
}

export const userService = new UserLogin();
