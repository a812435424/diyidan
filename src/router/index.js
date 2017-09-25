import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index/Index'
import Message from '@/components/Message/Message'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Index',
        component: Index
    }, {
        path: '/Message',
        name: 'Message',
        component: Message
    }],
    linkActiveClass: 'active'
})