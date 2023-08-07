import request from "@/request/axios";

export const getPipelines = async (params = {}) => {
  return request.get('/list', { params})
}

export const getBranch = async (params = {}) => {
  return request.get('/branch', { params})
}

export const runPipelines = async <T>(data: T) => {
  return request.post('/running', data)
}