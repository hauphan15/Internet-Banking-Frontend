<template>
  <div>
    <Header />
    <div class="dashboard row m-4 p-3">
      <div class="col-sm-3">
        <SelectZone />
      </div>
      <div class="maincontent col-sm-9 shadow p-0">
        <b-tabs  pills card>
          <b-tab title="Danh sách nợ" active>
            <DebtList :items="DebtorList.list"></DebtList>
          </b-tab>
          <b-tab title="Danh sách nợ chưa thanh toán"
            ><cre-list :items="CreditorList.list"></cre-list></b-tab
          >
        </b-tabs>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../../components/Header";
import DebtList from "../../components/Customer/DebtList.vue";
import CreList from "../../components/Customer/CreList.vue";
import SelectZone from "../../components/Customer/SelectZone";
import Footer from "../../components/Footer.vue";
import mytoken from "../../public/myToken";
import { mapGetters } from "vuex";

export default {
  components: {
    Header,
    DebtList,
    SelectZone,
    Footer,
    CreList
  },
  mounted() {
    mytoken.RefreshMyToken(this.$router);
    this.$store.dispatch("debtorList", localStorage.getItem("userid"));
    this.$store.dispatch("creditorList", localStorage.getItem("userid"));   
  },
  computed: {
    ...mapGetters(["DebtorList", "CreditorList"]),
  },
};
</script>

<style>
.maincontent {
  background: white;
}
</style>
