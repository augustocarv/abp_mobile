import axios from "axios";
import { AsyncStorage } from "react-native";
import api from "./api";
class User {

    async completeRegisterBand(body) {
        return api.post(`api/banda/cadastro-perfil`, body)
    }
    async completeRegisterEstablishment(body) {
        return api.post(`api/banda/estabelecimento`, body)
    }
    async getByTokenBand() {
        return api.get(`api/banda/perfil`)
    }
    async searchBand(query) {
        return api.get(`api/banda/search`, query)
    }
    async getUser(){
        return AsyncStorage.getItem('User')
    }

}

export const userService = new User();
