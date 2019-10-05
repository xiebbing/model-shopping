<template>
	<div class="detail-bottom">
		<div class="bar-item bar-left">
			<div>
				<i class="icon service"><img src="~assets/img/detail/kefu.svg" alt="" /></i>
				<span class="text">客服</span>
			</div>
			<div>
				<i class="icon shop"><img src="~assets/img/detail/shop.svg" alt="" /></i>
				<span class="text">店铺</span>
			</div>
			<div>
				<i class="icon select"><img src="~assets/img/detail/shoucang.svg" alt="" /></i>
				<span class="text">收藏</span>
			</div>
		</div>
		<div class="bar-item bar-right">
			<div class="cart" @click="addToCart">加入购物车</div>
			<div class="buy">购买</div>
		</div>
		<!-- <sport-ball ref="ball" class="sport-ball"></sport-ball> -->
	</div>  
</template>

<script>
	export default {
		name:"detailBottom",
		methods:{
			addToCart(){
				this.$emit('addCart')
			}
		}
	}
</script>

<style scoped>
	.detail-bottom {
		width:100%;
		height:49px;
		background:#fff;
		position:relative;
		bottom:205px;
		line-height:8px;
		display:flex;
		text-align:center;
	}
	.bar-item {
		flex:1;
		display:flex;
	}
	.bar-item>div {
		flex:1;
	}
	.bar-left .text {
		font-size:13px;
	}
	.icon img {
		width:18px;
		height:18px;
	}
	.bar-left .icon {
		display:block;
		width:22px;
		height:22px;
		margin:6px auto 3px;
		/* background:url("~assets/img/detail/detail_bottom.png") 0 0/100%; */
	}
	.bar-left .service {
		background-position:0 -54px;
	}
	.bar-left .shop {
		background-position:0 -98px;
	}
	.bar-right {
		font-size:15px;
		color:#fff;
		line-height:58px;
	}
	.bar-right .cart {
		background-color:#ffe817;
		color:#333;
	}
	.bar-right .buy {
		background-color:#f69;
	}
	
</style>

