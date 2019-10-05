<template>
	<div class="good-list">
		<goods-item v-for="(item,index) in goods" :goods-item="item" :key="index"></goods-item>
	</div>
</template>

<script>
	import GoodsItem from './GoodsItem.vue'
	export default {
		name:'GoodsList',
		props:{
			goods:{
				type:Array,
				default(){
					return []
				}	
			}
		},
		components:{
			GoodsItem
		}
	}
</script>

<style scoped>
	.good-list{
		display:flex;
		flex-wrap:wrap;
		justify-content:space-around;
		padding:2px;
	}
</style>
