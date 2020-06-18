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
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="UserName"
              v-model="form.username"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Mật khẩu</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              v-model="form.password"
            />
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input
                type="radio"
                class="form-check-input"
                name="optradio"
                value="admin"
                v-model="form.picker"
              />Quản trị viên
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input
                type="radio"
                class="form-check-input"
                name="optradio"
                value="customer"
                v-model="form.picker"
              />Khách hàng
            </label>
          </div>
          <div class="form-check">
            <label class="form-check-label">
              <input
                type="radio"
                class="form-check-input"
                name="optradio"
                value="employee"
                v-model="form.picker"
              />Nhân viên
            </label>
          </div>
          <hr />
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
import { mapGetters } from 'vuex';

export default {
  name: "login",
  components: {
    Header,
    Footer
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
      }
    };
  },
  methods: {
    onLogin(event){
      event.preventDefault();
      const data={
        UserName: this.form.username,
        UserPassword: this.form.password,
        role: this.form.picker
      };
      this.$store.dispatch('login', data);
      this.$router.push(`/${this.form.picker}`);
    }
  },
};
</script>

<style>
.container{
  width: 500px;
}

.myform {
  margin-top: 50px;
}
.checkempty {
  color: red;
}
</style>
