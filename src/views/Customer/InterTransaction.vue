<template>
  <div >
    <Header />
    <div class="dashboard row m-4 p-3">
      <div class="col-sm-3">
        <SelectZone/>
      </div>
      <div class="maincontent col-sm-9 shadow">
        <inter-transaction></inter-transaction>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "../../components/Header";
import InterTransaction from "../../components/Customer/InterTransaction.vue";
import SelectZone from "../../components/Customer/SelectZone"
import Footer from '../../components/Footer.vue'

export default {
    components: {
        Header, InterTransaction, SelectZone,Footer
    }
}
</script>

<style>
.maincontent {
  background: white;
}
</style>