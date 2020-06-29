<template>
  <div class="p-2">
    <h5 class="text-center mt-2">Nhập mã OTP để xác nhận</h5>

    <form class="form" @submit="onVerify">
        <div class="form-group">
            <label for="stk">Mã OTP:</label>
            <input type="text" class="form-control" placeholder="Mã OTP" v-model="otp"/>
        </div>

    <button type="submit" class="btn btn-primary mt-2">Gửi</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      otp:'',
    }
  },
  methods:{
    onVerify(evt){
      evt.preventDefault();
    }
  }
};
</script>

<style>
.form {
    margin-left: 250px;
    margin-top: 50px;
    width: 400px;
}
</style>
