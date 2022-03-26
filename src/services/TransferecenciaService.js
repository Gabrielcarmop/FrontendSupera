import axios from 'axios'

const TRASFERECIAS_REST_API_URL = "http://localhost:8080/transferecia";

class TransferenciasService {

    getTransferencias(){
        return axios.get(TRASFERECIAS_REST_API_URL);
    }
}
export default new TransferenciasService()