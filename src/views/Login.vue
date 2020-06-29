<template>
  <div>
    <Header></Header>
    <div class="container">
      <h1 class="text-center mt-4">Đăng Nhập</h1>
      <div class="row myform">
        <form @submit="onLogin" class="col-sm-6 offset-3 p-2">
          <h6 class="checkempty mb-2" v-if="!correctUnPw">
            Sai username hoặc password
          </h6>

          <div class="form-group">
            <label for="exampleInputEmail1">Tên đăng nhập</label>
            <input required type="text" class="form-control" placeholder="UserName" v-model="form.username"/>
          </div>

          <div class="form-group">
            <label>Mật khẩu</label>
            <input required type="password" class="form-control" placeholder="Password" v-model="form.password"/>
          </div>

          <div class="form-group">
          <router-link to="/misspw">Quên mật khẩu</router-link>
          </div>

          <div class="form-check">
            <label class="form-check-label">
              <input type="radio" class="form-check-input"  value="admin" v-model="form.picker"/>
              Quản trị viên
            </label>
          </div>

          <div class="form-check">
            <label class="form-check-label">
              <input type="radio" class="form-check-input"  value="customer" v-model="form.picker"/>
              Khách hàng
            </label>
          </div>

          <div class="form-check">
            <label class="form-check-label">
              <input type="radio" class="form-check-input"  value="employee" v-model="form.picker"/>
              Nhân viên
            </label>
          </div>
          <br>
          <div class="form-group">
          <vue-recaptcha @verify="onVerify" sitekey="6LdOD6gZAAAAADZSN2jO2r60n2n2LlQwHVmDv4mV" :loadRecaptchaScript="true"></vue-recaptcha>
          </div>
          <h6 class="checkempty mt-1" v-if="showerror">Chưa check captcha!</h6>
          <hr/>
          <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-primary ">Đăng nhập</button>
          </div>
        </form>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from '../components/Footer.vue';
import VueRecaptcha from 'vue-recaptcha';
import { mapGetters } from 'vuex';

export default {
  name: "login",
  components: {
    Header,
    Footer,
    VueRecaptcha
  },
  computed:{
    ...mapGetters(['correctUnPw'])
  },
  data() {
    return {
      form: {
        username: "",
        password: "",
        picker: "",
      },
      showerror: false,
      checkcaptcha: false,
    };
  },
  methods: {
    onLogin(event){
      if(this.checkcaptcha) {
        event.preventDefault();
      const data={
        UserName: this.form.username,
        UserPassword: this.form.password,
        role: this.form.picker
      };
      this.$store.dispatch('login', data);

      setTimeout(() => { 
          this.$store.commit('CORRECT_USERNAME_PW', true); 
        }, 3000);

      setTimeout(() => { 
        this.$router.push(`/${this.form.picker}`); 
        }, 3000);
      
      }
      else {
        this.showerror = true;
      }
    },
    onVerify() {
      this.checkcaptcha = true;
      this.showerror = false;
    }
  },
};
</script>

<style>
.container{
  width: 600px;
}

.myform {
  margin-top: 50px;
  width: 631px;
}
.checkempty {
  color: red;
}
</style>
