<template>
  <div class="p-2">
      <h1 class="text-center mt-2">Tạo nhắc nợ</h1>
    <form class="form" @submit="onAdd">
      <div class="form-group">
        <label for="stk">Số tài khoản:</label>
        <input type="text" class="form-control" placeholder="STK" v-model="number"/>
      </div>
      <div class="form-group">
        <label for="money">Số tiền:</label>
        <input
          type="text"
          class="form-control"
          placeholder="Số Tiền"
          v-model="money"
        />
      </div>
      <div class="form-group">
        <label for="content">Lời Nhắc:</label>
        <b-form-textarea
          v-model="content"
          placeholder="Lời nhắc..."
          rows="3"
          max-rows="6"
        ></b-form-textarea>
      </div>
          <button type="submit" class="btn btn-primary mt-2">Gửi</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number:'',
      money:'',
      content:''
    }
  },
  methods:{
    onAdd(evt){
      evt.preventDefault();
      const info = {
        CreatorID: localStorage.getItem('userid'),
        CreditorID: localStorage.getItem('userid'),
        DebtorNumber: this.number,
        Money: this.money,
        Content: this.content,
      };
      this.$store.dispatch('addDebtor', info);
      this.number = '';
      this.money = '';
      this.content = '';
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
