<template>
    <div class="add-money">
    
    <b-container>
      <div class="form">
          <h4>Cập nhật thông tin nhân viên</h4>
        <b-form @submit="onUpdate">
            <b-form-group label="ID nhân viên">
                <b-form-input v-model="id" type="number" required placeholder="ID nhân viên"></b-form-input>
            </b-form-group>

            <b-form-group label="Tên đăng nhập">
                <b-form-input v-model="username" type="text"  placeholder="Tên đăng nhập"></b-form-input>
            </b-form-group>

            <b-form-group label="Họ tên đầy đủ">
                <b-form-input v-model="fullname" type="text"  placeholder="Họ tên đầy đủ"></b-form-input>
            </b-form-group>

            <b-form-group label="Email">
                <b-form-input v-model="email" type="text"  placeholder="Email"></b-form-input>
            </b-form-group>
            
            <b-form-group label="Số điện thoại">
                <b-form-input v-model="phone" type="text"  placeholder="Số điện thoại"></b-form-input>
            </b-form-group>

            <b-form-group label="Ngày sinh">
                <b-form-datepicker v-model="dob" class="mb-2"></b-form-datepicker>
            </b-form-group>

            <b-button id="btn" type="submit" variant="primary">Cập nhật</b-button>
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
            id: '',
            username:'',
            fullname:'',
            email:'',
            phone:'',
            dob:''

        }
    },
    computed:{
        ...mapGetters(['SelectedRow'])
    },
    methods:{
        onUpdate(evt){
            evt.preventDefault();
            const info = {
                ID: this.id,
                UserName: this.username,
                FullName: this.fullname,
                Email: this.email,
                Phone: this.phone,
                DoB: this.dob
            };
            this.$store.dispatch('updateEmployee', info);
            this.id = '';
            this.username = '';
            this.fullname = '';
            this.email = '';
            this.phone = '';
            this.dob = '';
        }
    }
}
</script>

<style scoped>
.form {
  margin: 50px auto;
  width: 500px;
  padding: 30px;
}
.add-money {
  position: relative;
}
</style>