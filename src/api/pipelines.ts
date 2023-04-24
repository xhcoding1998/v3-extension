import request from "@/request/axios";
import type { AxiosRequestConfig } from "axios";

export const getPipelines = async () => {
  const params = {
    pipelineName: 'fmp',
    searchPipelineName: 'fmp',
    pageSize: 1000,
    pageStart: 0,
    pageSort: 'ID'
  }
  return request.get('/list', { params })
}

export const runPipelines = async <T>(data: T) => {
  console.log(data);
  return request.post('/running', data)
}