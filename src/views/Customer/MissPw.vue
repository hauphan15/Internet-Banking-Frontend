<template>
  <div >
    <Header />
    <div class="misspw">
        <miss-pw></miss-pw>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "../../components/Header"
import MissPw from '../../components/Customer/MissPw.vue'
import Footer from '../../components/Footer.vue'
import mytoken from "../../public/myToken"

export default {
    components: {
        Header, 
        MissPw,
        Footer
    },
    mounted() {
      mytoken.RefreshMyToken(this.$router);
    }
}
</script>

<style>
.misspw{
    margin: 150px auto;
    width: 400px;
}
</style>