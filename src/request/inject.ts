import request from "@/request/axios";
import { useConfigStore } from "@/stores/config";
import { merge2Str } from "@/utils";

import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export default {
  install() {
    const { config } = useConfigStore()

    request.interceptors.request.use(function (_config: InternalAxiosRequestConfig) {
      if (_config.method === 'get') {
        _config.params = {
          ..._config.params,
          cookie: merge2Str(config.cookies),
          'x-xsrf-token': config.cookies['XSRF-TOKEN']
        }
      }else {
        _config.data = {
          ..._config.data,
          cookie: merge2Str(config.cookies),
          'x-xsrf-token': config.cookies['XSRF-TOKEN']
        }
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