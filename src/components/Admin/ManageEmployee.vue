<template>
    <div>
        <h6>Danh sách nhân viên ngân hàng</h6>
        <Table :items="EmployeeList"></Table>
    </div>
</template>

<script>
import Table from '../Table.vue';
import { mapGetters } from 'vuex';

export default {
    components:{
        Table
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