<template>
  <div >
    <Header />
    <div class="dashboard row m-4 p-3">
      <div class="col-sm-3">
        <employee-menu></employee-menu>
      </div>

      <div class="maincontent col-sm-9 shadow">
          <trans-history></trans-history>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>

import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import EmployeeMenu from "../../components/Employee/EmployeeMenu.vue"
import TransHistory from '../../components/Employee/TransHistory.vue'
import EmployeeRefresh from '../../AutoRefreshToken/EmployeeRefresh'

export default {
  name: 'Home',
  components: {
    Header,
    EmployeeMenu,
    TransHistory,
    Footer
  },
  mounted() {
      EmployeeRefresh.RefreshMyToken(this.$router);
  }
}
</script>

<style>
.maincontent {
  background: white;
}
</style>
