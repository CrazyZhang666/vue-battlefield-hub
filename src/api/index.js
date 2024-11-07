import axios from "axios";

const bfAxios = axios.create({
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
});

export default bfAxios;