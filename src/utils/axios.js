import axios from "axios";

const BASE_URL = 'localhost:9000/';

export default axios.create({
    baseURL: BASE_URL,
});