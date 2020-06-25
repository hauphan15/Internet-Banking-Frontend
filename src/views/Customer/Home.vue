<template>
  <div >
    <Header />
    <div class="dashboard row m-4 p-3">

      <div class="col-sm-3">
        <SelectZone/>
      </div>

      <div class="maincontent col-sm-9 shadow">
      </div>

    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "../../components/Header"
import Footer from '../../components/Footer.vue'
import SelectZone from "../../components/Customer/SelectZone"


export default {
  name: "dashboard",
  components: {
    Header, 
    SelectZone, 
    Footer
  }
};
</script>

<style>
.maincontent {
  background: white;
}
</style>
