<template>
	<div class="goods-item" @click="itemClick">
		<img v-lazy="showImage" alt="" @load="imageLoad"/>
		<div class="goods-info">
			<p>{{goodsItem.title}}</p>
			<span class="price">{{goodsItem.price}}</span>
			<span class="collent">{{goodsItem.cfav}}</span>
			
		</div>
		
	</div>
</template>

<script>
	export default {
		name:'GoodsItem',
		props:{
			goodsItem:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		computed:{
			showImage(){
				return this.goodsItem.image || this.goodsItem.show.img
			}
		},
		methods:{
			imageLoad(){
				//1.这个方法是用于图片加载监听的发射，用来监听不同的组件
				// if(this.$route.path.indexOf('/home')){
				// 	this.$bus.$emit('HomeItemLoad')
				// } else if(this.$route.path.indexOf('/detail')){
				// 	this.$bus.$emit('DetailItemLoad')
				// }
				//2.这个是加载图片监听的发射，使用事件总线 $bus来完成非父子组件之间的数据传递
				this.$bus.$emit('itemImageLoad')
			},
			itemClick(){
				//方法1，通过路由传递id
				return this.$router.push('/detail/' + this.goodsItem.iid)
				//方法2.通过query传递id
				// this.$router.push({
				// 	path:'/detail',
				// 	query:{
				// 		iid:this.goodsItem.iid
				// 	}
				// })
			}
		}
	}
</script>

<style scoped>
	.goods-item {
		padding-bottom:40px;
		position:relative;
		/* height:50px; */
		width:48%;
	}
	.goods-item img {
		width:100%;
		border-radius:5px;
	}
	.goods-info {
		font-size:12px;
		position:absolute;
		bottom:5px;
		left:0;
		right:0;
		overflow:hidden;
		text-align:center;
	}
	.goods-info p {
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
		margin-bottom:3px;
	}
	.goods-info .price {
		color:var(--color-high-text);
		margin-right:20px;
	}
	.goods-info .collect {
		position:relative;
	}
	.goods-info .collect::before {
		content:'';
		position:absolute;
		left:-15px;
		width:14px;
		height:14px;
		background:url("~assets/img/home/shoucang_shixin.svg");
	}
</style>
