<template>
  <div class="choosezone rounded-lg shadow">
    <h4 class="myheader text-center">Chức Năng</h4>
    <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link" href="/customer/dashboard"
          ><i class="fa fa-arrow-right" aria-hidden="true"></i>&nbsp;Vấn tin tài
          khoản</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/customer/local-transaction"
          ><i class="fa fa-arrow-right" aria-hidden="true"></i>&nbsp;Chuyển tiền
          nội bộ</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/interbank-transaction"
          ><i class="fa fa-arrow-right" aria-hidden="true"></i>&nbsp;Chuyển tiền
          liên ngân hàng</a
        >
      </li>
      <b-nav-item-dropdown>
        <!-- Using 'button-content' slot -->
        <template v-slot:button-content>
          <i class="fa fa-arrow-right" aria-hidden="true"></i>&nbsp;Xem nợ
        </template>
        <b-dropdown-item href="#">
          <router-link to="/customer/debtor">
            Tạo nhắc nợ
          </router-link>
        </b-dropdown-item>
        <b-dropdown-item href="#">
          <router-link to="/register">
            Danh sách nợ chưa thanh toán
          </router-link>
        </b-dropdown-item>
      </b-nav-item-dropdown>
      <li class="nav-item">
        <a class="nav-link" href="/transaction-history"
          ><i class="fa fa-arrow-right" aria-hidden="true"></i>&nbsp;Lịch sử
          giao dịch</a
        >
      </li>
      <br />
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.choosezone {
  background: white;
}
.myheader {
  width: 100%;
  background: #48b5f2;
  height: 40px;
  padding: 5px;
}
i {
  color: black;
}

</style>
