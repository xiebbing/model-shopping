<template>
		<van-swipe class="detail-wrapper" :autoplay="3000" indicator-color="blue">
			<van-swipe-item class="detail-dot" v-for="(item,index) in topImages" :key="index">
				<img :src="item" />
			</van-swipe-item>
		</van-swipe>
</template>

<script>
	export default {
		name:'detailSwiper',
		props:{
			topImages:{
				type:Array,
				default(){
					return []
				}
			}	
		},
		methods:{
			btnClick(){
				console.log(this.toImages)
			}
		}
	}
</script>

<style scoped>
	.detail-wrapper {
		float:flex;
		overflow:hidden;
		/* margin-top:5px; */
		width:100%;
		height:0;
		padding-bottom:100%;
		background: #ff00ff;
	}
	.detail-dot {
		display:inline-block;
		float:flex;
	}
	.detail-dot img {
		display:block;
		width:100%;
		height:65%;
	}
	
</style>
