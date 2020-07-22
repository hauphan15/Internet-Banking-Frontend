<template>
  <div >
    <Header />
    <div class="dashboard row m-4 p-3">
      <div class="col-sm-3">
        <AdminMenu/>
      </div>
      <div class="maincontent col-sm-9 shadow">
          <manage-employee></manage-employee>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>

import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import AdminMenu from "../../components/Admin/AdminMenu.vue"
import ManageEmployee from '../../components/Admin/ManageEmployee.vue'
import AdminRefresh from '../../AutoRefreshToken/AdminRefresh'

export default {
  name: 'Home',
  components: {
    Header,
    AdminMenu,
    ManageEmployee,
    Footer
  },
  mounted() {
      AdminRefresh.RefreshMyToken(this.$router);
  }
}
</script>

<style>
.maincontent {
  background: white;
}
</style>
