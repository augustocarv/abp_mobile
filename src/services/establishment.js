import axios from "axios";
import api from "./api";
class Establishment {

    async postProfile(body) {
        return api.post(`api/estabelecimento/cadastro-perfil`, body)
    }
    async getProfile(body) {
        return api.get(`api/estabelecimento/perfil`)
    }
    async getShowsByDate(body) {
        return api.get(`api/estabelecimento/agenda`, body)
    }

}

export const establishmentService = new Establishment();
