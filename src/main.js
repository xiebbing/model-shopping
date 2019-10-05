import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import VueLazyLoad from'vue-lazyload'
import {Swipe,SwipeItem} from 'vant'
import store from './store'
// import Tabbar from './components/Tabbar/Tabbar.vue'
// import {Header} from 'mint-ui'
Vue.use(Swipe).use(SwipeItem);
Vue.use(VueLazyLoad);

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue();

new Vue({
	router,
	store,
  render: h => h(App)
}).$mount('#app')
