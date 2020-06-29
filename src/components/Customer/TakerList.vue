<template>
    <div>
        <br>
        <b-form class="form">
        <div>
            <b-form-group>
                <b-alert v-if="isSucceed && isAdd" variant="success" show>Thêm thành công</b-alert>
                <b-alert v-if="!isSucceed && isAdd" variant="danger" show>Thêm thất bại</b-alert>
                <b-alert v-if="!isSucceed && isAdd" variant="danger" show>{{ErrorMessage}}</b-alert>
            </b-form-group>

            <b-button style="width: 300px" v-b-toggle.collapse-1 variant="primary">Thêm người nhận</b-button>
            <b-collapse id="collapse-1" class="mt-2">
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
                <b-button id="btn1" variant="outline-primary" @click="onAdd">Thêm người nhận</b-button>
            </b-collapse>
        </div>
        <br>
        <div>
            <b-form-group>
                <b-alert v-if="isSucceed && isDel" variant="success" show>Xóa thành công</b-alert>
                <b-alert v-if="!isSucceed && isDel" variant="danger" show>Xóa thất bại</b-alert>
                <b-alert v-if="!isSucceed && isDel" variant="danger" show>{{ErrorMessage}}</b-alert>
            </b-form-group>

            <b-button style="width: 300px" v-b-toggle.collapse-2 variant="danger">Xóa người nhận</b-button>
            <b-collapse id="collapse-2" class="mt-2">
                <b-form-group label="ID:">
                    <b-form-input v-model="IDDel" type="number" placeholder="ID" readonly></b-form-input>
                </b-form-group>    
                <b-button id="btn2" variant="outline-danger" @click="onDelete">Xóa người nhận</b-button>
            </b-collapse>
        </div>
        <br>
        <div>
            <b-form-group>
                <b-alert v-if="isSucceed && isUpdate" variant="success" show>Cập nhật thành công</b-alert>
                <b-alert v-if="!isSucceed && isUpdate" variant="danger" show>Cập nhật thất bại</b-alert>
                <b-alert v-if="!isSucceed && isUpdate" variant="danger" show>{{ErrorMessage}}</b-alert>
            </b-form-group>

            <b-button style="width: 300px" v-b-toggle.collapse-3 variant="success">Cập nhật thông tin</b-button>
            <b-collapse id="collapse-3" class="mt-2">
                <b-form-group label="ID:">
                    <b-form-input v-model="IDUpdate" type="number" placeholder="ID" readonly></b-form-input>
                </b-form-group>

                <b-form-group label="Tên gợi nhớ:">
                    <b-form-input v-model="nameUpdate" placeholder="tên gợi nhớ"> </b-form-input>
                </b-form-group>
                <b-button id="btn3" variant="outline-success" @click="onUpdate">Cập nhật thông tin</b-button>
            </b-collapse>
        </div>
    </b-form>
    <br>
    <h6>Danh sách người nhận</h6>
    <b-table hover 
        selectable 
        :select-mode="selectMode" 
        :items="TakerList" 
        @row-selected="onRowSelected" 
        sticky-header>
    </b-table>

    </div>
</template>

<script>
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
            isUpdate: false,
            selectMode: 'single'
        }
    },
    mounted() {
        this.$store.dispatch('takerList',localStorage.getItem('userid'));
    },
    computed: {
        ...mapGetters([
            'TakerList',
            'isSucceed',
            'ErrorMessage'
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
            }, 3000);

            setTimeout(()=>{
                this.isUpdate = false;
            }, 7000);
        },

        onRowSelected(items){
            this.nameUpdate = items[0].Name;
            this.IDUpdate = items[0].ID;
            this.IDDel = items[0].ID;
        }
    }
}
</script>

<style>
#btn1{
    width: 300px;
}
#btn2{
    width: 300px;
}
#btn3{
    width: 300px;
}
.form{
    margin: 50px auto;
    width: 300px;
}
</style>