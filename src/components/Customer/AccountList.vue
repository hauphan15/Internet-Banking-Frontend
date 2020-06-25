<template>
    <div>
        <br>
        <h6>Tài khoản thanh toán</h6>
        <Table :items="SpendingAcc"></Table>

        <h6>Tài khoản tiết kiệm</h6>
        <Table :items="SavingAcc"></Table>

    </div>
</template>

<script>
import Table from '../Table.vue'
import { mapGetters } from 'vuex';

export default {
    components:{
        Table
    },
    mounted() {
        this.$store.dispatch('spendingAcc',localStorage.getItem('userid'));
        this.$store.dispatch('savingAcc',localStorage.getItem('userid'));
    },
    computed: {
        ...mapGetters([
            'SpendingAcc',
            'SavingAcc',
            'User'
            ])
    },
}
</script>