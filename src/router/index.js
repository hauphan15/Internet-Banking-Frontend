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
        path: '/employee',
        name: 'employee',
        component: () =>
            import ( /* webpackChunkName: "employee" */ '../views/Employee/Home.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ( /* webpackChunkName: "login" */ '../views/Login.vue')
    },
    {
        path: '/customer/dashboard',
        name: 'Dashboard',
        component: () =>
            import ( /* webpackChunkName: "Dashboard" */ '../view.customer/dashboard.vue')
    },
    {
        path: '/customer/nhacno',
        name: 'NhacNo',
        component: () =>
            import ( /* webpackChunkName: "NhacNo" */ '../view.customer/nhacno.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router