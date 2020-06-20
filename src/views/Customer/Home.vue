<template>
  <div class="home">
    <Header/>
    <div>
        <div>
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Danh sách tài khoản" active>
                        <account-list></account-list>
                    </b-tab>

                    <b-tab title="Danh sách người nhận">
                        <taker-list></taker-list>
                    </b-tab>

                    <b-tab title="Chuyển khoản">
                    </b-tab>

                    <b-tab title="Nhắc nợ">
                    </b-tab>

                    <b-tab title="Đổi mật khẩu">
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
    <Footer class="footer"/>
  </div>
</template>
<script>
import Header from '../../components/Header.vue'
import Footer from '../../components/Footer.vue'
import AccountList from '../../components/Customer/AccountList.vue'
import TakerList from '../../components/Customer/TakerList.vue'

export default {
    components:{
        Header,
        AccountList,
        TakerList,
        Footer
    }
}
</script>