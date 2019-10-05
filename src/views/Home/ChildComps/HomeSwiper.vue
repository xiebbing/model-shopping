<template>
	<van-swipe class="wrapper" :autoplay="3000" indicator-color="blue">
		<van-swipe-item class="dot" v-for="(item,index) in banners" :key="index">
			<a :href="item.link">
				<img class="wrapper-img" :src="item.image" @load="imageLoad" />
			</a>
		</van-swipe-item>
	</van-swipe>
</template>

<script>
	export default {
		name:'HomeSwiper',
		props:{
			banners:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return {
				isLoad:false
			}
		},
		methods:{
			imageLoad(){
				if(!this.isLoad){
					this.$emit('swipeImageLoad')
					this.isLoad = true
				}
				
			}	
		},
	
	}
</script>

<style scoped>
	.wrapper {
		float:flex;
		overflow:hidden;
		/* margin-top:5px; */
		width:100%;
		height:0;
		padding-bottom:52%;
		background: #ff00ff;
	}
	.dot {
		display:inline-block;
		float:flex;
	}
	.wrapper-img {
		display:block;
		/* padding-bottom:45%; */
		width:100%;
	}
	
</style>
