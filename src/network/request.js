import axios from 'axios'


export function requestConstructionAndEmployee(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: '/zjsj/a/from/zjsjProjectFrom',
    withCredentials: true,
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}


export function requestConstructionAndEmployeeFlowList(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: '/zjsj/a/from/zjsjProjectFrom',
    withCredentials: true,

  })

  // 2.1 请求响应
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log("请求失败：", err);
  })

  // 2.2 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log("响应失败：", err);
  })


  // 3.发送真正的网络请求
  return instance(config)
}

export function requestFromCommit(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: '/zjsj/a/from/zjsjProjectFrom',
    withCredentials: true,

  })

  // 2.1 请求响应
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log("请求失败：", err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log("响应失败：", err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}

export function requestFromInit(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: '/zjsj/a/from/zjsjProjectFrom',
    withCredentials: true,

  })

  // 2.1 请求响应
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log("请求失败：", err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log("响应失败：", err);
  })


  // 3.发送真正的网络请求
  return instance(config)
}

export function requestFlowInit(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: '/zjsj/a/from/zjsjProjectFrom',
    withCredentials: true,

  })

  // 2.1 请求响应
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log("请求失败：", err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log("响应失败：", err);
  })


  // 3.发送真正的网络请求
  return instance(config)
}
