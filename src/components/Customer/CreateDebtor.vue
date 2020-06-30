<template>
    <div class="p-2">
      <h3 class="text-center mt-2">Tạo nhắc nợ</h3>
      <form class="form" @submit="onAdd">
          <b-form-group>
              <b-alert v-if="isSucceed && isAdd" variant="success" show>Gửi nhắc nợ thành công</b-alert>
              <b-alert v-if="!isSucceed && isAdd" variant="danger" show>Gửi nhắc nợ thất bại</b-alert>
              <b-alert v-if="!isSucceed && isAdd" variant="danger" show>{{ErrorMessage}}</b-alert>
          </b-form-group>

          <div class="form-group">
              <label for="stk">Số tài khoản:</label>
              <input type="text" class="form-control" placeholder="STK" v-model="number"/>
          </div>

          <div class="form-group">
              <label for="money">Số tiền:</label>
              <input type="text" class="form-control" placeholder="Số Tiền" v-model="money"/>
          </div>

          <div class="form-group">
              <label for="content">Lời Nhắc:</label>
              <b-form-textarea v-model="content" placeholder="Lời nhắc..." rows="3" max-rows="6"></b-form-textarea>
          </div>
          <div class="d-flex justify-content-center">
              <button type="submit" class="btn btn-primary mt-2">Gửi nhắc nợ</button>
          </div>
          
      </form>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      number:'',
      money:'',
      content:'',
      isAdd: false
    }
  },
  computed:{
      ...mapGetters(['isSucceed','ErrorMessage'])
  },
  methods:{
    onAdd(evt){
      evt.preventDefault();
      const info = {
        CreatorID: localStorage.getItem('userid'),
        DebtorNumber: this.number,
        Money: this.money,
        Content: this.content,
      };
      
      this.$store.dispatch('addDebtor', info);

      setTimeout(()=>{
        this.isAdd = true;
      }, 1000);

      setTimeout(()=>{
        this.isAdd = false;
      }, 6000);
    }
  }
};
</script>

<style >
.form {
    margin: 50px auto;
    width: 400px;
}
</style>
