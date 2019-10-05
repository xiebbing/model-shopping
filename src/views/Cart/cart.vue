<template>
	<div class="cart">
		<!-- 导航 -->
		<nav-bar class="cart-nav">
			<div slot="center">购物车({{cartCount}})</div>
		</nav-bar>
		<!-- 商品列表 -->
		<cart-list></cart-list>
		<!-- 底部汇总 -->
		<cart-bottom></cart-bottom>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/navbar.vue'
	import CartList from './ChildComps/cartList.vue'
	import CartBottom from './ChildComps/cartBottom.vue'
	import {mapGetters} from 'vuex'
	export default {
		name:'Cart',
		data(){
			return {
				
			}
		},
		components:{
			NavBar,
			CartList,
			CartBottom
			
		},
		computed:{
			//映射store到局部对象
			...mapGetters(['cartCount','cartList'])
	
		}
		
	}
</script>

<style scoped>
	.cart {
		height:100vh;
	}
	.cart-nav {
		background-color:var(--color-tint);
		color:#fff;
		font-weight:bold;
	}
	
</style>
