import axios from "axios";
import api from "./api";
class Hiring {

    async requestEvent(body) {
        return api.post(`api/contratacao/solicitar-evento`, body)
    }
    async acceptEvent(body) {
        return api.post(`api/contratacao/aceitar-evento`, body)
    }
    async cancelEvent(body) {
        return api.post(`api/contratacao/cancelar-evento`, body)
    }

}

export const hiringService = new Hiring();
