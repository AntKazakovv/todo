import Vue from 'vue'
import Router from 'vue-router'
import List from './components/List.vue'
import EditNote from './components/EditNote.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'list',
            component: List
        },
        {
            path: '/edit',
            name: 'createNote',
            component: EditNote
        },
        {
            path: '/edit/:id',
            name: 'editNote',
            component: EditNote
        }
    ]
})