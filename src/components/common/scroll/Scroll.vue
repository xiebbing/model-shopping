<template>
	<div class="wrapper" ref="wrapper">
		<div>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	
	export default {
		name:'Scroll',
		props:{
			probeType:{
				type:Number,
				default:0
			},
			pullUpLoad:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return {
				scroll:null,
				message:'哈哈'
			}
		},

		mounted(){
			//创建BScroll对象
			this.scroll = new BScroll(this.$refs.wrapper,{
				click:true,
				probeType:this.probeType,
				pullUpLoad:this.pullUpLoad
			})
			//监听位置信息
			if(this.probeType === 2 || this.probeType === 3){
				this.scroll.on('scroll',(position) => {
					this.$emit('Scroll',position)
				})
			}
			
			//监听上拉加载事件
			if(this.pullUpLoad){
				this.scroll.on('pullingUp',() => {
					this.$emit('pullingUp')
				})
			}	
		},
		methods:{
			scrollTo(x,y,time=2000){
				this.scroll && this.scroll.scrollTo(x,y,time)
			},
			finishPullUp(){
				this.scroll.finishPullUp()
			},
			refresh(){
				this.scroll && this.scroll.refresh()
			},
			getSaveY(){
				return this.scroll ? this.scroll.y : 0
			}
		}
	}
</script>

<style>
</style>
