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
        path: '/login',
        name: 'login',
        component: () =>
            import ( /* webpackChunkName: "login" */ '../views/Login.vue'),
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
        path: '/customer',
        name: 'customer',
        meta: { requiresAuth: true },
        component: () =>
            import ( /* webpackChunkName: "customer" */ '../views/Customer/Home.vue')
    },
    {
        path: '/customer/accountlist',
        name: 'accountlist',
        meta: { requiresAuth: true },
        component: () =>
            import ( /* webpackChunkName: "accountlist" */ '../views/Customer/AccountList.vue')
    },
    {
        path: '/customer/takerlist',
        name: 'takerlist',
        meta: { requiresAuth: true },
        component: () =>
            import ( /* webpackChunkName: "takerlist" */ '../views/Customer/TakerList.vue')
    },
    {
        path: '/customer/createdebtor',
        name: 'createdebtor',
        meta: { requiresAuth: true },
        component: () =>
            import ( /* webpackChunkName: "createdebtor" */ '../views/Customer/CreateDebtor.vue')
    },
    {
        path: '/customer/debtlist',
        name: 'debtlist',
        meta: { requiresAuth: true },
        component: () =>
            import ( /* webpackChunkName: "debtlist" */ '../views/Customer/DebtList.vue')
    },
    {
        path: '/customer/transaction-history',
        name: 'history',
        meta: { requiresAuth: true },
        component: () =>
            import ( /* webpackChunkName: "history" */ '../views/Customer/TransactionHistory.vue')
    },
    {
        path: '/customer/local-transaction',
        name: 'local',
        meta: { requiresAuth: true },
        component: () =>
            import ( /* webpackChunkName: "local" */ '../views/Customer/LocalTransaction.vue')
    },
    {
        path: '/customer/inter-transaction',
        name: 'inter',
        meta: { requiresAuth: true },
        component: () =>
            import ( /* webpackChunkName: "inter" */ '../views/Customer/InterTransaction.vue')
    },
    {
        path: '/customer/changepw',
        name: 'changepw',
        meta: { requiresAuth: true },
        component: () =>
            import ( /* webpackChunkName: "changepw" */ '../views/Customer/ChangePw.vue')
    },
    {
        path: '/misspw',
        name: 'misspw',
        component: () =>
            import ( /* webpackChunkName: "misspw" */ '../views/Customer/MissPw.vue')
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