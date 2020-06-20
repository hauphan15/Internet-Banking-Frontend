<template>
  <div class="p-2">
      <h1 class="text-center mt-2">Tạo nhắc nợ</h1>
    <form class="form">
      <div class="form-group">
        <label for="stk">Số tài khoản:</label>
        <input type="text" class="form-control" placeholder="STK" id="stk" />
      </div>
      <div class="form-group">
        <label for="money">Số tiền:</label>
        <input
          type="text"
          class="form-control"
          placeholder="Số Tiền"
          id="money"
        />
      </div>
      <div class="form-group">
        <label for="content">Lời Nhắc:</label>
        <input
          type="text"
          class="form-control"
          placeholder="Nội dung"
          id="content"
        />
      </div>
          <button type="submit" class="btn btn-primary mt-2">Submit</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
#stk {
    width: 40%;
}
#money {
    width: 40%;
}
#content {
    width: 60%;
}
.form {
    margin-left: 250px;
    margin-top: 50px;
}
</style>
