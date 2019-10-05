<template>
	<div>
		<nav-bar>
			<div slot="left" class="go-back" @click="backClick">
				<img src="~assets/img/detail/fanhui.png" alt="">
			</div>
			<div slot="center" class="title">
				<div v-for="(item,index) in titles" 
				class="title-item" :class="{active:currentIndex === index}" @click="itemClick(index)">{{item}}</div> 
			</div>
		</nav-bar>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/navbar.vue'
	export default {
		name:'detail',
		components:{
			NavBar
		},
		data(){
			return {
				titles:['商品','参数','评论','推荐'],
				currentIndex:0
			}	
		},
		methods:{
			itemClick(index){
				this.currentIndex = index
				this.$emit('itemChange',index)
			},
			backClick(){
				this.$router.back()
			}
		}
	}
</script>

<style scoped>
	.title {
		display:flex;
		font-size:14px;
	}
	
	.title-item {
		flex:1;
	}
	.active {
		color:var(--color-high-text);
	}
	
	.go-back img {
		width:20px;
		height:20px;
		margin-top:12px;
	}
</style>
