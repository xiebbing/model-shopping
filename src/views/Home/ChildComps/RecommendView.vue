<template>
	<div class="recommend">
		<div class="recommend-item" v-for="item in recommends">
			<a :href="item.link">
				<img  :src="item.image" alt=""/>
				<div>{{item.title}}</div>
			</a>
		</div>
		
		
	</div>
</template>

<script>
	export default {
		name:'Recommends',
		props:{
			recommends:{
				type:Array,
				default(){
					return []
				}
			}
		}	
	}
</script>

<style scoped>
	.recommend {
		display:flex;
		width:100%;
		padding:15px 0 30px;
		text-align:center;
		font-size:12px;
		border-bottom:8px solid #eee;
		
	}
	.recommend-item {
		flex:1;
		
		
		
	}
	.recommend-item img {
		width:50px;
		height:50px;
		margin-bottom:10px;
	}
</style>
