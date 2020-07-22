<template>
  <div class="choosezone rounded-lg shadow">
    <h4 class="myheader text-center">Chức Năng</h4>
    <ul class="nav flex-column">

        <li class="nav-item">
            <router-link class="nav-link" to='/employee/createCustomerAcc'>Tạo tài khoản khách hàng</router-link>
        </li>
        
        <li class="nav-item">
            <router-link class="nav-link" to='/employee/addMoney'>Nạp tiền vào tài khoản</router-link>
        </li>

        <li class="nav-item">
            <router-link class="nav-link" to='/employee/createSavingAcc'>Tạo tài khoản tiết kiệm</router-link>
        </li>

        <li class="nav-item">
            <router-link class="nav-link" to='/employee/transHistory'>Lịch sử giao dịch</router-link>
        </li>

      <br />
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.myheader {
  width: 100%;
  background: #48b5f2;
  height: 40px;
  padding: 5px;
}

.nav-link{
  color: black;
}

.router-link-active{
  font-weight: bold;
}

</style>
