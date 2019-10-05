<template>
	<div id="detail">
		<detail-nav-bar class="detail-nav" @itemChange="itemChange" ref="nav"/>
		<scroll class="detail-contents" ref="scroll" @Scroll="contentScroll" :probe-type="3">
			<detail-swiper :top-images="topImages" />
			<detail-info :goods="goods" />
			<detail-shop-info :shop="shopMessage" />
		<detail-goods-info :detail-info="detailInfo" @detailImageLoad="detailImageLoad"/>
		<detail-goods-param :goods-params="goodsParam" ref="params" />
		<detail-comment :comment-info="commentInfo" ref="comment"></detail-comment>
		<goods-list :goods="recommend" ref="list" /> 
		</scroll>
		<back-to class="backto" @click.native="backClick" v-show="backToShow"></back-to>
		<detail-bottom @addCart="addToCart" />
		
		
	</div>
</template>

<script>
	import DetailNavBar from './ChildComps/DetailNavbar.vue'
	import DetailSwiper from './ChildComps/DetailSwiper.vue'
	import DetailInfo from './ChildComps/DetailInfo.vue'
	
	import DetailShopInfo from './ChildComps/detailShopInfo.vue'
	import DetailGoodsInfo from'./ChildComps/detailGoodsInfo.vue'
	import DetailGoodsParam from './ChildComps/detailGoodsParam.vue'
	
	import DetailComment from './ChildComps/detailComment.vue'
	import GoodsList from 'components/context/GoodsList/GoodsList.vue'
	import DetailBottom from './ChildComps/DetailBottom.vue'
	
	import {itemListerMixin,backToMixin} from 'common/mixin.js'
	import {mapActions} from 'vuex'
	import {debounce} from 'common/utills.js'
	
	
	import Scroll from 'components/common/scroll/Scroll.vue'
	import {getDetailData,GoodsInfo,ShopInfo,GoodsParam,getRecommend} from 'network/detail.js'
	export default {
		name:'detail',
		data(){
			return {
				iid:null,
				topImages:[],
				goods:{},
				shopMessage:{},
				detailInfo:{},
				goodsParam:{},
				commentInfo:{},
				recommend:[],
				themeTopYs:[],
				getThemeYs:null,
				currentIndex:0,
				state:{}
			}
		},
		mixins:[itemListerMixin,backToMixin],
		created(){
			//获取id
			this.iid = this.$route.params.iid
			//query方法
			
			//根据id获取相关的数据请求
			getDetailData(this.iid).then((res) => {
				//获取顶部图片数据
				// console.log(res)
				const data = res.result
				this.topImages = data.itemInfo.topImages
				//获取商品数据信息
				this.goods = new GoodsInfo(data.itemInfo,data.columns,data.shopInfo.services)
				//获取商户的数据信息
				this.shopMessage = new ShopInfo(data.shopInfo)
				//获取商品详细信息
				this.detailInfo = data.detailInfo;
				//获取商品的参数和规格
				this.goodsParam = new GoodsParam(data.itemParams.info,data.itemParams.rule);
				//获取用户的评论信息
				if(data.rate.cRate !== 0){
					this.commentInfo = data.rate.list[0]
				}
			})
			getRecommend().then(res => {
				// console.log(res)
				this.recommend = res.data.list
			})
			
			this.getThemeYs = debounce(() => {
					this.themeTopYs = [];
					this.themeTopYs.push(0);
					this.themeTopYs.push(this.$refs.params.$el.offsetTop);
					this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
					this.themeTopYs.push(this.$refs.list.$el.offsetTop);
			},100)		
		},
		methods:{
			...mapActions(['addCart']),
			detailImageLoad(){
				this.newRefresh()
				this.getThemeYs()	
			},
			itemChange(index){
				// console.log(index)
				this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],2000)
			},
			contentScroll(position){
				const positionY = -position.y
				//positionY和主题中的值比较themeTopYs【0，7938，9120，9452】
				//分析需求使用的伪代码
				// for(let i in the themeTopYs){
				// 	if(positionY > this.themeTopYs[i] && positionY < this.themeTopYs[i+1])
				// }
				//i为0时没有任何意义，length-1是为了得到后3位数，分别分为1-2，2-3之间用一种方式
				//3以后又是用另一种方式,使用currentIndex来接收i，改变nav的currentIndex
				let length = this.themeTopYs.length;
				for(let i =0;i<length;i++){
					if(this.currentIndex !== i && ((i < length - 1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])
					|| (i === length - 1 && positionY >= this.themeTopYs[i]))){
						this.currentIndex = i;
						console.log(i)
						this.$refs.nav.currentIndex = this.currentIndex;
				 }
			  }
			  this.listerIsShow(position)
		  },
			addToCart(){
				//1.获取商品的信息
				const product = {}
				product.image = this.topImages[0];
				product.title = this.goods.title;
				product.desc = this.goods.desc;
				product.price = this.goods.realPrice;
				product.iid = this.iid;
				
				//将商品添加到购物车 Vuex
				// this.$store.commit('addCart',product)
				//应用mapActions可以映射actions的方法
				// this.addCart(product).then(res => {
				// 	console.log(res)
				// })
				
				this.$store.dispatch('addCart',product).then(res => {
					console.log(res);
				})
			}
		},
		components:{
			DetailNavBar,
			DetailSwiper,
			DetailInfo,
			DetailShopInfo,
			Scroll,
			DetailGoodsInfo,
			DetailGoodsParam,
			DetailComment,
			GoodsList,
			DetailBottom
		}	
	}
</script>

<style scoped>
	#detail {
		position:relative;
		z-index:9;
		background-color:#fff;
		height:100vh;
	}
	.detail-nav {
		position:relative;
		z-index:9;
		background-color:#fff;
	}
	.detail-contents {
		height:calc(100% - 44px);
	}

</style>
