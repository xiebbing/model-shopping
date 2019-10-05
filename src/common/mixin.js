import {debounce} from 'common/utills.js'
import BackTo from 'components/context/backTo/backTo.vue'

export const itemListerMixin = {
	data(){
		return {
			itemListener:null,
			newRefresh:null
		}
	},
	mounted(){
		this.newRefresh = debounce(this.$refs.scroll.refresh,100)
		//保存监听的函数
		this.itemListener = () => {
			this.newRefresh()
		}
		this.$bus.$on('itemImageLoad',this.itemListener)
		//2.获取tabControl的offsetTo
		// console.log('-----')
	}
}

export const backToMixin = {
	data(){
		return {
			backToShow:false,
		}
	},
	components:{
		BackTo
	},
	methods:{
		backClick(){
			this.$refs.scroll.scrollTo(0,0)	
		},
		listerIsShow(position){
			//判断BackTo是否显示
			this.backToShow = -(position).y > 1000
		}
	}
}