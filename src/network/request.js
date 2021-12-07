import axios from "axios";

export function request(config) {
  //1. 创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  //2. axios的拦截器
  instance.interceptors.request.use(config => {
    console.log(config)
    return config
  }, err =>{
    console.console.log(err);
  })

  instance.interceptors.response.use(res => {
    return res
  }, err =>{
    console.log(err)
  })

  return instance(config)
}