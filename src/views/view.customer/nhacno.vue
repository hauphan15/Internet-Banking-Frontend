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
        <CreateDebtor/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header";
import myToken from "../../public/myToken";
import CreateDebtor from "../../components/Customer.components/CreateDebtor";
import SelectZone from "../../components/Customer.components/SelectZone"
import ProfileZone from "../../components/Customer.components/ProfileZone"
export default {
    components: {
        Header, CreateDebtor, SelectZone, ProfileZone
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