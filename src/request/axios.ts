import axios from 'axios'
import type { AxiosInstance } from "axios";

axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/json'

let request: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'http://47.115.230.45:9923/v1'
});


export default request