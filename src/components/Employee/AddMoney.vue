<template>
    <div class="add-money">
    
    <b-container>
      <div class="form">
        <b-form @submit="onAddMoney">
          <b-form-group label="Số tài khoản:">
            <b-form-input v-model="number" type="text" required>
            </b-form-input>
          </b-form-group>

          <b-form-group label="Số tiền cần nạp: ">
            <b-form-input v-model="money" required type="number"> </b-form-input>
          </b-form-group>


          <b-form-group>
            <b-form-select v-model="account" :options="accounts"></b-form-select>
          </b-form-group>

          <b-button id="btn" type="submit" variant="primary">Nạp tiền</b-button>
        </b-form>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
            number:'',
            money:'',
            account: null,
            accounts:[
              {value: null, text: 'chọn loại tài khoản'},
              {value: 'spending', text: 'tài khoản thanh toán'},
              {value: 'saving', text: 'tài khoản tiết kiệm'},
            ]
        }
    },
    methods:{
        onAddMoney(evt){
            evt.preventDefault();
            const data ={
              Number: this.number,
              Money: this.money
            };
            if(this.account ==='spending'){
              this.$store.dispatch('addMoneySpendingAcc', data);
            }
            else if(this.account === 'saving'){
              this.$store.dispatch('addMoneySavingAcc', data);
            }
            this.number = '';
            this.money = '';
        }
    }
}
</script>

<style scoped>
.form {
  margin: 50px auto;
  width: 500px;
  padding: 30px;
}
.add-money {
  position: relative;
}
</style>