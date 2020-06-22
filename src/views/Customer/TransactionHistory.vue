<template>
  <div >
    <Header />
    <div class="dashboard row m-4 p-3">
      <div class="col-sm-3">
        <SelectZone/>
        <br>
        <ProfileZone/>
      </div>
      <div class="maincontent col-sm-9 shadow">
        <transaction-history></transaction-history>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "../../components/Header";
import myToken from "../../public/myToken";
import TransactionHistory from "../../components/Customer/TransactionHistory.vue";
import SelectZone from "../../components/Customer/SelectZone"
import ProfileZone from "../../components/Customer/ProfileZone"
import Footer from '../../components/Footer.vue'

export default {
    components: {
        Header, TransactionHistory, SelectZone, ProfileZone, Footer
    },
    mounted() {
        myToken.RefreshMyToken(this.$router);
    },
    data() {
        return {

        }
    }
}
</script>

<style>
.maincontent {
  background: white;
}
</style>