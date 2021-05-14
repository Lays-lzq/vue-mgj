import axios from 'axios'


export function request(config){
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })
  //axios请求拦截器
  // instance.interceptors.request.use(config => {
  //   console.log(config);
  //   return config
  // },err => {
  //   console,log(err)
  // })

  // axios响应拦截器
  instance.interceptors.response.use(res => {
    console.log(res.data);
    return res.data
  },err => {
    console.log(err);
  })
    return instance(config)
}     //最终方案


