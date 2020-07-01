<template>
    <div>
        <div class="form">
            <b-form>
                <b-form-group>
                    <b-alert v-if="isSucceed && isDel" variant="success" show>Xóa tài khoản thành công</b-alert>
                    <b-alert v-if="!isSucceed && isDel" variant="danger" show>Xóa tài khoản thất bại</b-alert>
                </b-form-group>
                
                <b-button style="width: 300px" v-b-toggle.collapse-1 variant="outline-danger">Xóa nhân viên</b-button>
                <b-collapse id="collapse-1" class="mt-2">
                    <b-form-group label="ID nhân viên">
                        <b-form-input v-model="id" type="number" readonly placeholder="ID nhân viên"></b-form-input>
                    </b-form-group>
                    
                    <b-button style="width: 300px" type="button" variant="danger" @click="onDel">Xóa</b-button>
                </b-collapse>
            </b-form>
        </div>
        <div class="form">
            <b-form>
                <b-form-group>
                    <b-alert v-if="isSucceed && isUpdate" variant="success" show>Cập nhật tài khoản thành công</b-alert>
                    <b-alert v-if="!isSucceed && isUpdate" variant="danger" show>Cập nhật tài khoản thất bại</b-alert>
                </b-form-group>
                                             
                <b-button style="width: 300px" v-b-toggle.collapse-2 variant="outline-success">Cập nhật thông tin nhân viên</b-button>
                <b-collapse id="collapse-2" class="mt-2">
                    <b-form-group label="ID nhân viên">
                        <b-form-input v-model="id" type="number"  readonly placeholder="ID nhân viên"></b-form-input>
                    </b-form-group>

                    <b-form-group label="Họ tên đầy đủ">
                        <b-form-input v-model="fullname" type="text"  placeholder="Họ tên đầy đủ"></b-form-input>
                    </b-form-group>

                    <b-form-group label="Email">
                        <b-form-input v-model="email" type="text"  placeholder="Email"></b-form-input>
                    </b-form-group>
                    
                    <b-form-group label="Số điện thoại">
                        <b-form-input v-model="phone" type="text"  placeholder="Số điện thoại"></b-form-input>
                    </b-form-group>

                    <b-form-group label="Ngày sinh">
                        <b-form-input v-model="dob" :text="dob" placeholder="ngày/tháng/năm" class="mb-2"></b-form-input>
                    </b-form-group>

                    <b-button style="width: 300px" type="button" variant="success" @click="onUpdate">Cập nhật</b-button>
                </b-collapse>
            </b-form>
        </div>
        <div>
            <h6>Danh sách nhân viên ngân hàng</h6>
            <b-table hover 
                selectable 
                :select-mode="selectMode" 
                :items="EmployeeList" 
                @row-selected="onRowSelected" 
                sticky-header>
            </b-table>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            id:'',
            fullname:'',
            email:'',
            phone:'',
            dob:'',
            isUpdate:false,
            isDel: false,
            selectMode:'single'
        }
    },
    mounted() {
        this.$store.dispatch('employeeList');
    },
    computed: {
        ...mapGetters(['EmployeeList','isSucceed'])
    },
    methods:{
        onRowSelected(items){
            this.id = items[0].ID;
            this.fullname = items[0].FullName;
            this.email = items[0].Email;
            this.phone = items[0].Phone;
            this.dob =items[0].DoB;
        },

        onUpdate(){
            const info = {
                ID: this.id,
                FullName: this.fullname,
                Email: this.email,
                Phone: this.phone,
                DoB: this.dob
            };
            this.$store.dispatch('updateEmployee', info);

            setTimeout(()=>{
                this.isUpdate = true;
            }, 3000);

            setTimeout(()=>{
                this.isUpdate = false;
            }, 6000);
        },

        onDel(){
            this.$store.dispatch('deleteEmployee', this.id);

            setTimeout(()=>{
                this.isDel = true;
            }, 3000);

            setTimeout(()=>{
                this.isDel = false;
            }, 6000);
        }
    }
}
</script>

<style>
.form{
    width: 300px;
    margin: auto;
}
</style>