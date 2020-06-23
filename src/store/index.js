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
        UserID: 0,
        Number: '',
        TakeTrans: [],
        SendTrans: [],
        DebtTrans: [],
        EmployeeList: [],
        CustomerList: [],
        PartnerTrans: [],
        PartnerTransByTime: [],
        PartnerTransByName: [],
        PartnerStatisticMoney: 0,
        SavingAcc: [],
        SpendingAcc: [],
        TakerList: [],
        CreditorList: [],
        DebtorList: []
    },
    getters: {
        GetFullName(state) {
            return state.fullName;
        },
        Number(state) {
            return state.Number;
        },
        TakeTrans(state) {
            return state.TakeTrans;
        },
        SendTrans(state) {
            return state.SendTrans;
        },
        DebtTrans(state) {
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
        },
        PartnerStatisticMoney(state) {
            return state.PartnerStatisticMoney;
        },
        SavingAcc(state) {
            return state.SavingAcc;
        },
        SpendingAcc(state) {
            return state.SpendingAcc;
        },
        TakerList(state) {
            return state.TakerList;
        },
        DebtorList(state) {
            return state.DebtorList;
        },
        CreditorList(state) {
            return state.CreditorList;
        }
    },
    mutations: {
        LOGIN(state) {
            state.accessToken = localStorage.getItem('access_token');
            state.refreshToken = localStorage.getItem('refresh_token');
            state.fullName = localStorage.getItem('full_name');
            state.UserID = localStorage.getItem('userid');
            state.Number = localStorage.getItem('number');
        },

        LOGOUT(state) {
            state.accessToken = '';
            state.refreshToken = '';
            state.fullName = '';
            state.UserID = '';
            state.Number = '';
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
        DELETE_EMPLOYEE(state, payload) {
            const index = state.EmployeeList.findIndex(employee => employee.ID === payload);
            state.EmployeeList.splice(index, 1);
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

        PARTNER_STATISTIC_MONEY(state, payload) {
            state.PartnerStatisticMoney = payload;
        },

        //Customer
        SAVING_ACC(state, payload) {
            state.SavingAcc = payload;
        },
        SPENDING_ACC(state, payload) {
            state.SpendingAcc = payload;
        },
        TAKER_LIST(state, payload) {
            state.TakerList = payload;
        },
        ADD_TAKER(state, payload) {
            state.TakerList = [
                ...state.TakerList,
                payload
            ];
        },
        REMOVE_TAKER(state, payload) {
            state.TakerList = payload;
        },
        UPDATE_TAKER(state, payload) {
            state.TakerList = payload;
        },
        ADD_DEBTOR(state, payload) {
            state.DebtorList = [
                ...state.DebtorList,
                payload
            ];
        },
        REMOVE_DEBT(state, payload) {
            state.DebtorList = payload;
        },
        DEBTOR_LIST(state, payload) {
            state.DebtorList = payload;
        },
        CREDITOR_LIST(state, payload) {
            state.CreditorList = payload;
        },

        //OTHER
        CUSTOMER_LIST(state, payload) {
            state.CustomerList = payload;
        },
        CORRECT_USERNAME_PW(state, payload) {
            state.correctUnPw = payload;
        }

    },
    actions: {
        //LOGIN
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
                localStorage.setItem('userid', response.data.user.UserID);
                if (loginInfo.role === 'customer') {
                    localStorage.setItem('number', response.data.user.Number);
                }
                ctx.commit('LOGIN');
            } else if (response.data.authenticated === false) {
                ctx.commit('CORRECT_USERNAME_PW', false);
            }

        },

        logout(ctx) {
            localStorage.setItem('access_token', '');
            localStorage.setItem('refresh_token', '');
            localStorage.setItem('full_name', '');
            localStorage.setItem('userid', '');
            localStorage.setItem('number', '');
            ctx.commit('LOGOUT');
        },

        //EMPLOYEE
        //tạo tk khách
        async addCustomer(ctx, customer) {
            const response = await axios.post('http://localhost:3000/employee/create-acc', customer, {
                headers: {
                    'x-access-token': localStorage.getItem('access_token')
                }
            });
            customer.ID = response.data.UserAcc;
            ctx.commit('ADD_CUSTOMER', customer);
        },
        //tạo tk tiết kiệm
        async addSavingAcc(ctx, username) {
            await axios.post('http://localhost:3000/employee/create-savingacc', { UserName: username }, {
                headers: {
                    'x-access-token': localStorage.getItem('access_token')
                }
            });
        },
        //nạp tiền vào tài khoản thanh toán
        async addMoneySpendingAcc(ctx, data) {
            await axios.post('http://localhost:3000/employee/addmoney-spendingacc', data, {
                headers: {
                    'x-access-token': localStorage.getItem('access_token')
                }
            });
        },
        //nạp tiền vào tài khoản tiết kiệm
        async addMoneySavingAcc(ctx, data) {
            await axios.post('http://localhost:3000/employee/addmoney-savingacc', data, {
                headers: {
                    'x-access-token': localStorage.getItem('access_token')
                }
            });
        },
        //giao dịch nhân tiền
        async takeTrans(ctx, number) {
            const response = await axios.post('http://localhost:3000/employee/history/take', { Number: number }, {
                headers: {
                    'x-access-token': localStorage.getItem('access_token')
                }
            });
            ctx.commit('TAKE_TRANS', response.data);
        },
        //giao dịch gửi tiền
        async sendTrans(ctx, number) {
            const response = await axios.post('http://localhost:3000/employee/history/send', { Number: number }, {
                headers: {
                    'x-access-token': localStorage.getItem('access_token')
                }
            });
            ctx.commit('SEND_TRANS', response.data);
        },
        //giao dịch nhắc nợ
        async debtTrans(ctx, number) {
            const response = await axios.post('http://localhost:3000/employee/history/debt', { Number: number }, {
                headers: {
                    'x-access-token': localStorage.getItem('access_token')
                }
            });
            ctx.commit('DEBT_TRANS', response.data);
        },

        //ADMIN
        //toàn bộ nhân viên
        async employeeList(ctx) {
            const response = await axios.get('http://localhost:3000/admin/employee-list', {
                headers: {
                    'x-access-token': localStorage.getItem('access_token')
                }
            });
            ctx.commit('EMPLOYEE_LIST', response.data);
        },
        //thêm nhân viên
        async addEmployee(ctx, employee) {
            const response = await axios.post('http://localhost:3000/admin/add-employee', employee, {
                headers: {
                    'x-access-token': localStorage.getItem('access_token')
                }
            });
            employee.ID = response.data.ID;
            employee.UserPassword = response.data.UserPassword;
            ctx.commit('ADD_EMPLOYEE', employee);
        },
        //xóa nhân viên
        async deleteEmployee(ctx, id) {
            await axios.post('http://localhost:3000/admin/delete-employee', { ID: id }, {
                headers: {
                    'x-access-token': localStorage.getItem('access_token')
                }
            });
            ctx.commit('DELETE_EMPLOYEE', id);
        },
        //cập nhật thông tin nhân viên
        async updateEmployee(ctx, info) {
            await axios.post('http://localhost:3000/admin/update-employee', info, {
                headers: {
                    'x-access-token': localStorage.getItem('access_token')
                }
            });
        },
        //giao dịch với tất cả đối tác
        async partnerTrans(ctx) {
            const response = await axios.get('http://localhost:3000/admin/partner/all', {
                headers: {
                    'x-access-token': localStorage.getItem('access_token')
                }
            });
            ctx.commit('PARTNER_TRANS', response.data);
        },
        //giao dịch trong khoảng thời gian
        async partnerTransByTime(ctx, time) {
            const response = await axios.post('http://localhost:3000/admin/partner/by-time', time, {
                headers: {
                    'x-access-token': localStorage.getItem('access_token')
                }
            });
            ctx.commit('PARTNER_TRANS_TIME', response.data);
        },
        //giao dịch với đối tác chỉ định cụ thể
        async partnerTransByName(ctx, name) {
            const response = await axios.post('http://localhost:3000/admin/partner/by-name', { PartnerBank: name }, {
                headers: {
                    'x-access-token': localStorage.getItem('access_token')
                }
            });
            ctx.commit('PARTNER_TRANS_NAME', response.data);
        },
        //tổng số tiền đã giao dịch với đối tác chỉ định cụ thể
        async partnerStatisticMoney(ctx, name) {
            const response = await axios.post('http://localhost:3000/admin/partner/statistic-money', { PartnerBank: name }, {
                headers: {
                    'x-access-token': localStorage.getItem('access_token')
                }
            });
            ctx.commit('PARTNER_STATISTIC_MONEY', response.data);
        },


        //CUSTOMER
        //liệt kê tài khoản thanh toán
        async spendingAcc(ctx, id) {
            const response = await axios.post('http://localhost:3000/customer/account/spending', { UserID: id }, {
                headers: {
                    'x-access-token': localStorage.getItem('access_token')
                }
            });
            ctx.commit('SPENDING_ACC', response.data);
        },
        //liệt kê tài khoản tiết kiệm
        async savingAcc(ctx, id) {
            const response = await axios.post('http://localhost:3000/customer/account/saving', { UserID: id }, {
                headers: {
                    'x-access-token': localStorage.getItem('access_token')
                }
            });
            ctx.commit('SAVING_ACC', response.data);
        },
        //liệt kê danh sách người nhận
        async takerList(ctx, id) {
            const response = await axios.post('http://localhost:3000/customer/takerlist', { UserID: id }, {
                headers: {
                    'x-access-token': localStorage.getItem('access_token')
                }
            });
            ctx.commit('TAKER_LIST', response.data);
        },
        //thêm người nhận
        async addTaker(ctx, info) {
            const response = await axios.post('http://localhost:3000/customer/takerlist/add', info, {
                headers: {
                    'x-access-token': localStorage.getItem('access_token')
                }
            });
            ctx.commit('ADD_TAKER', response.data);
        },
        //xóa người nhận - chưa làm
        async removeTaker(ctx, id) {
            const response = await axios.post('http://localhost:3000/customer/takerlist/delete', { ID: id }, {
                headers: {
                    'x-access-token': localStorage.getItem('access_token')
                }
            });
            ctx.commit('REMOVE_TAKER', response.data);
        },
        //chỉnh sửa thông tin người nhận - chưa làm
        async updateTaker(ctx, info) {
            const response = await axios.post('http://localhost:3000/customer/takerlist/update', info, {
                headers: {
                    'x-access-token': localStorage.getItem('access_token')
                }
            });
            ctx.commit('UPDATE', response.data);
        },
        //thêm con nợ
        async addDebtor(ctx, info) {
            const response = await axios.post('http://localhost:3000/customer/reminddebt/create', info, {
                headers: {
                    'x-access-token': localStorage.getItem('access_token')
                }
            });
            ctx.commit('ADD_DEBTOR', response.data);
        },
        //xóa nhắc nợ - chưa làm
        async removeDebt(ctx, id) {
            const response = await axios.post('http://localhost:3000/customer/reminddebt/delete', { ID: id }, {
                headers: {
                    'x-access-token': localStorage.getItem('access_token')
                }
            });
            ctx.commit('REMOVE_DEBT', response.data);
        },
        //danh sách con nợ
        async debtorList(ctx, id) {
            const response = await axios.post('http://localhost:3000/customer/reminddebt/mydebtorlist', { UserID: id }, {
                headers: {
                    'x-access-token': localStorage.getItem('access_token')
                }
            });
            ctx.commit('DEBTOR_LIST', response.data);
        },
        //danh sách chủ nợ
        async creditorList(ctx, id) {
            const response = await axios.post('http://localhost:3000/customer/reminddebt/mycreditorlist', { UserID: id }, {
                headers: {
                    'x-access-token': localStorage.getItem('access_token')
                }
            });
            ctx.commit('CREDITOR_LIST', response.data);
        },
        //giao dịch nhân tiền
        async takeTransCustomer(ctx, id) {
            const response = await axios.post('http://localhost:3000/customer/history/take', { UserID: id }, {
                headers: {
                    'x-access-token': localStorage.getItem('access_token')
                }
            });
            ctx.commit('TAKE_TRANS', response.data);
        },
        //giao dịch gửi tiền
        async sendTransCustomer(ctx, id) {
            const response = await axios.post('http://localhost:3000/customer/history/send', { UserID: id }, {
                headers: {
                    'x-access-token': localStorage.getItem('access_token')
                }
            });
            ctx.commit('SEND_TRANS', response.data);
        },
        //giao dịch nhắc nợ
        async debtTransCustomer(ctx, id) {
            const response = await axios.post('http://localhost:3000/customer/history/debt', { UserID: id }, {
                headers: {
                    'x-access-token': localStorage.getItem('access_token')
                }
            });
            ctx.commit('DEBT_TRANS', response.data);
        },
        //chuyển tiền nội bộ
        async sendLocal(ctx, data) {
            const response = await axios.post('http://localhost:3000/customer/transaction', data.transaction, {
                headers: {
                    'x-otp-code': data.otpCode
                }
            });
            ctx.commit('SEND_TRANS', response.data.transInfo);
        },
        //gửi mã otp
        async sendOTPCode(ctx, number) {
            await axios.post('http://localhost:3000/customer/trans/otp', { Number: number }, {
                headers: {
                    'x-access-token': localStorage.getItem('access_token')
                }
            });
        },
        //chuyển tiền liên ngân hàng - PGP
        async sendInterPGP(ctx, data) {
            const response = await axios.post('http://localhost:3000/partner-pgp/add-money', data.transaction, {
                headers: {
                    'x-otp-code': data.otpCode,
                    'x-access-token': localStorage.getItem('access_token')
                }
            });
            ctx.commit('SEND_TRANS', response.data.transInfo);
        },
        //gửi mã otp
        async sendOTPCodePGP(ctx, number) {
            await axios.post('http://localhost:3000/partner-pgp/otp', { Number: number }, {
                headers: {
                    'x-access-token': localStorage.getItem('access_token')
                }
            });
        },
        //chuyển tiền liên ngân hàng - RSA
        async sendInterRSA(ctx, data) {
            const response = await axios.post('http://localhost:3000/partner-rsa/add-money', data.transaction, {
                headers: {
                    'x-otp-code': data.otpCode,
                    'x-access-token': localStorage.getItem('access_token')
                }
            });
            ctx.commit('SEND_TRANS', response.data.transInfo);
        },
        //gửi mã otp
        async sendOTPCodeRSA(ctx, number) {
            await axios.post('http://localhost:3000/partner-rsa/otp', { Number: number }, {
                headers: {
                    'x-access-token': localStorage.getItem('access_token')
                }
            });
        },
    },
    modules: {}
})