import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Posts from './components/Posts.vue'
import Contact from './components/Contact.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', component: Posts
  },
  {
    path: '/contact', component: Contact
  }

]

// passing defined constant routes to the property routes
const router = new VueRouter({ routes: routes})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
