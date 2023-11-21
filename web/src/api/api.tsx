import axios from "axios";
import firebase from "firebase/app";

const axiosClient = axios.create({
    baseURL: 'http://localhost:4000/'
})

export default axiosClient