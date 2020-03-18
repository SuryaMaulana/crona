import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Main from './components/Main.vue'
import Contact from './components/Contact.vue'
import NotFound from './components/NotFound.vue'
import Hotline from './components/Hotline.vue'
import News from './components/News.vue'

Vue.use(VueRouter)

const routes = [
	{ path: '/', component: Main },
	{ path: '/kontak', component: Contact },
	{ path: '/hotline', component: Hotline },
	{ path: '/news', component: News },
	{ path: '/404', component: NotFound },
	{ path: '*', redirect: '/404' }
]

Vue.config.productionTip = false

const router = new VueRouter({
	routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
