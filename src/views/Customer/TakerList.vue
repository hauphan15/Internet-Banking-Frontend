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
        <TakerList/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "../../components/Header";
import TakerList from "../../components/Customer/TakerList";
import SelectZone from "../../components/Customer/SelectZone"
import ProfileZone from "../../components/Customer/ProfileZone"
import Footer from '../../components/Footer.vue'

export default {
    components: {
        Header, TakerList, SelectZone, ProfileZone,Footer
    }
}
</script>

<style>
.maincontent {
  background: white;
}
</style>