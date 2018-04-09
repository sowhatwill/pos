<template>
  <div class="allOrder">
    <div class="header">
      <span> 操作员职位:</span>
      <span>{{job}}</span>
      <span>操作员名称:</span>
      <span>{{user}}</span>
    </div>
    <div class="payInfo">
      <template>
        <!-- <el-date-picker type="date" placeholder="开始日期" v-model="timeDate" style="width: 200px;"></el-date-picker>--
        <el-date-picker type="date" placeholder="结束日期" v-model="timeDate1" style="width: 200px;"></el-date-picker> -->
        <el-select v-model="operator" placeholder="请选择" style="margin-right:10px" @change="orderList">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled">
          </el-option>
        </el-select>
      </template>
      <el-tabs type="border-card">
        <el-tab-pane label="合计">
          <el-table border style="width:100%" max-height="450" :data="orderData1" show-summary>
            <el-table-column prop="orderNum" label="流水号" align="center" width="200" fixed="left"></el-table-column>
            <el-table-column label="订单类型" align="center" width="200">
              <template slot-scope="scope">
                {{scope.row.orderType==1?"店内订单":"外卖"}}
              </template>
            </el-table-column>
            <el-table-column prop="orderInfo" label="购买详情" align="center"></el-table-column>
            <el-table-column prop="operator" label="操作人" align="center"></el-table-column>
            <el-table-column prop="allPrice" label="金额" align="center" width="200" fixed="right"></el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="店内订单">
          <el-table border style="width:100%" max-height="450" :data="orderData2" show-summary>
            <el-table-column prop="orderNum" label="流水号" align="center" width="200" fixed="left"></el-table-column>
            <el-table-column label="订单类型" align="center" width="200">
              <template slot-scope="scope">
                {{scope.row.orderType==1?"店内订单":"外卖"}}
              </template>
            </el-table-column>
            <el-table-column prop="orderInfo" label="购买详情" align="center"></el-table-column>
            <el-table-column prop="operator" label="操作人" align="center"></el-table-column>
            <el-table-column prop="allPrice" label="金额" align="center" width="200" fixed="right"></el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="外卖订单">
          <el-table border style="width:100%" max-height="450" :data="orderData3" show-summary>
            <el-table-column prop="orderNum" label="流水号" align="center" width="200" fixed="left"></el-table-column>
            <el-table-column label="订单类型" align="center" width="200">
              <template slot-scope="scope">
                {{scope.row.orderType==1?"店内订单":"外卖"}}
              </template>
            </el-table-column>
            <el-table-column prop="orderInfo" label="购买详情" align="center"></el-table-column>
            <el-table-column prop="operator" label="操作人" align="center"></el-table-column>
            <el-table-column prop="allPrice" label="金额" align="center" width="200" fixed="right"></el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>

  </div>
</template>

<script>
const common = require("../../../config/config");

export default {
  name: "HelloWorld",
  data() {
    return {
      power: 2,
      user: "",
      operator: 0,
      job: "店员",
      timeDate: "",
      timeDate1: "",
      orderData1: [],
      orderData2: [],
      orderData3: [],
      orderType: 0,
      options: []
    };
  },
  created() {
    if (sessionStorage.wlqUser) {
      let user = JSON.parse(sessionStorage.wlqUser);
      this.user = user.user;
      this.power = user.power;
      this.operator = user.user;
      this.job = user.power == 1 ? "店长" : "职员";
      this.userList(this.operator, this.power);
      this.orderList();
    }
  },
  methods: {
    orderList() {
      let operator = this.operator;
      let params = {
        orderPaid: 1
      };
      if (operator != 0) {
        params["operator"] = operator;
      }
      this.$axios
        .get(common.apiUrl + "/order/get", {
          params: params
        })
        .then(response => {
          let data = response.data.data;
          this.orderData1 = data;
          let orderData2 = [];
          let orderData3 = [];
          data.forEach(element => {
            switch (element.orderType) {
              case 1:
                orderData2.push(element);
                break;
              case 2:
                orderData3.push(element);
                break;
              default:
                break;
            }
          });
          this.orderData2 = orderData2;
          this.orderData3 = orderData3;
        })
        .catch(error => {
          console.log(error);
          this.$message.error("网络错误");
        });
    },
    userList(user, power = 2) {
      if (power == 1) {
        this.options.push({
          value: 0,
          label: "All"
        });
        this.$axios
          .get(common.apiUrl + "/user/get")
          .then(response => {
            let data = response.data.data;
            data.forEach(element => {
              this.options.push({
                value: element.user,
                label: element.user
              });
            });
          })
          .catch(error => {
            console.log(error);
            this.$message.error("网络错误");
          });
      } else {
        this.options.push({
          value: user,
          label: user
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  height: 39px;
  background-color: #f5f7fa;
  border-bottom: 1px solid #dcdfe6;
  line-height: 38px;
  padding: 0 30px;
  text-align: right;
}
.header span:nth-child(2) {
  padding-right: 30px;
}
.header span:nth-child(2),
.header span:nth-child(4) {
  color: blue;
}
.payInfo {
  text-align: right;
}
.payInfo div:first-child {
  margin: 10px;
}
</style>
