import axios from 'axios'
import type { AxiosInstance } from "axios";

axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/json'

let request: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'http://192.168.1.63:9923/v1'
});


export default request