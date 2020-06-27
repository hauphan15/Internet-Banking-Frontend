<template>
  <div class="p-2">
    <h3 class="text-center mt-2">Chuyển tiền liền ngân hàng</h3>
    <form class="form">
        <b-form-group>
            <b-alert v-if="isSucceed && isVerify" variant="success" show>Giao dịch thành công</b-alert>
            <b-alert v-if="!isSucceed && isVerify" variant="danger" show>Giao dịch thất bại</b-alert>
        </b-form-group>

        <div class="form-group" >
            <label for="stk">Số tài khoản người nhận:</label>
            <input type="text" class="form-control" placeholder="STK" v-model="number"/>
        </div>

        <b-form-group label="Hoặc chọn từ danh sách người nhận:">
            <b-button v-if="!isTable" variant="outline-primary" @click="showList" style="width: 150px">Xem danh sách</b-button>
            <Table v-else :items="TakerList"></Table>
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

        <b-form-group>
            <b-form-select v-model="bank" :options="banks"></b-form-select>
        </b-form-group>

        <button class="btn btn-primary mt-2" @click="onSendOTPCode">Gửi</button>
    </form>

    <div v-if="isSend">
        <h5 class="text-center mt-2">Nhập mã OTP để xác nhận</h5>
        <form class="form">

            <div class="form-group">
                <label for="stk">Mã OTP:</label>
                <input type="text" class="form-control" placeholder="Mã OTP" v-model="OTPCode"/>
            </div>

            <button type="submit" @click="onVerify" class="btn btn-primary mt-2">Gửi</button>
        </form>
    </div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Table from '../Table.vue'

export default {
    components:{
        Table
    },
    data() {
        return {
            number:'',
            money:'',
            content:'',
            type: null,
            options:[
                { value: null, text: 'Chọn hình thức trả phí' },
                { value: 'NG', text: 'Người gửi trả phí' },
                { value: 'NN', text: 'Người nhận trả phí' },
            ],
            bank:null,
            banks:[
                { value: null, text: 'Chọn ngân hàng' },
                { value: 'nhom16', text: 'Ngân hàng Nhom16' },
                { value: 'sacombank', text: 'Ngân hàng Sacombank' },
            ],
            isSend: false,
            OTPCode:'',
            isVerify: false,
            isTable: false
        }
    },
    mounted() {
        this.$store.dispatch('takerList',localStorage.getItem('userid'));
    },
    computed:{
      ...mapGetters(['isSucceed','TakerList'])
    },
    methods:{
        onSendOTPCode(){
            if(this.bank === 'nhom16'){
                this.$store.dispatch('sendOTPCodePGP', localStorage.getItem('number'));
            }
            else if(this.bank === 'sacombank'){
                this.$store.dispatch('sendOTPCodeRSA', localStorage.getItem('number'));
            }
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
            if(this.bank === 'nhom16'){
                this.$store.dispatch('sendInterPGP', data);
            }
            else if(this.bank === 'sacombank'){
                this.$store.dispatch('sendInterRSA', data);
            }

            setTimeout(()=>{
                this.isVerify = true;
            }, 3000);

            setTimeout(()=>{
                this.isVerify = false;
            }, 6000);
        },

        showList(){
            this.isTable = true;
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
    margin-bottom: 50px;
    width: 400px;
}
</style>
