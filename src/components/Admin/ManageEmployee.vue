<template>
    <div>
        <div>
            <delete-form></delete-form>
        </div>
        <div>
            <update-form></update-form>
        </div>
        <div>
            <h6>Danh sách nhân viên ngân hàng</h6>
            <Table :items="EmployeeList"></Table>
        </div>
    </div>
</template>

<script>
import Table from '../Table.vue';
import DeleteForm from '../Admin/DeleteForm.vue'
import UpdateForm from '../Admin/UpdateForm.vue'
import { mapGetters } from 'vuex';

export default {
    components:{
        Table,
        DeleteForm,
        UpdateForm
    },
    mounted() {
        this.$store.dispatch('employeeList');
    },
    computed: {
        ...mapGetters([
            'EmployeeList'
            ])
    },
}
</script>