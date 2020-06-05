import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/About.vue';
import Portfolio from '../components/Portfolio.vue';


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'About',
            component: About
        },
        {
            path: '/portfolio',
            name: 'Portfolio',
            component: Portfolio
        }
    ]
})