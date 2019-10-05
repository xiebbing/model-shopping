<template>
	<div class="tab-item" @click="btnClick()">
		<div v-if="!isActive">
			<slot name="item-icon"></slot>
		</div>
		<div v-else>
			<slot name="item-icon_active"></slot>
		</div>
		<div :style="activeStyle">
			<slot name="item-text"></slot>
		</div>
		
		
	</div>
	
</template>

<script>
	export default {
		props:{
			path:String,
			ActiveColor:{
				type:String,
				default:'red'
			}
		},
		data(){
			return {
				
			}
		},
		methods:{
			btnClick(){
				this.$router.replace(this.path)
				// console.log('itemClick')
			}
		},
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path) !== -1
			},
			activeStyle(){
				return this.isActive? {color:this.ActiveColor}:{}
			}
		},
	}
</script>

<style scoped>

	.tab-item {
		flex:1;
		text-align:center;
		height:49px;
		font-size:12px;
		margin-bottom:1px;
	}
	

	
</style>
