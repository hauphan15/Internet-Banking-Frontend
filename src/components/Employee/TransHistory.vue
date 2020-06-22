<template>
  <div>
    <b-container>
      <div class="form">
        <b-form @submit="onSubmit">
          <b-form-group label="Số tài khoản:">
            <b-form-input v-model="number" type="text" required>
            </b-form-input>
          </b-form-group>

          <b-button id="btn" type="submit" variant="primary"
            >Xem</b-button
          >
        </b-form>
      </div>
    </b-container>
    <h6>Nhận tiền</h6>
    <Table :items="TakeTransTable"></Table>
    <br>
    <h6>Chuyển tiền</h6>
    <Table :items="SendTransTable"></Table>
    <br>
    <h6>Nhắc nợ</h6>
    <Table :items="DebtTransTable"></Table>
  </div>
</template>

<script>
import Table from '../Table.vue';
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            number:''
        }
    },
    components:{
          Table
    },
    methods:{
        onSubmit(evt){
            evt.preventDefault();
            this.$store.dispatch('takeTrans',this.number);
            this.$store.dispatch('sendTrans',this.number);
            this.$store.dispatch('debtTrans',this.number);
        }
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