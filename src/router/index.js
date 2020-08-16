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
        name: 'home',
        meta: { requiresAuth: true },
        component: () =>
            import ( /* webpackChunkName: "home" */ '../views/Admin/Home.vue'),
    },
    {
        path: '/admin/createEmployeeAcc',
        name: 'createEmployeeAcc',
        meta: { requiresAuth: true },
        component: () =>
            import ( /* webpackChunkName: "createEmployeeAcc" */ '../views/Admin/CreateEmployeeAcc.vue'),
    },
    {
        path: '/admin/manageEmployee',
        name: 'manageEmployee',
        meta: { requiresAuth: true },
        component: () =>
            import ( /* webpackChunkName: "manageEmployee" */ '../views/Admin/ManageEmployee.vue'),
    },
    {
        path: '/admin/partnerTrans',
        name: 'partnerTrans',
        meta: { requiresAuth: true },
        component: () =>
            import ( /* webpackChunkName: "partnerTrans" */ '../views/Admin/PartnerTrans.vue'),
    },
    {
        path: '/employee',
        name: 'employee',
        meta: { requiresAuth: true },
        component: () =>
            import ( /* webpackChunkName: "employee" */ '../views/Employee/Home.vue'),
    },
    {
        path: '/employee/createCustomerAcc',
        name: 'createCustomerAcc',
        meta: { requiresAuth: true },
        component: () =>
            import ( /* webpackChunkName: "createCustomerAcc" */ '../views/Employee/CreateCustomerAcc.vue'),
    },
    {
        path: '/employee/addMoney',
        name: 'addMoney',
        meta: { requiresAuth: true },
        component: () =>
            import ( /* webpackChunkName: "addMoney" */ '../views/Employee/AddMoney.vue'),
    },
    {
        path: '/employee/createSavingAcc',
        name: 'createSavingAcc',
        meta: { requiresAuth: true },
        component: () =>
            import ( /* webpackChunkName: "createSavingAcc" */ '../views/Employee/CreateSavingAcc.vue'),
    },
    {
        path: '/employee/transHistory',
        name: 'transHistory',
        meta: { requiresAuth: true },
        component: () =>
            import ( /* webpackChunkName: "transHistory" */ '../views/Employee/TransHistory.vue')
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
        path: '/customer/remove-account',
        name: 'remove',
        meta: { requiresAuth: true },
        component: () =>
            import ( /* webpackChunkName: "remove" */ '../views/Customer/RemoveAcc.vue')
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