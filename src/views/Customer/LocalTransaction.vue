<template>
  <div >
    <Header />
    <div class="dashboard row m-4 p-3">
      <div class="col-sm-3">
        <SelectZone/>
      </div>
      <div class="maincontent col-sm-9 shadow">
        <local-transaction></local-transaction>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "../../components/Header";
import LocalTransaction from "../../components/Customer/LocalTransaction.vue";
import SelectZone from "../../components/Customer/SelectZone"
import Footer from '../../components/Footer.vue'
import mytoken from "../../public/myToken"

export default {
    components: {
        Header, LocalTransaction, SelectZone,Footer
    },
    mounted() {
      mytoken.RefreshMyToken(this.$router);
    }
}
</script>

<style>
.maincontent {
  background: white;
}
</style>