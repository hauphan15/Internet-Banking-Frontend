<template>
    <div class="add-money">
    
    <b-container>
      <div class="form">
        <h4>Xóa nhân viên</h4>
        <b-form @submit="onDelete">
          <b-form-group>
              <b-alert v-if="isSucceed && isDel" variant="success" show>Xóa tài khoản thành công</b-alert>
              <b-alert v-if="!isSucceed && isDel" variant="danger" show>Xóa tài khoản thất bại</b-alert>
          </b-form-group>

          <b-form-group label="ID nhân viên">
            <b-form-input v-model="id" type="number" required placeholder="ID nhân viên"></b-form-input>
          </b-form-group>
          
          <b-button type="submit" variant="primary">Xóa nhân viên</b-button>
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
            id:'',
            isDel: false
        }
    },
      computed:{
      ...mapGetters(['isSucceed'])
  },
    methods:{
        onDelete(evt){
            evt.preventDefault();
            this.$store.dispatch('deleteEmployee', this.id);
            this.id = '';

            setTimeout(()=>{
                this.isDel = true;
            }, 3000);

            setTimeout(()=>{
                this.isDel = false;
            }, 6000);
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