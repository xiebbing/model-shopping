<template>
	<tab-bar>
		<tab-bar-item path="/home" ActiveColor="yellow">
			<img slot="item-icon" src="~assets/img/tabbar/shouye.svg" alt="">
			<img slot="item-icon_active" src="~assets/img/tabbar/h_shouye.svg" alt="">
			<div slot="item-text">首页</div>
		</tab-bar-item>
			
		<tab-bar-item path="/category" ActiveColor="blue">
			<img slot="item-icon" src="~assets/img/tabbar/fenlei.svg" alt="">
			<img slot="item-icon_active" src="~assets/img/tabbar/h_fenlei.svg" alt="">
			<div slot="item-text">分类</div>
		</tab-bar-item>
			
		<tab-bar-item path="/cart" ActiveColor="deeppink">
			<img slot="item-icon" src="~assets/img/tabbar/gouwu.svg" alt="">
			<img slot="item-icon_active" src="~assets/img/tabbar/h_gouwu.svg" alt="">
			<div slot="item-text">购物车</div>
		</tab-bar-item>
			
		<tab-bar-item path="/profile" ActiveColor="pink">
			<img slot="item-icon" src="~assets/img/tabbar/wode.svg" alt="">
			<img slot="item-icon_active" src="~assets/img/tabbar/h_wode.svg" alt="">
			<div slot="item-text">我的</div>
		</tab-bar-item>
	</tab-bar>
</template>

<script>
	import TabBarItem from 'components/common/Tabbar/TabbarItem.vue'
	import TabBar from 'components/common/Tabbar/Tabbar.vue'
	export default {
		name:'mainTabbar',
		components:{
			TabBar,
			TabBarItem,
		}
	}
</script>

<style>
	.tab-item img {
		width:24px;
		height:24px;
	}
</style>
