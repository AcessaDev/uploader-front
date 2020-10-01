import axios from "axios";

const api = axios.create({
  baseURL: "http://uploader-api.acessa.cloud"
});

export default api;
