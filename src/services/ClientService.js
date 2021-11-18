import axios from "axios";

const Client_API_BASE_URL = "http://localhost:8080/api/v1/clients";

class ClientService {
    getClients(){
        return axios.get(Client_API_BASE_URL);
    }

    addClients(client){
        return axios.post(Client_API_BASE_URL, client);
    }
}

export default new ClientService()
