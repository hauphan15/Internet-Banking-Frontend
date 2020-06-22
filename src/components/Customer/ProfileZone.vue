<template>
  <div class="profilezone rounded-lg shadow">
    <h4 class="myheader text-center">Tài Khoản</h4>
    <ul class="nav flex-column">

      <li class="nav-item">
        <a class="nav-link" href="/customer/dashboard">Thông tin cá nhân</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" href="/customer/local-transaction">Đổi mật khẩu</a>
      </li>

      <br>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.profilezone {
  background: white;
}
.myheader {
  width: 100%;
  background: #48B5F2 ;
  height: 40px;
  padding: 5px;
}
i{
    color: black;
}
</style>
