import Vue from 'vue'
import App from './App.vue'
import {store} from './store'
import routes from './routes'

new Vue({
  el: '#app',
  store,
  router: routes,
  render: h => h(App)
})
