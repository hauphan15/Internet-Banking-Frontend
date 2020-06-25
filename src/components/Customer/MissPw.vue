<template>
  <div class="register">
    <b-container>
        <div class="form">
            <b-form>
                <b-form-group>
                        <b-alert v-if="isSucceed && isChange" variant="success" show>Đổi mật khẩu thành công</b-alert>
                        <b-alert v-if="!isSucceed && isChange" variant="danger" show>Đổi mật khẩu thất bại</b-alert>
                </b-form-group>
                
                <div v-if="!isSend">
                    <b-form-group label="Tên đăng nhập:">
                        <b-form-input v-model="username" required placeholder="Username"></b-form-input>
                    </b-form-group>

                    <b-form-group label="Nhập email nhận mã OTP:">
                        <b-form-input v-model="email" required placeholder="Email"></b-form-input>
                    </b-form-group>

                    <b-form-group>
                        <b-button  variant="primary" @click="onSendOTP">Gửi</b-button>
                    </b-form-group>
                </div>

                <div v-if="isSend">
                    <b-form-group label="Nhập mã OTP:">
                        <b-form-input v-model="otp" type="number" required placeholder="Mã OTP"> </b-form-input>
                    </b-form-group>

                    <b-form-group label="Mật khẩu mới:">
                        <b-form-input v-model="newpassword" required type="password" placeholder="Password"> </b-form-input>
                    </b-form-group>

                    <b-form-group label="Xác nhận mật khẩu:">
                        <b-form-input required  v-model="confirmpw" @input="notifyChange" type="password" placeholder="Confirm password"> </b-form-input>
                        <small v-if="!isMatch">Mật khẩu không khớp</small>
                        <small v-else>Mật khẩu khớp</small>
                    </b-form-group>

                    <b-form-group>
                        <b-button variant="primary" @click="onChangePw">Đổi mật khẩu</b-button>
                    </b-form-group>
                </div>
    
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
        username:"",
        email: "",
        otp: "",
        newpassword: "",
        confirmpw:"",
        isMatch: false,
        isSend: false,
        isChange: false
    };
  },
  computed:{
      ...mapGetters(['isSucceed'])
  },
  methods: {
        onSendOTP(evt) {
            evt.preventDefault();
            const data = {
                UserName: this.username,
                UserEmail: this.email
            };
            this.$store.dispatch('sendOTPCodeMissPw', data);
            setTimeout(()=>{
                this.isSend = true;
            }, 500);
        },

        onChangePw(evt) {
            evt.preventDefault();
            const data = {
                OTP: this.otp,
                UserName: this.username,
                UserEmail: this.email,
                NewPassword: this.newpassword,
            };
            this.$store.dispatch('missPw', data);

            setTimeout(()=>{
                this.isChange = true;
            }, 2000);

            setTimeout(()=>{
                this.isChange = false;
            }, 5000);
        },

        notifyChange(){
            if(this.confirmpw === this.newpassword){
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
  width: 400px;
  padding: 30px;
  background-color: white;
  border-radius: 7px;
}
.register {
  position: relative;
}
</style>
