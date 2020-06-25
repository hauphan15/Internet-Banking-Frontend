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

export default {
    components: {
        Header, 
        MissPw,
        Footer
    }
}
</script>

<style>
.misspw{
    margin: 150px auto;
    width: 400px;
}
</style>