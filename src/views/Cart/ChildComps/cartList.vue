<template>
	<div class="cart-list">
		<scroll class='cart-content'>
			<cart-item v-for="(item,index) in cartList" 
			:key="index" 
			:item-info="item"></cart-item>
			
		</scroll>
		
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	import Scroll from 'components/common/scroll/Scroll.vue'
	import CartItem from './cartItem.vue'
	export default {
		name:'cartList',
		computed:{
			...mapGetters(['cartList'])
		},
		components:{
			Scroll,
			CartItem
		}
	}
</script>

<style scoped>
	.cart-list {
		height:100%;
	}
	.cart-content {	
		position:absolute;
		left:0;
		right:0;
		top:44px;
		/* navtab+cartBottom的高 */
		bottom:94px; 
		overflow:hidden;
	}
</style>
