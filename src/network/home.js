import {request} from './request.js'

export function getHomeMultidata(){
	return request({
		url:'api/v1/home/multidata',
	})
}

export function getHomeGoods(type,page){
	return request({
		url:'api/v1/home/data',
		params:{
			type,
			page
		}
	})
}

// export function getHomeMultidata(){
// 	return request({
// 		url:'/home/multidata',
// 	})
// }