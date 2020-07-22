<template>
  <div class="choosezone rounded-lg shadow">
    <h4 class="myheader text-center">Chức Năng</h4>
    <ul class="nav flex-column">

      <li class="nav-item">
        <router-link class="nav-link" to='/admin/createEmployeeAcc'>Tạo tài khoản nhân viên</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to='/admin/manageEmployee'>Quản lý nhân viên</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to='/admin/partnerTrans'>Giao dịch với đối tác</router-link>
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
