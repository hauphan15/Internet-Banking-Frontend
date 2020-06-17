<template>
  <div class="register">
    <b-container>
      <div class="form">
        <b-form @submit="onRegister">
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
            <b-form-input v-model="form.phone" required> </b-form-input>
          </b-form-group>

          <b-form-group label="Email:">
            <b-form-input v-model="form.email" required> </b-form-input>
          </b-form-group>

          <b-button id="btn" type="submit" variant="primary"
            >Đăng ký tài khoản</b-button
          >
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
      form: {
        username: "",
        password: "",
        confirmpw:"",
        fullname: "",
        phone: "",
        email: ""
      },
      isMatch: false,
    };
  },
  methods: {
    onRegister(evt) {
      evt.preventDefault();

      axios
        .post("http://localhost:3000/employee/create-acc", {
                UserName: this.form.username,
                UserPassword: this.form.password,
                FullName: this.form.fullname,
                UserEmail: this.form.email,
                UserPhone: this.form.phone
        })
        .then(function(response) {
          console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    notifyChange(){
        console.log(this.form.confirmpw);
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
