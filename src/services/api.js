import axios from "axios";

const api = axios.create({
  baseURL: "http://uploader.acessa.cloud/api"
});

export default api;
