<template>
<div class="register">
    <Header></Header>
    <b-container>
    <div class="form">
    <b-form @submit="onRegister">

        <b-form-group label="Tên đăng nhập:">
            <b-form-input   v-model="form.username"  type="text" required>
            </b-form-input>
        </b-form-group>

        <b-form-group label="Mật khẩu:" >
            <b-form-input  v-model="form.password"  required >
            </b-form-input>
        </b-form-group>

        <b-form-group  label="Xác nhận mật khẩu:">
            <b-form-input  required >
            </b-form-input>
        </b-form-group>

       <b-form-group  label="Họ tên" >
            <b-form-input   v-model="form.fullname"  required >
            </b-form-input>
        </b-form-group>

       <b-form-group  label="Số điện thoại" >
            <b-form-input   v-model="form.phone"  required >
            </b-form-input>
        </b-form-group>

        <b-form-group  label="Email:" >
            <b-form-input   v-model="form.email"  required >
            </b-form-input>
        </b-form-group>

        <b-button id="btn" type="submit" variant="primary">Đăng ký tài khoản</b-button>
    </b-form>
  </div>
    </b-container>
    <Footer class="footer"></Footer>
</div>
</template>

<script>

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import axios from 'axios'


export default {
    name:'register',
    components:{
        Header,
        Footer
    },
     data() {
      return {
        form: {
            username:'',
            password:'',
            fullname:'',
            phone:'',
            email: '',
        },
      }
    },
    methods: {
      onRegister(evt) {
        evt.preventDefault();
        const body = {
            UserName: this.form.username,
            UserPassword: this.form.password,
            FullName: this.form.fullname,
            UserPhone: this.form.phone,
            UserEmail: this.form.email
        };
        axios
        .post('http://localhost:3000/employee/create-acc', {
            body
        })
        .then(function(response) {
            console.log(response.data);
        })
        .catch(function(error) {
            console.log(error);
        });
      }
    },
}
</script>

<style scoped>

.form{
    margin: 50px auto;
    width: 500px;
    padding: 30px;    
}
.register{
    position: relative;
}

footer{
    position: absolute;
    bottom: 0;
}
</style>