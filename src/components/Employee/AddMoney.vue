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
            <b-form-input v-model="money" required> </b-form-input>
          </b-form-group>

          <b-button id="btn" type="submit" variant="primary">Nạp tiền</b-button>
        </b-form>
      </div>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            number:'',
            money:''
        }
    },
    methods:{
        onAddMoney(evt){
            evt.preventDefault();

            axios
            .post("http://localhost:3000/employee/addmoney", {
                Number: this.number,
                Money: this.money
            })
            .then(function(response) {
            console.log(response.data);
            })
            .catch(function(error) {
            console.log(error);
            });
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