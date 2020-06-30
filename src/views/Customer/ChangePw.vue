<template>
  <div >
    <Header />
    <div class="dashboard row m-4 p-3">
      <div class="col-sm-3">
        <SelectZone/>
      </div>
      <div class="maincontent col-sm-9 shadow">
          <change-pw></change-pw>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "../../components/Header"
import SelectZone from "../../components/Customer/SelectZone"
import ChangePw from '../../components/Customer/ChangePw.vue'
import Footer from '../../components/Footer.vue'
import UserRefresh from "../../AutoRefreshToken/UserRefresh"

export default {
    components: {
        Header, 
        SelectZone, 
        ChangePw,
        Footer
    },
    mounted() {
      UserRefresh.RefreshMyToken(this.$router);
    }
}
</script>

<style>
.maincontent {
  background: white;
}
</style>