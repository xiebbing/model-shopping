import axios from 'axios'

export function request(config){
	const instance = axios.create({
		baseURL:'http://123.207.32.32:8000',//这是接口地址，可能失效了
		timeout:5000
	})
	//axios的拦截器
	//请求拦截作用
	instance.interceptors.request.use(config => {
		return config
	},err =>{
		// console.log(err)
	})
	//响应拦截
	instance.interceptors.response.use(res =>{
		return res.data
	},err => {
		// console.log(err)
	})
	
	//发送真正的网络请求
	return instance(config)
	
}