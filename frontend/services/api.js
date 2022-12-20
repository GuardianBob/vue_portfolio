import { api } from "boot/axios";
import axios from 'axios'

class APIService {

  // =============== Storage Calls =================
  test() {
    return api.get(`/user/test`);
  }
  
}

export default new APIService();