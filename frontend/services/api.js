import { api } from "boot/axios";
import axios from 'axios'

class APIService {

  // =============== Storage Calls =================
  get_posts(orderby = 'id', order = 'desc', page = '1', per_page = '9') {
    // The valid values for orderby will vary depending on the queried resource;
    // for the / wp / v2 / posts collection, the valid values are “date,” “relevance,” “id,” “include,” “title,” and “slug”.
    return api.get(`/posts?orderby=${orderby}&order=${order}&page=${page}&per_page=${per_page}`);
  }

  get_post(id) {
    return api.get(`/posts/${id}`);
  }
  
  get_media(id) {
    return api.get(`/media/${id}`);
  }
}

export default new APIService();