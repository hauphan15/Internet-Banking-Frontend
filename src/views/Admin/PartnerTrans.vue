<template>
  <div >
    <Header />
    <div class="dashboard row m-4 p-3">
      <div class="col-sm-3">
        <AdminMenu/>
      </div>
      <div class="maincontent col-sm-9 shadow">
          <partner-trans></partner-trans>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>

import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import AdminMenu from "../../components/Admin/AdminMenu.vue"
import PartnerTrans from '../../components/Admin/PartnerTrans.vue'
import AdminRefresh from '../../AutoRefreshToken/AdminRefresh'

export default {
  name: 'Home',
  components: {
    Header,
    AdminMenu,
    PartnerTrans,
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
