import Vue from 'vue'
import Vuex from 'vuex'
import actions from './store/actions.js'
import mutations from './store/mutations.js'
import getters from './store/getters.js'


Vue.use(Vuex)

// const state = {
// 	cartList:[]
// }

export default new Vuex.Store({
	state:{
		cartList:[]
	},
	actions,
	mutations,
	getters

})

