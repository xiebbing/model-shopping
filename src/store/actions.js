import {ADD_COUNTER,ADD_TO_CART} from './ParamType.js'

export default {
	addCart(context,payload){
		return new Promise((resolve,reject) => {
				
				const oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
				if(oldProduct){
					// oldProduct.count += 1;
					context.commit(ADD_COUNTER,oldProduct)
					resolve('当前商品数量+1')
				} else {
					// context.state.cartList.push(payload)
					context.commit(ADD_TO_CART,payload)
					resolve('当前商品添加到购物车')
				}
			})
	}
}