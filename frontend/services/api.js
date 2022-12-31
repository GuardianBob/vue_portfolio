import { api } from "boot/axios";
import axios from 'axios'

class APIService {

  // =============== Storage Calls =================
  get_posts() {
    return api.get(`/posts/`);
  }

  get_post(id) {
    return api.get(`/posts/${id}`);
  }
  
  get_media(id) {
    return api.get(`/media/${id}`);
  }
}

export default new APIService();