export const merge2Str = (data: any)=> {
  let str: string = ''
  Object.keys(data).forEach(key=> {
    str += key + '=' + data[key] + ';'
  })
  return str
}