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
        path: '/admin',
        name: 'admin',
        meta: { requiresAuth: true },
        component: () =>
            import ( /* webpackChunkName: "admin" */ '../views/Admin/Home.vue'),
    },
    {
        path: '/employee',
        name: 'employee',
        meta: { requiresAuth: true },
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

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!localStorage.access_token) {
            next({
                path: '/login',
                query: { retUrl: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next() // make sure to always call next()!
    }
})

export default router