<template>
    <div class="add-money">
    
    <b-container>
      <div class="form">
        <b-form @submit="onCreate">
          <b-form-group>
              <b-alert v-if="isSucceed && isRegister" variant="success" show>Tạo tài khoản thành công</b-alert>
              <b-alert v-if="!isSucceed && isRegister" variant="danger" show>Tạo tài khoản thất bại</b-alert>
              <b-alert v-if="!isSucceed && isRegister" variant="danger" show>{{ErrorMessage}}</b-alert>
          </b-form-group>

          <b-form-group label="Tên đăng nhập:">
              <b-form-input v-model="username" type="text" required></b-form-input>
          </b-form-group>

          <div class="d-flex justify-content-center">
                <b-button  type="submit" variant="primary">Tạo tài khoản</b-button>
          </div>
          <b-form-group v-if="SavingNumber!==''"  label="Số tài khoản tiết kiệm:">
              <b-form-input :value="SavingNumber" readonly></b-form-input>
          </b-form-group>
        </b-form>
      </div>
    </b-container>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    data() {
        return {
            username:'',
            isRegister: false
        }
    },
    computed:{
      ...mapGetters([
        'isSucceed', 
        'SavingNumber',
        'ErrorMessage'
        ])
    },
    methods:{
        onCreate(evt){
            evt.preventDefault();          
            this.$store.dispatch('addSavingAcc', this.username);

            setTimeout(()=>{
                this.isRegister = true;
            }, 3000);

            setTimeout(()=>{
                    this.isRegister = false;
            }, 6000);
        }
    }
}
</script>

<style scoped>
.form {
  margin: 50px auto;
  width: 400px;
  padding: 30px;
}
.add-money {
  position: relative;
}
</style>