<template>
    <div class="p-2">
      <h3 class="text-center mt-2">Tạo nhắc nợ</h3>
      <form class="form" @submit="onAdd">
          <b-form-group>
              <b-alert v-if="isSucceed && isAdd" variant="success" show>Thêm thành công</b-alert>
              <b-alert v-if="!isSucceed && isAdd" variant="danger" show>Thêm thất bại</b-alert>
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
          <button type="submit" class="btn btn-primary mt-2">Gửi</button>
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
      ...mapGetters(['isSucceed'])
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
      this.number = '';
      this.money = '';
      this.content = '';

      setTimeout(()=>{
        this.isAdd = true;
      }, 3000);

      setTimeout(()=>{
        this.isAdd = false;
      }, 6000);
    }
  }
};
</script>

<style>
.btn{
  width: 100px;
}
.form {
    margin-left: 250px;
    margin-top: 50px;
    width: 400px;
}
</style>
