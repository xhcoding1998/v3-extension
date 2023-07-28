import axios from 'axios'
import { useConfigStore } from "@/stores/config";
import type { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { merge2Str } from "@/utils";

axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/json'

let request: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: 'http://192.168.1.63:9923/v1'
});

request.interceptors.request.use((_config: InternalAxiosRequestConfig) => {
  const { config } = useConfigStore()
  const data = {
    ..._config.params,
    ..._config.data,
    cookie: merge2Str(config.cookies),
    'x-xsrf-token': config.cookies['XSRF-TOKEN'],
    devRobotWebHook: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=773e9022-c8fd-484e-9d3b-30d5408f90a0',
    proRobotWebHook: 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=2be9193b-c4fc-418c-bb7e-5cab1d755e73',
    sendProStatus: true
  }
  if (_config.method === 'get') {
    _config.params = data
  }else {
    _config.data = data
  }

  // 在发送请求之前做些什么
  return _config;
});

interface ResponseType extends AxiosResponse{
  status: number
  data: any
}
request.interceptors.response.use((response) => {
  const res: ResponseType = response
  if (res.data.status === 200) {
    return response.data
  }
})

export default request