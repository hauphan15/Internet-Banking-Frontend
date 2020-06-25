<template>
    <div>
        <br>
        <div class="form">
        <b-form @submit="onAdd">
            <h5>Thêm người nhận</h5>
            <b-form-group label="Số tài khoản:">
                <b-form-input v-model="number" type="text" required>
                </b-form-input>
            </b-form-group>

            <b-form-group label="Tên gợi nhớ:">
                <b-form-input v-model="name"> </b-form-input>
            </b-form-group>
    
            <b-button id="btn" type="submit" variant="primary">Thêm</b-button>
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
            number:'',
            name:''
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
            'TakerList'
            ])
    },
    methods:{
        onAdd(evt){
            evt.preventDefault();
            const info = {
                UserID: localStorage.getItem('userid'),
                Number: this.number,
                Name: this.name
            };
            this.$store.dispatch('addTaker', info);
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