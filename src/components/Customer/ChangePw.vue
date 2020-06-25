<template>
  <div class="register">
    <b-container>
        <div class="form">
            <b-form @submit="onChangePw">

            <b-form-group>
                <b-alert v-if="isSucceed && isChange" variant="success" show>Đổi mật khẩu thành công</b-alert>
                <b-alert v-if="!isSucceed && isChange" variant="danger" show>Đổi mật khẩu thất bại</b-alert>
            </b-form-group>

            <b-form-group label="Mật khẩu cũ:">
                <b-form-input v-model="oldpassword" required type="password"> </b-form-input>
            </b-form-group>

            <b-form-group label="Mật khẩu mới:">
                <b-form-input v-model="newpassword" required type="password"> </b-form-input>
            </b-form-group>

            <b-form-group label="Xác nhận mật khẩu:">
                <b-form-input required  v-model="confirmpw" @input="notifyChange" type="password"> </b-form-input>
                <small v-if="!isMatch">Mật khẩu không khớp</small>
                <small v-else>Mật khẩu khớp</small>
            </b-form-group>

            <b-form-group>
                <b-button id="btn" type="submit" variant="primary">Đổi mật khẩu</b-button>
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
        oldpassword: "",
        newpassword: "",
        confirmpw:"",
        isMatch: false,
        isChange: false,
    };
  },
  computed:{
      ...mapGetters(['isSucceed'])
  },
  methods: {
        onChangePw(evt) {
            evt.preventDefault();
            const data = {
                UserID: localStorage.getItem('userid'),
                OldPassword: this.oldpassword,
                NewPassword: this.newpassword,
            };
            this.$store.dispatch('changePw', data);
    
            this.oldpassword = '';
            this.newpassword = '';
            this.confirmpw = '';

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
}
.register {
  position: relative;
}
</style>
