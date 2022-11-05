import axios from "axios";

const api = axios.create({
  baseURL: "https://techquiz-api.herokuapp.com",
  timeout: 5000,
});

export default api;
