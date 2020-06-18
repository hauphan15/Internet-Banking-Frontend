<template>
    <div>
        <br>
        <br>
        <h6>Tất cả giao dịch với ngân hàng đối tác</h6>
        <Table :items="PartnerTrans"></Table>

        <br>
        <br>

        <h6>Xem theo khoảng thời gian</h6>
        <b-form-group label="Từ ngày:">
            <b-form-datepicker v-model="from" class="mb-2"></b-form-datepicker>
        </b-form-group>
    
        <b-form-group label="Đến ngày:">
            <b-form-datepicker v-model="to" class="mb-2"></b-form-datepicker>
        </b-form-group>
        <b-button variant="primary" @click="onLoad1">Xem</b-button>
        <Table :items="PartnerTransByTime"></Table>

        <br>
        <br>

        <h6>Xem theo tên đối tác</h6> 
        <div>
            <b-form-group>
                <b-form-select v-model="bank" :options="options"></b-form-select>
            </b-form-group>
        <b-button variant="primary" @click="onLoad2">Xem</b-button>
        <Table :items="PartnerTransByName"></Table>
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
            bank:'',
            from:'',
            to:'',
            options: [
                { value: 'sacombank', text: 'Ngân hàng Sacombank' },
                { value: 'nhom16', text: 'Ngân hàng của nhóm 16' },
                { value: 'xxxBankLovesyyyBank', text: 'Ngân hàng test'}
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
            'PartnerTransByName'
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
            this.$store.dispatch('partnerTransByName',this.bank);
        }
    }
}
</script>