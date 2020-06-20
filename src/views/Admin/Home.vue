<template>
  <div class="home">
    <Header/>
    <div>
        <div>
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Tạo tài khoản nhân viên" active>
                        <create-employee-acc></create-employee-acc>
                    </b-tab>
                    <b-tab title="Quản lý nhân viên">
                        <mange-employee></mange-employee>
                    </b-tab>
                    <b-tab title="Xem lịch sử giao dịch với đối tác">
                       <partner-trans></partner-trans>
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
    <Footer class="footer"/>
  </div>
</template>

<script>

import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import CreateEmployeeAcc from '../../components/Admin/CreateEmployeeAcc.vue'
import MangeEmployee from '../../components/Admin/ManageEmployee.vue'
import PartnerTrans from '../../components/Admin/PartnerTrans.vue'


export default {
  name: 'Home',
  components: {
    Header,
    CreateEmployeeAcc,
    MangeEmployee,
    PartnerTrans,
    Footer
  }
}
</script>

