<template>
  <div class="logout">
    <div>
      <span class="date">{{today()}}</span>,您今天共成交
      <span class="orderCount">{{orderCount}}</span> 单,为店里进账
      <span class="orderPrice">{{allPrice}}</span> 元。
    </div>
    <div>
      感谢您的努力!!!
    </div>
    <div>
      <el-button type="primary" @click="logOut()">退出</el-button>
    </div>
  </div>
</template>

<script>
const common = require("../../../config/config");

export default {
  name: "logout",
  data() {
    return {
      power: 2,
      user: "",
      operator: "",
      orderCount: 0,
      allPrice: 0
    };
  },
  created() {
    if (sessionStorage.wlqUser) {
      let user = JSON.parse(sessionStorage.wlqUser);
      this.power = user.power;
      this.user = user.user;
      this.operator = user.user;
      this.getDateOrder();
    }
    console.log(this.operator);
  },
  methods: {
    today() {
      let date = new Date(),
        nowYear = date.getFullYear(),
        nowMonth = date.getMonth() + 1, //注意getMonth从0开始，getDay()也是(此时0代表星期日)
        nowDay = date.getDate();
      return `${nowYear}-${nowMonth}-${nowDay}`;
    },
    startDate() {
      let start = new Date();
      start.setHours(0);
      start.setMinutes(0);
      start.setSeconds(0);
      start.setMilliseconds(0);
      return start.valueOf();
    },
    endDate() {
      let start = new Date();
      start.setHours(23);
      start.setMinutes(59);
      start.setSeconds(59);
      start.setMilliseconds(0);
      return start.valueOf();
    },
    getDateOrder() {
      this.$axios
        .get(common.apiUrl + "/order/dateOrder", {
          params: {
            startDate: this.startDate(),
            endDate: this.endDate(),
            operator: this.operator
          }
        })
        .then(response => {
          // console.log(response);
          let data = response.data.data;
          let allPrice = 0;
          data.forEach(element => {
            allPrice += element.allPrice;
          });
          this.orderCount = data.length;
          this.allPrice = allPrice;
        })
        .catch(error => {
          console.log(error);
          this.$message.error("网络错误");
        });
    },
    logOut() {
      sessionStorage.clear();
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logout {
  width: 100%;
  height: 100%;
  overflow: hidden;
  text-align: center;
}
.logout div:first-child {
  margin-top: 200px;
  margin-bottom: 30px;
}
.logout div:nth-child(2) {
  margin-bottom: 120px;
}
button {
  width: 400px;
}
.date {
  font-weight: bold;
}
.orderCount {
  font-size: 18px;
  font-weight: bold;
  color: green;
}
.orderPrice {
  font-size: 18px;
  font-weight: bold;
  color: red;
}
</style>
