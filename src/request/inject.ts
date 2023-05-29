import request from "@/request/axios";
import { useConfigStore } from "@/stores/config";
import { merge2Str } from "@/utils";

import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export default {
  install() {
    const { config } = useConfigStore()
    request.interceptors.request.use((_config: InternalAxiosRequestConfig) => {
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
  }
}