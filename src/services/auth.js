import axios from "axios";
import api from "./api";
class AuthLogin {

    async register(body) {
        return api.post(`api/auth/register`, body)
    }
    async login(body) {
        return api.post(`api/auth/login`, body)
    }
}

export const authService = new AuthLogin();
