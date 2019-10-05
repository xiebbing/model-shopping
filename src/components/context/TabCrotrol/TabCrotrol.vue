<template>
	<div class="tab-crotrol">
		<div v-for="(item,index) in TextList" 
		class="tab-crotrol-item" 
		:class="{active:index === currentIndex}" @click="itemClick(index)">
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name:'TabCrotrol',
		props:{
			TextList:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return {
				currentIndex:0
			}
		},
		methods:{
			itemClick(index){
				this.currentIndex = index;
				this.$emit('tabClick',index)
			},
		}
	}
</script>

<style>
	.tab-crotrol {
		display:flex;
		text-align:center;
		height:41px;
		line-height:41px;
		font-size:13px;
		z-index:9;
		
	}
	
	.tab-crotrol-item {
		flex:1;
		
	}
	.active {
		color:var(--color-high-text);
		
		
	}
	.active span {
		padding:6px;
		border-bottom:3px solid var(--color-tint);
	}
</style>
