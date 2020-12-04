import axios from "axios";
import { AsyncStorage } from "react-native";
import api from "./api";
class User {

    async getAgenda() {
        return api.get(`api/user/agenda`)
    }

    async getUser(){
        return AsyncStorage.getItem('User')
    }

}

export const userService = new User();
