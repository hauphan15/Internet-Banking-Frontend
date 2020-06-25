<template>
    <div>
        <br>
        <h6>Danh sách con nợ</h6>
        <Table :items="DebtorList"></Table>

        <h6>Danh sách chủ nợ</h6>
        <Table :items="CreditorList"></Table>
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
        this.$store.dispatch('debtorList',localStorage.getItem('userid'));
        this.$store.dispatch('creditorList',localStorage.getItem('userid'));
    },
    computed: {
        ...mapGetters([
            'DebtorList',
            'CreditorList'
            ])
    }
}
</script>

<style scroped>
.form{
    margin:50px auto;
    width: 400px;
}
</style>