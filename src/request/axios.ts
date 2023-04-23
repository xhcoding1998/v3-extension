import axios from 'axios'
import type { AxiosInstance } from "axios";
import { merge2Str } from "@/utils";

axios.defaults.withCredentials = true
let request: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'http://192.168.1.63:9923',
  headers: {
    'content-Type': 'application/x-www-form-urlencoded'
  }
});

export default request