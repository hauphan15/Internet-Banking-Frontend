<template>
  <div class="register">
    <b-container>
      <div class="form">
        <b-form @submit="onRegister">
          <b-form-group>
              <b-alert v-if="isSucceed && isRegister" variant="success" show>Tạo tài khoản thành công</b-alert>
              <b-alert v-if="!isSucceed && isRegister" variant="danger" show>Tạo tài khoản thất bại</b-alert>
          </b-form-group>

          <b-form-group label="Tên đăng nhập:">
            <b-form-input v-model="form.username" type="text" required>
            </b-form-input>
          </b-form-group>

          <b-form-group label="Mật khẩu:">
            <b-form-input v-model="form.password" required type="password"> </b-form-input>
          </b-form-group>

          <b-form-group label="Xác nhận mật khẩu:">
            <b-form-input required  v-model="form.confirmpw" @input="notifyChange" type="password"> </b-form-input>
            <small v-if="!isMatch">Mật khẩu không khớp</small>
            <small v-else>Mật khẩu khớp</small>
          </b-form-group>

          <b-form-group label="Họ tên">
            <b-form-input v-model="form.fullname" required> </b-form-input>
          </b-form-group>

          <b-form-group label="Số điện thoại">
              <b-form-input v-model="form.phone" type="number" required> </b-form-input>
          </b-form-group>

          <b-form-group label="Email:">
              <b-form-input v-model="form.email" required> </b-form-input>
          </b-form-group>

          <b-form-group label="Ngày sinh:">
              <b-form-datepicker v-model="form.dob" placeholder="Ngày sinh" class="mb-2"></b-form-datepicker>
          </b-form-group>
    
          <b-button type="submit" variant="primary">Đăng ký tài khoản</b-button>
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
      form: {
        username: "",
        password: "",
        confirmpw:"",
        fullname: "",
        phone: "",
        email: "",
        dob:""
      },
      isMatch: false,
      isRegister: false,
    };
  },
  computed:{
      ...mapGetters([
        'isSucceed', 
        ])
  },
  methods: {
    onRegister(evt) {
        evt.preventDefault();

        const employee = {
          UserName: this.form.username,
          UserPassword: this.form.password,
          FullName: this.form.fullname,
          Phone: this.form.phone,
          Email: this.form.email,
          DoB: this.form.dob
        };
        this.$store.dispatch('addEmployee', employee);
        setTimeout(()=>{
                this.isRegister = true;
        }, 3000);

        setTimeout(()=>{
                this.isRegister = false;
        }, 6000);
    },
    notifyChange(){
        if(this.form.confirmpw === this.form.password){
            this.isMatch = true;
        }
        else{
            this.isMatch = false;
        }
    }

  },
};
</script>

<style scoped>
.form {
  margin: 50px auto;
  width: 500px;
  padding: 30px;
}
.register {
  position: relative;
}
</style>
