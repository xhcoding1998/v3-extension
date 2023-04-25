import request from "@/request/axios";
import type { AxiosRequestConfig } from "axios";

export const getPipelines = async (params = {}) => {
  return request.get('/list', { params})
}

export const runPipelines = async <T>(data: T) => {
  console.log(data);
  return request.post('/running', data)
}