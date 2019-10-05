import {request} from './request.js'

export function getDetailData(iid){
	return request({
		url:'api/v1/detail',
		params:{
			iid
		}
	})
}

export function getRecommend(){
	return request({
		url:'api/v1/recommend'
	})
}

export class GoodsInfo {
	constructor(itemInfo,columns,services) {
		this.title = itemInfo.title;
		this.desc = itemInfo.desc;
		this.newPrice =itemInfo.price;
		this.oldPrice = itemInfo.oldPrice;
		this.discount = itemInfo.discountDesc;
		this.discountBgColor = itemInfo.discountBgcolor;
		this.columns = columns;
		this.services = services;
		this.realPrice = itemInfo.lowNowPrice;
	}
}

export class ShopInfo {
	constructor(shopInfo){
		this.logo = shopInfo.shopLogo;
		this.name = shopInfo.name;
		this.fans = shopInfo.cFans;
		this.sells = shopInfo.cSells;
		this.score = shopInfo.score;
		this.goodsCount =shopInfo.cGoods;
	}
}

export class GoodsParam {
	constructor(info,rule){
		//注：image可能没有值（某些商品有，某些商品没有）
		this.image = info.images ? info.images[0] : '';
		this.info = info.set;
		this.rule = rule.tables;
	}
}