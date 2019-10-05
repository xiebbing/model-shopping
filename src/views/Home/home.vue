<template>
	<div id="home">
		<nav-bar class="home-nav">
			<div slot="center">购物街</div>
		</nav-bar>
		<!-- 用于吸顶 -->
		<tab-crotrol class="{tab-crotrol:isTabOffset}"
		 @tabClick="tabClick" 
		 :TextList="['流行','新款','精选']" 
		 ref="tabControl1" v-show="isTabOffset">
		</tab-crotrol>
		 
		<scroll class="content" ref="scroll" :probe-type="3"
		@Scroll="ContentScroll"
		 :pull-up-load="true" @pullingUp="loadMore">
			<home-swiper :banners="banners" @swipeImageLoad="swipeImageLoad"></home-swiper>
			<recommend-view :recommends="recommends"></recommend-view>
			<home-hot></home-hot>
			<tab-crotrol 
			 @tabClick="tabClick" 
			 :TextList="['流行','新款','精选']" 
			 ref="tabControl2" style="background:#fff;">
			</tab-crotrol>
			<goods-list :goods="showGoods" />
		</scroll>
		<back-to class="backto" @click.native="backClick" v-show="backToShow"></back-to>
		
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/navbar.vue'
	import HomeSwiper from './ChildComps/HomeSwiper.vue'
	import RecommendView from './ChildComps/RecommendView.vue'
	
	import HomeHot from './ChildComps/HomeHot.vue'
	import TabCrotrol from 'components/context/TabCrotrol/TabCrotrol.vue'
	import GoodsList from 'components/context/GoodsList/GoodsList.vue'
	
	import {getHomeMultidata,getHomeGoods} from 'network/home.js'
	
	import {itemListerMixin,backToMixin} from 'common/mixin.js'
	import Scroll from 'components/common/scroll/Scroll.vue'
	
	
	export default {
		name:'home',
		data(){
			return {
				banners:[],
				recommends:[],
				goods:{
					'pop':{page:0,list:[]},
					'new':{page:0,list:[]},
					'sell':{
						page:0,list:[]
					}
				},
				currentType:'pop',
				isTabOffset:false,
				itemListener:null,
				saveY:0,
				num:10,
				pageX:0
			}
		},
		mixins:[itemListerMixin,backToMixin],

		components:{
			NavBar,
			HomeSwiper,
			RecommendView,
			HomeHot,
			TabCrotrol,
			GoodsList,
			Scroll,
			
		},
		created(){
			this.getHomeMultidata();
			
			this.getHomeGoods('pop');
			this.getHomeGoods('new');
			this.getHomeGoods('sell');
		},
		mounted(){
			//1.图片加载的事件监听
			// const Refresh = this.debounce(this.$refs.scroll.refresh,500)
			//保存监听的函数
			// this.itemListener = () => {
			// 	Refresh()
			// }
			// this.$bus.$on('itemImageLoad',this.itemListener)
			//2.获取tabControl的offsetTo
		},
		destroyed(){
			console.log('home is destroy')
		},
		activated(){//keep-alive 组件激活时调用
			this.$refs.scroll.scrollTo(0,this.saveY,0)
			this.$refs.scroll.refresh()
		},
		deactivated(){//keep-alive 组件停用时调用
		//1.保存监听的Scroll-better中的Y值，用来监听页面的位置
			this.saveY = this.$refs.scroll.getSaveY();
		//2.取消全局事件的监听
			this.$bus.$off('itemImageLoad',this.itemListener)
		},
		computed: {
			showGoods(){
				return this.goods[this.currentType].list
			}
		},
		methods:{
			//网络请求
			getHomeMultidata(){
				//请求多个数据
				getHomeMultidata().then(res => {
					this.banners = res.data.banner.list
					this.recommends = res.data.recommend.list
				})
			},
			//请求商品数据
			getHomeGoods(type){
				const page = this.goods[type].page + 1;
				const pageX = this.page;
				getHomeGoods(type,page).then(res => {
					const Dlist = res.data.list.slice(this.pageX,this.num)
					
					this.goods[type].list.push(...Dlist)
					this.goods[type].page += 1
					
					this.$refs.scroll.finishPullUp()
				})
			},
			//事件监听
			tabClick(index){
				switch(index){
					case 0:
						this.currentType = 'pop'
						break;
					case 1:
						this.currentType = 'new'
						break;
					case 2:
						this.currentType = 'sell'
				}
				this.$refs.tabControl1.currentIndex = index;
				this.$refs.tabControl2.currentIndex = index;
			},

			ContentScroll(position){
				//判断BackTo是否显示
				this.listerIsShow(position)
				//判断tabControl是否吸顶
				this.isTabOffset = -(position).y > this.tabOffsetTop			
			},
			loadMore(){
				this.getHomeGoods(this.currentType);
			},
			swipeImageLoad(){
				this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
			}
		}
	}
</script>

<style scoped>
	@import "~assets/css/home.css";
	
	#home {
		height:100vh;
		background-color:#fff
	}
	
 	.tab-crotrol {
		position:relative;
		z-index:9;
		background-color:#fff;
		
	}
	.content {
		overflow:hidden;
		position:absolute;
		left:0;
		right:0;
		top:44px;
		bottom:50px;
	}





</style>
