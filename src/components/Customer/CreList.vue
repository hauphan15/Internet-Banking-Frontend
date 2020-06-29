<template>
  <div class="">
    <div v-if="show" class="ml-2">
      <p>
        <b>- {{ debt.Name }}:</b> {{ debt.Content }} - {{ debt.Money }}VNĐ
      </p>
      <form class="form-inline" @submit="onDelete">
        <input
          type="text"
          id="inputdel"
          class="form-control"
          placeholder="lời nhắn"
          name="text"
        />

        <button type="submit" class="btn btn-outline-danger ml-3">Xóa</button>
      </form>
      <hr />
    </div>

    <div class="mt-2">
      <table class="table table-borderless table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Người gửi</th>
            <th>STK</th>
            <th>Lời nhắn</th>
            <th>Tiền nợ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in items"
            :key="index"
            @click="rowSelect(item)"
          >
            <td>{{ index + 1 }}</td>
            <td>{{ item.FullName }}</td>
            <td>{{ item.Number }}</td>
            <td>{{ item.Content }}</td>
            <td class="money">{{ item.Money }} VNĐ</td>
            <td class="p-1">
              <button v-on:click="onPay" class="btn btn-outline-success">
                Trả
              </button>
              <button v-on:click="onDel" class="btn btn-outline-danger ml-1">
                Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items"],
  data() {
    return {
      show: false,
      debt: {
        Name: "",
        STK: "",
        Content: "",
        Money: "",
      },
    };
  },
  methods: {
    rowSelect(item) {
      this.show = true;
      this.debt.Name = item.FullName;
      this.debt.STK = item.Number;
      this.debt.Content = item.Content;
      this.debt.Money = item.Money;
    },
    onPay() {
      console.log(this.debt);
    },
    onDel() {
      console.log(this.debt);
    },
    onDelete(event) {
      event.preventDefault();
      const data = {
        UserID: localStorage.getItem("userid"),
        Number: this.debt.STK,
        Content: this.debt.Content,
        Money: this.debt.Money,
        isdebtor: false,
      };
      this.$store.dispatch("removeDebt", data);
    },
  },
};
</script>

<style scroped>
.money {
  color: red;
}
#btndel {
  width: 100px;
  height: 40px;
  padding: 0;
}
#inputdel {
  width: 400px;
}
</style>
