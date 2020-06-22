<template>
  <div class="home">
    <Header/>
    <div>
  
        <b-card no-body>
            <b-tabs card>
                <b-tab title="Tạo tài khoản khách hàng" active>
                    <create-customer-acc></create-customer-acc>
                </b-tab>
                <b-tab title="Nạp tiền vào tài khoản khách hàng">
                    <add-money></add-money>
                </b-tab>
                <b-tab title="Xem lịch sử giao dịch khách hàng">
                    <trans-history></trans-history>
                </b-tab>
            </b-tabs>
        </b-card>
        
    </div>
    <Footer class="footer"/>
  </div>
</template>

<script>

import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import CreateCustomerAcc from '../../components/Employee/CreateCustomerAcc.vue'
import AddMoney from '../../components/Employee/AddMoney.vue'
import TransHistory from '../../components/Employee/TransHistory.vue'

export default {
  name: 'Home',
  components: {
    Header,
    CreateCustomerAcc,
    AddMoney,
    TransHistory,
    Footer
  }
}
</script>

