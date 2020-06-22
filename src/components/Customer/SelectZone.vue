<template>
  <div class="choosezone rounded-lg shadow">
    <h4 class="myheader text-center">Chức Năng</h4>
    <ul class="nav flex-column">

      <li class="nav-item">
        <router-link class="nav-link" to='/customer/accountlist'>Danh sách tài khoản</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to='/customer/takerlist'>Danh sách người nhận</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to='/customer/local-transaction'>Chuyển tiền nội bộ</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to='/customer/inter-transaction'>Chuyển tiền liên ngân hàng</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to='/customer/createdebtor'>Tạo nhắc nợ</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to='/customer/debtlist'>Danh sách nợ</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to='/customer/transaction-history'>Lịch sử giao dịch</router-link>
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
