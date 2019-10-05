<template>
	<div class="cart-bottom">
		<div class="cart-context">
			<check-box class="check-bottom" :is-checked="isSelectAll" @click.native="checkedAll"/>
			<span class="text">全选</span>
		</div>
		<div class="total">
			合计：{{totalPrice}}
		</div>
		<div class="settlement">
			去结算({{checkedLength}})
		</div>
		
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	import CheckBox from 'components/context/checkBox/CheckBox.vue'
	export default {
		name:'cartBottom',
		components:{
			CheckBox
		},
		
		computed:{
			...mapGetters(['cartList']),	
			totalPrice(){
				return '￥' + this.cartList.filter(item => {
					return item.checked
				}).reduce((preValue,item) => {
					return preValue + item.price * item.count
				},0).toFixed(2)
			},
			checkedLength(){
				return this.cartList.filter(item => item.checked).length
			},
			isSelectAll(){
				if(this.cartList.length === 0) return false
				// return !(this.cartList.filter(item => !item.checked).length)
				return !this.cartList.find(item => !item.checked)
			}
		},
		methods:{
			checkedAll(){
				if(this.isSelectAll){//全部选中
					this.cartList.forEach(item => item.checked = false)
				} else {
					this.cartList.forEach(item => item.checked = true)
					}
				}
			}
		}
	
</script>

<style scoped>
	.cart-bottom {
		display:flex;
		position:relative;
		height:44px;
		bottom:140px;
		background-color:#eee;	
		line-height:40px;
	}
	.check-bottom {
		width:22px;
		height:22px;
		line-height:20px;
		
	}
	.cart-context {
		display:flex;
		/* line-height:40px; */
		align-items:center;
		/* background:red;
		*  */
		width:60px;
	}
	.text {
		margin-left:0px;
	}
	.total {
		flex:1;
		margin-left:150px;
	}
	.settlement {
		width:90px;
		background:red;
		color:#fff;
		text-align:center;
		
		
	}
</style>
