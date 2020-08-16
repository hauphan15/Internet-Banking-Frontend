<template>
    <div>
    <b-container>
        <div class="form">
            <b-form @submit="onRemoveAcc">

            <b-form-group>
                <b-alert v-if="!isSucceed && isRemove" variant="danger" show>{{ErrorMessage}}</b-alert>
                <b-alert v-if="isSucceed && isRemove" variant="success" show>Xóa tài khoản thành công</b-alert>
            </b-form-group>

            <b-form-group label="Xác nhận mật khẩu để xóa tài khoản:">
                <b-form-input required  v-model="Password"  type="password"> </b-form-input>
            </b-form-group>

            <div class="d-flex justify-content-center">
                <b-button type="submit" variant="primary">Xóa tài khoản</b-button>
            </div>
               
            </b-form>
        </div>
    </b-container>        
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data(){
        return{
            Password: "",
            isRemove: false
        }
    },
    computed:{
      ...mapGetters(['isSucceed','ErrorMessage'])
  },
  methods:{
    onRemoveAcc(evt) {
        evt.preventDefault();
        const data={
            UserID:  localStorage.getItem('userid'),
            Password: this.Password
        };

        this.$store.dispatch('removeAccount', data);

        setTimeout(()=>{
                this.isRemove = true;
        }, 2000);

        setTimeout(()=>{
                this.isRemove = false;
        }, 7000);
    },
  }
}
</script>

<style scoped>
.form {
  margin: 50px auto;
  width: 400px;
  padding: 30px;
}
</style>