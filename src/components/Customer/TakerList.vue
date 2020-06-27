<template>
    <div>
        <br>
        <div class="form">
        <b-form>
            <b-form-group>
                <b-alert v-if="isSucceed && isAdd" variant="success" show>Thêm thành công</b-alert>
                <b-alert v-if="!isSucceed && isAdd" variant="danger" show>Thêm thất bại</b-alert>
            </b-form-group>

            <h5>Thêm người nhận</h5>
            <b-form-group label="Số tài khoản:">
                <b-form-input v-model="numberAdd" type="number" required placeholder="số tài khoản">
                </b-form-input>
            </b-form-group>

            <b-form-group label="Tên gợi nhớ:">
                <b-form-input v-model="nameAdd" placeholder="tên gợi nhớ"></b-form-input>
            </b-form-group>

            <b-form-group label="Chọn ngân hàng:">
                <b-form-select v-model="bank" :options="banks"></b-form-select>
            </b-form-group>
            <b-button variant="primary" @click="onAdd">Thêm</b-button>
            <br>
            <br>
            <br>

            <b-form-group>
                <b-alert v-if="isSucceed && isDel" variant="success" show>Xóa thành công</b-alert>
                <b-alert v-if="!isSucceed && isDel" variant="danger" show>Xóa thất bại</b-alert>
            </b-form-group>
            <h5>Xóa người nhận</h5>
            <b-form-group label="ID:">
                <b-form-input v-model="IDDel" type="number" placeholder="ID" required>
                </b-form-input>
            </b-form-group>    
            <b-button variant="primary" @click="onDelete">Xóa</b-button>
            <br>
            <br>
            <br>

            <b-form-group>
                <b-alert v-if="isSucceed && isUpdate" variant="success" show>Cập nhật thành công</b-alert>
                <b-alert v-if="!isSucceed && isUpdate" variant="danger" show>Cập nhật thất bại</b-alert>
            </b-form-group>
            <h5>Cập nhật thông tin người nhận</h5>
            <b-form-group label="ID:">
                <b-form-input v-model="IDUpdate" type="number" placeholder="ID" required></b-form-input>
            </b-form-group>    
            <b-form-group label="Tên gợi nhớ:">
                <b-form-input v-model="nameUpdate" placeholder="tên gợi nhớ"> </b-form-input>
            </b-form-group>
            <b-button variant="primary" @click="onUpdate">Cập nhật</b-button>
        </b-form>
        </div>
        <h6>Danh sách người nhận</h6>
        <Table :items="TakerList"></Table>

    </div>
</template>

<script>
import Table from '../Table.vue'
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            banks:[
                {value: '', text: 'chọn ngân hàng'},
                {value: 'hhbank', text: 'HHBank'},
                {value: 'sacombank', text: 'Sacombank'},
                {value: 'nhom16', text: 'Nhom16'},
                ],
            bank:'',
            numberAdd:'',
            nameAdd:'',
            numberDel:'',
            nameDel:'',
            numberUpdate:'',
            nameUpdate:'',
            IDDel: '',
            IDUpdate:'',
            isAdd: false,
            isDel: false,
            isUpdate: false
        }
    },
    components:{
        Table
    },
    mounted() {
        this.$store.dispatch('takerList',localStorage.getItem('userid'));
    },
    computed: {
        ...mapGetters([
            'TakerList',
            'isSucceed'
            ])
    },
    methods:{
        onAdd(){
            const info = {
                UserID: localStorage.getItem('userid'),
                Number: this.numberAdd,
                Name: this.nameAdd
            };
            if(this.bank === 'hhbank'){
                this.$store.dispatch('addTaker', info);
            }
            else if(this.bank === 'sacombank'){
                this.$store.dispatch('addTakerRSABank', info);
            }
            else if(this.bank === 'nhom16'){
                this.$store.dispatch('addTakerPGPBank', info);
            }
            

            setTimeout(()=>{
                this.isAdd = true;
            }, 3000);

            setTimeout(()=>{
                this.isAdd = false;
            }, 5000);
        },
        onDelete(){
            this.$store.dispatch('removeTaker', this.IDDel);

            setTimeout(()=>{
                this.isDel = true;
            }, 2000);

            setTimeout(()=>{
                this.isDel = false;
            }, 5000);
        },
        onUpdate(){
            const data = {
                ID: this.IDUpdate,
                Name: this.nameUpdate
            }
            this.$store.dispatch('updateTaker', data);

            setTimeout(()=>{
                this.isUpdate = true;
            }, 3500);

            setTimeout(()=>{
                this.isUpdate = false;
            }, 7000);
        }
    }
}
</script>

<style scroped>
.form{
    margin:50px auto;
    width: 400px;
}
</style>