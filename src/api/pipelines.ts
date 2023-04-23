import request from "@/request/axios";

export const getPipelines = async () => {
  const params = {
    pipelineName: 'fmp',
    searchPipelineName: 'fmp',
    pageSize: 1000,
    pageStart: 0,
    pageSort: 'ID'
  }
  return request.get('/login', { params })
}