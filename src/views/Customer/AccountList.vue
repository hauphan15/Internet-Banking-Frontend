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
          <account-list/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "../../components/Header"
import myToken from "../../public/myToken"
import SelectZone from "../../components/Customer/SelectZone"
import ProfileZone from "../../components/Customer/ProfileZone"
import AccountList from '../../components/Customer/AccountList.vue'
import Footer from '../../components/Footer.vue'

export default {
    components: {
        Header, 
        SelectZone, 
        ProfileZone,
        AccountList,
        Footer
    },
    mounted() {
        myToken.RefreshMyToken(this.$router);
    }
}
</script>

<style>
.maincontent {
  background: white;
}
</style>