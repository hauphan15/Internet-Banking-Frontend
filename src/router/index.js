import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import ( /* webpackChunkName: "register" */ '../views/Register.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ( /* webpackChunkName: "register" */ '../views/Login.vue')
    },
    {
        path: '/customer/dashboard',
        name: 'Dashboard',
        component: () =>
            import ( /* webpackChunkName: "register" */ '../views/view.customer/dashboard.vue')
    },
    {
        path: '/customer/debtor',
        name: 'NhacNo',
        component: () =>
            import ( /* webpackChunkName: "register" */ '../views/view.customer/nhacno.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router