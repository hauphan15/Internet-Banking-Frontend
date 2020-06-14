<template>
  <div>
    <Header />
    <div class="container">
      <h1 class="text-center mt-2">Đăng Nhập</h1>
      <div class="row myform">
        <form @submit="onLogin" class="col-sm-6 offset-3 p-2">
          <div class="form-group">
            <label for="exampleInputEmail1">UserName</label>
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
            <label for="exampleInputPassword1">Password</label>
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
              />Admin
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
              />Customer
            </label>
          </div>
          <p class="checkempty" v-if="checkIsEmpty">
            Invalid!
          </p>
          <hr />
          <div class="d-flex justify-content-center">
            <button type="submit" class="btn btn-primary ">Đăng nhập</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import axios from "axios";
import router from "../router/index";

export default {
  name: "login",
  components: {
    Header,
  },
  data() {
    return {
      form: {
        username: "",
        password: "",
        picker: "customer",
      },
      checkIsEmpty: false,
    };
  },
  methods: {
    onLogin(event) {
      event.preventDefault();
      if (this.form.username == "" || this.form.password == "") {
        this.checkIsEmpty = true;
      } else {
        this.checkIsEmpty = false;

        if (this.form.picker == "customer") {
          axios
            .post("http://localhost:3000/login/login", {
              UserName: this.form.username,
              UserPassword: this.form.password,
            })
            .then((response) => {
              let self = this;
              if (response.data.authenticated) {
                localStorage.myaccesstoken = response.data.accessToken;
                localStorage.myrefreshtoken = response.data.refreshToken;
                localStorage.myID = response.data.UserID;
                localStorage.fullname = response.data.FullName;
                return router.push("/customer/dashboard");
              } else {
                self.checkIsEmpty = true;
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      }
    },
  },
};
</script>

<style>
.myform {
  margin-top: 50px;
}
.checkempty {
  color: red;
}
</style>
