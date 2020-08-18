<template>
    <div>
        <br>
        <br>
        <h6>Tất cả giao dịch trong tháng với ngân hàng đối tác</h6>
        <Table :items="PartnerTrans" ></Table>

        <br>
        <br>
        <div id="content1">
            <h6>Xem theo khoảng thời gian</h6>
            <b-form-group label="Từ ngày:">
                <b-form-datepicker v-model="from" class="mb-2"></b-form-datepicker>
            </b-form-group>
        
            <b-form-group label="Đến ngày:">
                <b-form-datepicker v-model="to" class="mb-2"></b-form-datepicker>
            </b-form-group>
            <b-button variant="primary" @click="onLoad1">Xem</b-button>
        </div>
        <br>
        <Table :items="PartnerTransByTime" ></Table>

        <br>
        <br>

        <div id="content2">
            <h6>Xem theo tên đối tác</h6> 
            <b-form-group>
                <b-form-select v-model="bank1" :options="options"></b-form-select>
            </b-form-group>
            <b-button variant="primary" @click="onLoad2">Xem</b-button>
        </div>
        <br>
        <Table :items="PartnerTransByName" ></Table>

        <br>
        <br>

        <div id="content3">
            <h6>Tổng số tiền đã giao dịch với đối tác</h6> 
            <b-form-group inline>
                <b-form-select v-model="bank2" :options="options"></b-form-select>
            </b-form-group>

            <b-form-group>
                <b-button variant="primary" @click="onLoad3">Xem</b-button>
            </b-form-group>

            <b-form-group>
                <b-form-input readonly :value="PartnerStatisticMoney"></b-form-input>
            </b-form-group>
        </div>

    </div>
</template>

<script>
import Table from '../Table.vue'
import {mapGetters} from 'vuex'

export default {
    components:{
        Table
    },
    data() {
        return {
            bank1:'',
            bank2:'',
            from:'',
            to:'',
            options: [
                { value: '', text: 'Chọn tên ngân hàng' },
                { value: 'sacombank', text: 'Sacombank' },
                { value: 'nhom16', text: 'Nhom16' },
                { value: 'xxxBankLovesyyyBank', text: 'Test'}
            ]
        }
    },
    mounted() {
        this.$store.dispatch('partnerTrans');
    },
    computed:{
        ...mapGetters([
            'PartnerTrans',
            'PartnerTransByTime',
            'PartnerTransByName',
            'PartnerStatisticMoney'
            ])
    },
    methods:{
        onLoad(){
            this.$store.dispatch('partnerTrans');
        },
        onLoad1(){
            this.$store.dispatch('partnerTransByTime', {from: this.from, to: this.to});
        },
        onLoad2(){
            this.$store.dispatch('partnerTransByName',this.bank1);
        },
        onLoad3(){
            this.$store.dispatch('partnerStatisticMoney',this.bank2);
        }
    }
}
</script>

<style>
#content1{
    width: 400px;
}
#content2{
    width: 400px;
}
#content3{
    width: 400px;
}
</style>