<template>
  <div>
    <br>
    <h6>Giao dịch nhận tiền</h6>
    <Table :items="TakeTrans"></Table>
    <br>
    <h6>Giao dịch chuyển tiền</h6>
    <Table :items="SendTrans"></Table>
    <br>
    <h6>Giao dịch nhắc nợ</h6>
    <Table :items="DebtTrans"></Table>
  </div>
</template>

<script>
import Table from '../Table.vue';
import { mapGetters } from 'vuex';

export default {
    components:{
          Table
    },
    mounted(){
        this.$store.dispatch('takeTransCustomer',localStorage.getItem('userid'));
        this.$store.dispatch('sendTransCustomer',localStorage.getItem('userid'));
        this.$store.dispatch('debtTransCustomer',localStorage.getItem('userid'));
    },
     computed: {
        ...mapGetters([
            'TakeTrans',
            'SendTrans',
            'DebtTrans'
            ])
 },
  }
</script>

<style scoped>
.form {
  margin: 50px auto;
  width: 500px;
  padding: 30px;
}
</style>