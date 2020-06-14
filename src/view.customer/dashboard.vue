<template>
  <div class="dashboard">
    <Header />
    <div class="row">
      <div class="col-6 offset-3 mt-3">
        <div class="btn-group p-2">
          <button type="button" class="btn btn-primary m-2">Profile</button>
          <button
            type="button"
            class="btn btn-primary m-2"
            v-on:click="GotoView"
          >
            Nhắc Nợ
          </button>
          <button type="button" class="btn btn-primary m-2">
            Lịch sử chuyển tiền
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import router from "../router/index";
import myToken from "../public/myToken";
//import axios from "axios";
export default {
  name: "dashboard",
  components: {
    Header,
  },
  mounted() {
    if (!localStorage.getItem("myaccesstoken")) {
      router.push("/login");
    }
  },
  methods: {
    GotoView: function() {
      myToken.CheckToken(router, "/customer/nhacno");
    },
  },
};
</script>

<style></style>
