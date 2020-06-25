<template>
    <div class="add-money">
    
    <b-container>
      <div class="form">
        <h4>Xóa nhân viên</h4>
        <b-form @submit="onDelete">

          <b-form-group label="ID nhân viên">
            <b-form-input v-model="id" type="number" required placeholder="ID nhân viên"></b-form-input>
          </b-form-group>
          
          <b-button id="btn" type="submit" variant="primary">Xóa nhân viên</b-button>
        </b-form>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
            id:''
        }
    },
    methods:{
        onDelete(evt){
            evt.preventDefault();
            this.$store.dispatch('deleteEmployee', this.id);
            this.id = '';
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