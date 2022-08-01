import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    authorization: "",
  },
});

export default Api;
