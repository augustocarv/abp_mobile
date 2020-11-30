import axios from "axios";
import api from "./api";
class Band {

    async postProfile(body) {
        return api.post(`api/banda/cadastro-perfil`, body)
    }
    async getProfile() {
        return api.get(`api/banda/perfil`)
    }
    async search(body) {
        return api.get(`api/banda/search`, body)
    }
    async getBandById(id) {
        return api.get(`api/banda/details/${id}`)
    }
    async getShowsByDate(body) {
        return api.get(`api/banda/agenda`, body)
    }

}

export const bandService = new Band();
