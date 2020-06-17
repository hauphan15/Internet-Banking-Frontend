import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

        TakeTrans: [],
        SendTrans: [],
        DebtTrans: []
    },
    getters: {
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
    },
    mutations: {
        TAKE_TRANS(state, payload) {
            state.TakeTrans = payload;
        },

        SEND_TRANS(state, payload) {
            state.SendTrans = payload;
        },

        DEBT_TRANS(state, payload) {
            state.DebtTrans = payload;
        },

    },
    actions: {
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
    },
    modules: {}
})