<template>
  <div class="p-2">
    <h3 class="text-center mt-2">Chuyển tiền nội bộ</h3>
    <form class="form">
        <b-form-group>
            <b-alert v-if="isSucceed && isVerify" variant="success" show>Giao dịch thành công</b-alert>
            <b-alert v-if="!isSucceed && isVerify" variant="danger" show>Giao dịch thất bại</b-alert>
            <b-alert v-if="!isSucceed && isVerify" :title="ErrorMessage" variant="danger" show></b-alert>
        </b-form-group>

        <div class="form-group" >
            <label for="stk">Số tài khoản người nhận:</label>
            <input type="text" class="form-control" placeholder="STK" v-model="number"/>
        </div>

        <b-form-group label="Hoặc chọn từ danh sách người nhận:">
            <b-button style="width: 400px; " v-b-toggle.collapse-1 variant="outline-primary">Xem danh sách</b-button>
            <b-collapse id="collapse-1" class="mt-2">
                  <b-table hover 
                      selectable 
                      :select-mode="selectMode" 
                      :items="TakerList" 
                      @row-selected="onRowSelected" 
                      sticky-header>
                  </b-table>
            </b-collapse>
        </b-form-group>

        <div class="form-group">
            <label for="money">Số tiền:</label>
            <input type="number" class="form-control" placeholder="Số Tiền" v-model="money"/>
        </div>

        <div class="form-group">
            <label for="content">Nội dung:</label>
            <b-form-textarea v-model="content" placeholder="Nội dung..." rows="3" max-rows="6"></b-form-textarea>
        </div>

        <b-form-group>
            <b-form-select v-model="type" :options="options"></b-form-select>
        </b-form-group>
        <div class="d-flex justify-content-center">
              <button type="button" class="btn btn-primary mt-2" @click="onSendOTPCode">Chuyển tiền</button>
        </div>
    </form>

    <div v-if="isSend">
        <h5 class="text-center mt-2">Nhập mã OTP để xác nhận</h5>
        <form class="form">
            <div class="form-group">
                <label for="stk">Mã OTP:</label>
                <input type="text" class="form-control" placeholder="Mã OTP" v-model="OTPCode"/>
            </div>
            <div class="d-flex justify-content-center">
            <button type="button" @click="onVerify" class="btn btn-primary mt-2">Gửi</button>
            </div>
        </form>
    </div>

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
      type:null,
      options:[
          { value: null, text: 'Chọn hình thức trả phí' },
          { value: 'NG', text: 'Người gửi trả phí' },
          { value: 'NN', text: 'Người nhận trả phí' },
      ],
      isSend: false,
      OTPCode:'',
      isVerify: false,
      selectMode: 'single'
    }
  },
  mounted() {
        this.$store.dispatch('takerList',localStorage.getItem('userid'));
  },
  computed:{
      ...mapGetters(['isSucceed', 'TakerList', 'ErrorMessage'])
  },
  methods:{
    onSendOTPCode(){
      this.$store.dispatch('sendOTPCode', localStorage.getItem('number'));
      this.isSend = true;
    },

    onVerify(){
        const transaction = {
        Number_NG: localStorage.getItem('number'),
        Number_NN: this.number,
        Content: this.content,
        Money: this.money,
        Fee:this.type,
        Type: 'CHUYENKHOAN'
      };
      const otpCode = this.OTPCode;
      const data={
          transaction,
          otpCode
      };
      this.$store.dispatch('sendLocal', data);


      setTimeout(()=>{
          this.isVerify = true;
      }, 3000);

      setTimeout(()=>{
          this.isVerify = false;
      }, 6000);
    },

    onRowSelected(items){
      this.number = items[0].Number;
    }
  }
};
</script>

<style scoped>
.form {
    margin-left: 250px;
    margin-top: 50px;
    margin-bottom: 50px;
    width: 400px;
}
</style>
