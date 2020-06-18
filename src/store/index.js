import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        correctUnPw: true,
        accessToken: '',
        refreshToken: '',
        fullName: '',
        user: {},
        TakeTrans: [],
        SendTrans: [],
        DebtTrans: [],
        EmployeeList: [],
        CustomerList: [],
        PartnerTrans: [],
        PartnerTransByTime: [],
        PartnerTransByName: []
    },
    getters: {
        //lấy full name
        GetFullName(state) {
            return state.fullName;
        },
        //giao dịch nhân tiền
        TakeTransTable(state) {
            return state.TakeTrans;
        },
        //giao dịch gửi tiền
        SendTransTable(state) {
            return state.SendTrans;
        },
        //giao dịch nhắc nợ
        DebtTransTable(state) {
            return state.DebtTrans;
        },
        EmployeeList(state) {
            return state.EmployeeList;
        },
        CustomerList(state) {
            return state.CustomerList;
        },
        correctUnPw(state) {
            return state.correctUnPw;
        },
        PartnerTrans(state) {
            return state.PartnerTrans;
        },
        PartnerTransByTime(state) {
            return state.PartnerTransByTime;
        },
        PartnerTransByName(state) {
            return state.PartnerTransByName;
        }
    },
    mutations: {
        LOGIN(state, payload) {
            state.accessToken = localStorage.getItem('access_token');
            state.refreshToken = localStorage.getItem('refresh_token');
            state.fullName = localStorage.getItem('full_name');
            state.user = payload;
        },

        LOGOUT(state) {
            state.accessToken = '';
            state.refreshToken = '';
            state.fullName = '';
        },

        //employee
        ADD_CUSTOMER(state, payload) {
            state.CustomerList = [
                ...state.CustomerList,
                payload
            ];
        },

        TAKE_TRANS(state, payload) {
            state.TakeTrans = payload;
        },

        SEND_TRANS(state, payload) {
            state.SendTrans = payload;
        },

        DEBT_TRANS(state, payload) {
            state.DebtTrans = payload;
        },

        //admin
        EMPLOYEE_LIST(state, payload) {
            state.EmployeeList = payload;
        },

        ADD_EMPLOYEE(state, payload) {
            state.EmployeeList = [
                ...state.EmployeeList,
                payload
            ];
        },

        PARTNER_TRANS(state, payload) {
            state.PartnerTrans = payload;
        },
        PARTNER_TRANS_NAME(state, payload) {
            state.PartnerTransByName = payload;
        },
        PARTNER_TRANS_TIME(state, payload) {
            state.PartnerTransByTime = payload;
        },






        CUSTOMER_LIST(state, payload) {
            state.CustomerList = payload;
        },

        CORRECT_USERNAME_PW(state, payload) {
            state.correctUnPw = payload;
        }

    },
    actions: {
        //login
        async login(ctx, loginInfo) {
            var role;
            if (loginInfo.role === 'employee') {
                role = 'employee-login';
            } else if (loginInfo.role === 'admin') {
                role = 'admin-login';
            } else if (loginInfo.role === 'customer') {
                role = 'login';
            }
            const response = await axios.post(`http://localhost:3000/login/${role}`, {
                UserName: loginInfo.UserName,
                UserPassword: loginInfo.UserPassword
            });
            if (response.data.authenticated) {
                localStorage.setItem('access_token', response.data.accessToken);
                localStorage.setItem('refresh_token', response.data.refreshToken);
                localStorage.setItem('full_name', response.data.user.FullName);
                ctx.commit('LOGIN', response.data.user);
            } else if (response.data.authenticated === false) {
                ctx.commit('CORRECT_USERNAME_PW', false);
            }

        },

        logout(ctx) {
            localStorage.setItem('access_token', '');
            localStorage.setItem('refresh_token', '');
            localStorage.setItem('full_name', '');
            ctx.commit('LOGOUT');
        },
        //EMPLOYEE
        //tạo tk khách
        async addCustomer(ctx, customer) {
            const response = await axios.post('http://localhost:3000/employee/create-acc', customer);
            customer.ID = response.data.UserAcc;
            ctx.commit('ADD_CUSTOMER', customer);
        },
        //giao dịch nhân tiền
        async takeTrans(ctx, number) {
            const response = await axios.post('http://localhost:3000/employee/history/take', { Number: number });
            ctx.commit('TAKE_TRANS', response.data);
        },
        //giao dịch gửi tiền
        async sendTrans(ctx, number) {
            const response = await axios.post('http://localhost:3000/employee/history/send', { Number: number });
            ctx.commit('SEND_TRANS', response.data);
        },
        //giao dịch nhắc nợ
        async debtTrans(ctx, number) {
            const response = await axios.post('http://localhost:3000/employee/history/debt', { Number: number });
            ctx.commit('DEBT_TRANS', response.data);
        },

        //ADMIN
        //toàn bộ nhân viên
        async employeeList(ctx) {
            const response = await axios.get('http://localhost:3000/admin/employee-list');
            ctx.commit('EMPLOYEE_LIST', response.data);
        },
        //thêm nhân viên
        async addEmployee(ctx, employee) {
            const response = await axios.post('http://localhost:3000/admin/add-employee', employee);
            employee.ID = response.data.ID;
            employee.UserPassword = response.data.UserPassword;
            ctx.commit('ADD_EMPLOYEE', employee);
        },
        //xóa nhân viên
        async deleteEmployee(ctx, id) {
            const response = await axios.post('http://localhost:3000/admin/delete-employee', { ID: id });
            ctx.commit('EMPLOYEE_LIST', response.data);
        },
        //giao dịch với tất cả đối tác
        async partnerTrans(ctx) {
            const response = await axios.get('http://localhost:3000/admin/partner/all');
            ctx.commit('PARTNER_TRANS', response.data);
        },
        //giao dịch trong khoảng thời gian
        async partnerTransByTime(ctx, time) {
            const response = await axios.post('http://localhost:3000/admin/partner/by-time', time);
            ctx.commit('PARTNER_TRANS_TIME', response.data);
        },
        //giao dịch với đối tác chỉ định cụ thể
        async partnerTransByName(ctx, name) {
            const response = await axios.post('http://localhost:3000/admin/partner/by-name', { PartnerBank: name });
            ctx.commit('PARTNER_TRANS_NAME', response.data);
        },
    },
    modules: {}
})