<template>
    <div class="add-money">
    
    <b-container>
      <div class="form">
        <b-form @submit="onCreate">
          <b-form-group label="Tên đăng nhập:">
            <b-form-input v-model="username" type="text" required>
            </b-form-input>
          </b-form-group>
          <b-button id="btn" type="submit" variant="primary">Tạo tài khoản</b-button>
        </b-form>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
            username:''
        }
    },
    methods:{
        onCreate(evt){
            evt.preventDefault();          
            this.$store.dispatch('addSavingAcc', this.username);
            this.username = '';
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