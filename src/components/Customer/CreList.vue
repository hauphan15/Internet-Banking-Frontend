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

    <div v-if="show1" class="ml-2">
      <p>
        <b>- {{ debt.Name }}:</b> {{ debt.Content }} - {{ debt.Money }}VNĐ
      </p>
      <form class="form-inline" @submit="onPaydeb">
        <input
          type="text"
          id="inputdel"
          class="form-control"
          placeholder="nhập mã otp"
          name="text"
          v-model="otpCode"
        />

        <button type="submit" class="btn btn-outline-success ml-3">Trả</button>
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
      otpCode: "",
      show: false,
      show1: false,
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
      this.debt.Name = item.FullName;
      this.debt.STK = item.Number;
      this.debt.Content = item.Content;
      this.debt.Money = item.Money;
      
    },
    onPay() {
      if (!this.show1) {
        this.show = false;
        this.show1 = true;
      }
      const data = {
        Number: localStorage.getItem('number')
      };

      this.$store.dispatch('sendOTPCode', data);
    },
    onDel() {
      if (!this.show) {
        this.show1 = false;
        this.show = true;
      }
    },
    onDelete(event) {
      event.preventDefault();
      const data = {
        UserID: localStorage.getItem("userid"),
        Number: this.debt.STK,
        Content: this.debt.Content,
        Money: this.debt.Money,
        isdebtor: true,
      };
      this.$store.dispatch("removeDebt", data);

      const data1 = {
        UserID: localStorage.getItem("userid"),
        Number: this.debt.STK,
        Content: this.debt.Content,
        Money: this.debt.Money,
      };
      this.$store.dispatch("sendNotify", data1);
      this.$router.go(0);
    },
    onPaydeb(event) {
      event.preventDefault();

      const transaction = {
        Number_NG: localStorage.getItem('number'),
        Number_NN: this.debt.STK,
        Content: this.debt.Content,
        Money: this.debt.Money,
        Fee: "NG",
        Type: 'NHACNO'
      };
      const otpCode = this.otpCode;
      const data = {
          transaction,
          otpCode
      };
      this.$store.dispatch('sendLocal', data);

      const data1 = {
        UserID: localStorage.getItem("userid"),
        Number: this.debt.STK,
        Content: this.debt.Content,
        Money: this.debt.Money,
        isdebtor: true,
      };
      this.$store.dispatch("removeDebt", data1);
      this.$router.go(0);
    }
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
