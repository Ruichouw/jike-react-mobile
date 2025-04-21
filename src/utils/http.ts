import axios from "axios";

const httpInstance = axios.create({
  baseURL: "http://geek.itheima.net/v1_0",
  timeout: 1000,
});

// 添加请求拦截器
httpInstance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    // 获取token
    // 按照后端格式做token拼接，放进请求头中
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
httpInstance.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    if (error.response.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default httpInstance;
