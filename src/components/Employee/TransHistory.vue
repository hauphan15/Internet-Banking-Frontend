<template>
  <div>
    <b-container>
      <div class="form">
        <b-form @submit="onSubmit">
          <b-form-group>
              <b-alert v-if="!isSucceed && isClick" variant="danger" show>{{ErrorMessage}}</b-alert>
          </b-form-group>

          <b-form-group label="Số tài khoản:">
            <b-form-input v-model="number" type="number" required>
            </b-form-input>
          </b-form-group>

          <b-button id="btn" type="submit" variant="primary">Xem</b-button>
        </b-form>
      </div>
    </b-container>
    <h6>Nhận tiền</h6>
    <Table :items="TakeTrans"></Table>
    <br>
    <h6>Chuyển tiền</h6>
    <Table :items="SendTrans"></Table>
    <br>
    <h6>Nhắc nợ</h6>
    <Table :items="DebtTrans"></Table>
  </div>
</template>

<script>
import Table from '../Table.vue';
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            number:'',
            isClick: false
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

            setTimeout(()=>{
                this.isClick = true;
            }, 3000);

            setTimeout(()=>{
                    this.isClick = false;
            }, 6000);
        }
    },
     computed: {
        ...mapGetters([
            'TakeTrans',
            'SendTrans',
            'DebtTrans',
            'isSucceed',
            'ErrorMessage'
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