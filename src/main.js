import Vue from 'vue'
import App from './App.vue'
import {store} from './store'
import routes from './routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUserSecret, faPlus, faTrash, faSave, faTrashAlt } from '@fortawesome/free-solid-svg-icons'


library.add(faUserSecret, faPlus, faTrash, faSave, faTrashAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router: routes,
  render: h => h(App)
})
