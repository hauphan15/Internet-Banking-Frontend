<template>
    <div>
        <b-container>
            <div class="form">
                <b-form @submit="onSubmit">
                    <b-form-group  label="Số tài khoản thanh toán" >
                        <b-form-input   required readonly>
                        </b-form-input>
                    </b-form-group>

                    <b-form-group  label="Số tài khoản tiết kiệm" >
                        <b-form-input     required readonly>
                        </b-form-input>
                    </b-form-group>
                </b-form>
            </div>
        </b-container>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    data() {
        return {
            SpendingNumber:'',
            SavingNumber:''
        }
    },
    mounted:{
        
    }
}
</script>