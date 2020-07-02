import Axios from "axios";

const api = Axios.create({
    baseURL: "https://localhost:44333",
});

export default api;