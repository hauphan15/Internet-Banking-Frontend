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
        
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header";
import myToken from "../../public/myToken";
import SelectZone from "../../components/Customer.components/SelectZone"
import ProfileZone from "../../components/Customer.components/ProfileZone"
export default {
  name: "dashboard",
  components: {
    Header, SelectZone, ProfileZone
  },
  mounted() {
    myToken.RefreshMyToken(this.$router);
  },
  methods: {
    GotoView: function() {
      this.$router.push("/customer/nhacno");
    },
  },
};
</script>

<style>
.maincontent {
  background: white;
}
</style>
