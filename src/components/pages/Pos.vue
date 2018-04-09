<template>
  <div class="order">
    <el-row>
      <el-col :span='7' id="orderList">
        <el-tabs type="border-card" @tab-click="tabClick">
          <el-tab-pane label="结账" style="height:100%">
            <el-table border style="width:100%" max-height="500" :data="tableData" :summary-method="tablePriceSum" show-summary>
              <el-table-column prop="goodsName" label="产品名称" align="center"></el-table-column>
              <el-table-column prop="price" label="价格" width="60" align="center"></el-table-column>
              <el-table-column prop="count" label="数量" width="70" align="center"></el-table-column>
              <el-table-column label="操作" fixed="right" width="100" align="center">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="addGoods(scope.row)">
                    增加
                  </el-button>
                  <el-button type="text" size="small" @click="reduceGoods(scope.row)">
                    减少
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
            <div style="margin-top:20px;text-align:center">
              <el-button type="warning" @click="noPay">挂单</el-button>
              <el-button type="danger" @click="delGoods">删除</el-button>
              <el-button type="success" @click="allPrice">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">
            <el-table border style="width:100%" max-height="500" :data="noPayData" show-summary>
              <el-table-column label="购买详情" align="center">
                <template slot-scope="scope">
                  <span>
                    流水单号:{{scope.row.orderNum}}, 详情:{{scope.row.orderInfo}}
                  </span>
                </template>
              </el-table-column>
              <el-table-column prop="allPrice" label="金额" width="50" align="center"></el-table-column>
              <el-table-column label="操作" fixed="right" width="50" align="center">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="payGoods(scope.row)">
                    结账
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="外卖">
            <el-table border style="width:100%" max-height="500" :data="tableData3" show-summary>
              <el-table-column prop="goodsInfo" label="购买详情" align="center"></el-table-column>
              <el-table-column prop="allPrice" label="金额" width="50" align="center"></el-table-column>
              <el-table-column label="操作" fixed="right" width="50" align="center">
                <template slot-scope="scope">
                  <el-button type="text" size="small" @click="payOutGoods(scope.row)">
                    接单
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span='17'>
        <el-row class="hotBox">
          <div class="hot">热销产品</div>
          <div class="hotGoods">
            <ul>
              <wlq-li v-for="(item,index) in hotGoods" :key="index" @click.native="addGoods(item)" :goodsName="item.goodsName" :oldPrice="item.oldPrice" :nowPrice="item.nowPrice"></wlq-li>
            </ul>
          </div>
        </el-row>
        <el-row class="goodsBox">
          <el-tabs type="border-card">
            <el-tab-pane label="主食">
              <div class="cookList">
                <div v-if="!goodsType1.length">
                  暂无数据
                </div>
                <ul v-else>
                  <wlq-li-goods v-for="(item,index) in goodsType1" :key="index" @click.native="addGoods(item)" :imgSrc="item.imgUrl" :goodsName="item.goodsName" :oldPrice="item.oldPrice" :nowPrice="item.nowPrice"></wlq-li-goods>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="零食">
              <div class="cookList">
                <div v-if="!goodsType2.length">
                  暂无数据
                </div>
                <ul v-else>
                  <wlq-li-goods v-for="(item,index) in goodsType2" :key="index" @click.native="addGoods(item)" :imgSrc="item.imgUrl" :goodsName="item.goodsName" :oldPrice="item.oldPrice" :nowPrice="item.nowPrice"></wlq-li-goods>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <div class="cookList">
                <div v-if="!goodsType3.length">
                  暂无数据
                </div>
                <ul v-else>
                  <wlq-li-goods v-for="(item,index) in goodsType3" :key="index" @click.native="addGoods(item)" :imgSrc="item.imgUrl" :goodsName="item.goodsName" :oldPrice="item.oldPrice" :nowPrice="item.nowPrice"></wlq-li-goods>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <div class="cookList">
                <div v-if="!goodsType4.length">
                  暂无数据
                </div>
                <ul v-else>
                  <wlq-li-goods v-for="(item,index) in goodsType4" :key="index" @click.native="addGoods(item)" :imgSrc="item.imgUrl" :goodsName="item.goodsName" :oldPrice="item.oldPrice" :nowPrice="item.nowPrice"></wlq-li-goods>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import hotGoods from "../common/HotGoods";
import goods from "../common/Goods";
const common = require("../../../config/config");
export default {
  name: "pos",
  data() {
    return {
      power: 2,
      user: "",
      operator: "",
      tableData: [],
      noPayData: [], //
      tableData3: [
        {
          num: 1519882125000,
          goodsInfo:
            "流水号:1519882125000 订单详情:脆皮炸鸡腿(¥20 * 1),香辣鸡腿堡(¥18 * 1),田园鸡腿堡(¥15 * 1)",
          allPrice: 53
        },
        {
          num: 1519882125001,
          goodsInfo:
            "流水号:1519882125001 订单详情:脆皮炸鸡腿(¥20 * 1),香辣鸡腿堡(¥18 * 1),田园鸡腿堡(¥15 * 1)",
          allPrice: 53
        },
        {
          num: 1519882125002,
          goodsInfo:
            "流水号:1519882125002 订单详情:脆皮炸鸡腿(¥20 * 1),香辣鸡腿堡(¥18 * 1),田园鸡腿堡(¥15 * 1)",
          allPrice: 53
        }
      ], //外卖
      hotGoods: [], //热销
      goodsType1: [], //主食
      goodsType2: [], //零食
      goodsType3: [], //饮料
      goodsType4: [] //套餐
    };
  },
  created() {
    //获取各种类的商品
    this.goodsList();
    //获取热销商品
    this.getHotGoods();
    if (sessionStorage.wlqUser) {
      let user = JSON.parse(sessionStorage.wlqUser);
      this.power = user.power;
      this.user = user.user;
      this.operator = user.user;
    }
  },
  components: {
    "wlq-li": hotGoods,
    "wlq-li-goods": goods
  },
  mounted: function() {
    let orderListHeight = document.body.clientHeight;
    console.log(orderListHeight);
    document.getElementById("orderList").style.height = orderListHeight + "px";
  },
  methods: {
    //获取货品
    goodsList() {
      this.$axios
        .get(common.apiUrl + "/goods/get", {
          params: {
            goodsSale: 1
          }
        })
        .then(response => {
          let data = response.data.data;
          let goodsType1 = [],
            goodsType2 = [],
            goodsType3 = [],
            goodsType4 = [];
          data.forEach(element => {
            if (!element.goodsSale) {
              goodsType5.push(element);
            } else {
              switch (element.goodsType) {
                case 1:
                  goodsType1.push(element);
                  break;
                case 2:
                  goodsType2.push(element);
                  break;
                case 3:
                  goodsType3.push(element);
                  break;
                case 4:
                  goodsType4.push(element);
                  break;
                default:
                  break;
              }
            }
          });
          this.goodsType1 = goodsType1;
          this.goodsType2 = goodsType2;
          this.goodsType3 = goodsType3;
          this.goodsType4 = goodsType4;
        })
        .catch(error => {
          console.log(error);
          this.$message.error("网络错误，不能访问");
        });
    },
    //热销商品
    getHotGoods() {
      this.$axios
        .get(common.apiUrl + "/goods/hotGoods", {
          count: 8
        })
        .then(response => {
          if (!response.status) {
            this.$message.error("热销产品获取失败");
          } else {
            this.hotGoods = response.data.data;
            // console.log(response.data.data);
          }
        })
        .catch(error => {
          console.log(error);
          this.$message.error("网络错误，不能访问");
        });
    },
    //添加一个商品
    addGoods(goods) {
      let ordered = true;
      for (let i = 0, len = this.tableData.length; i < len; i++) {
        if (this.tableData[i]._id == goods._id) {
          this.tableData[i].count++;
          ordered = false;
        }
      }
      if (ordered) {
        this.tableData.push({
          _id: goods._id,
          goodsName: goods.goodsName,
          price: goods.nowPrice,
          count: 1
        });
      }
    },
    //减少一个商品的选购数量
    reduceGoods(goods) {
      for (let i = 0, len = this.tableData.length; i < len; i++) {
        if (this.tableData[i]._id == goods._id) {
          if (this.tableData[i].count == 1) {
            this.tableData = this.tableData.filter(o => {
              return o._id != goods._id;
            });
          } else {
            this.tableData[i].count--;
          }
        }
      }
    },
    // 删除商品列表
    delGoods() {
      this.tableData = [];
    },
    //表格展示的价格
    tablePriceSum(param) {
      const sums = [];
      if (this.tableData.length != 0) {
        sums[0] = "合计";
        let allPrice = 0;
        let allCount = 0;
        this.tableData.forEach(data => {
          {
            allPrice += data.count * data.price;
            allCount += data.count;
          }
        });
        sums[1] = allPrice;
        sums[2] = allCount;
      }
      return sums;
    },
    /**
     * 挂单
     *
     * 功能:
     *    1.订单结算,订单列表消失
     *    2.挂单(上传订单信息,更新为为结算状态)
     */
    noPay() {
      if (!this.tableData.length) {
        this.$message.error("没有订单,无法挂单!");
      } else {
        //计算价格
        let allPrice = 0;
        let allCount = 0;
        let orderList = this.tableData;
        this.tableData.forEach(data => {
          {
            allPrice += data.count * data.price;
            allCount += data.count;
          }
        });
        //提示挂单成功
        this.$message({
          message: "挂单成功",
          type: "success",
          duration: "1000"
        });
        //延迟清除商品列表
        setTimeout(() => {
          this.tableData = [];
        }, 1100);
        //上传订单信息
        this.orderInfoAdd(
          orderList,
          "gd" + Date.parse(new Date()),
          this.operator,
          0
        );
      }
    },
    //挂单结账
    payGoods(order) {
      this.$axios
        .put(common.apiUrl + "/order/update", {
          id: order._id,
          orderPaid: 1
        })
        .then(response => {
          if (!response.data.status) {
            this.$message.error("结账失败");
          } else {
            this.$message({
              message: `流水号为:${
                order.orderNum
              }的已结账,感谢你又为店里出了一份力!`,
              type: "success",
              duration: "1000"
            });
            setTimeout(() => {
              this.noPayData = this.noPayData.filter(o => {
                return o._id != order._id;
              });
            }, 1100);
          }
        })
        .catch(error => {
          console.error(error);
          this.$message.error("网络错误，不能访问");
        });
    },
    noPayGoods() {
      this.$axios
        .get(common.apiUrl + "/order/get", {
          params: {
            orderPaid: 0
          }
        })
        .then(response => {
          this.noPayData = response.data.data;
        })
        .catch(error => {
          console.log(error);
          this.$message.error("网络错误");
        });
    },
    /**
     * 直接结算
     *
     * 功能:
     *    1.订单结算,并提示交易成功,订单列表消失
     *    2.上传订单
     */
    allPrice() {
      if (this.tableData.length != 0) {
        //计算价格
        let allPrice = 0;
        let allCount = 0;
        let orderList = this.tableData;
        this.tableData.forEach(data => {
          {
            allPrice += data.count * data.price;
            allCount += data.count;
          }
        });
        //提示结算成功
        this.$message({
          message:
            "顾客花费" + allPrice + "元,结账成功，感谢你又为店里出了一份力!",
          type: "success",
          duration: "1000"
        });
        //延迟清除商品列表
        setTimeout(() => {
          this.tableData = [];
        }, 1100);
        //上传订单信息
        this.orderInfoAdd(
          orderList,
          "jz" + Date.parse(new Date()),
          this.operator
        );
      } else {
        this.$message.error("不能空结。老板了解你急切的心情！");
      }
    },
    //外卖结账
    payOutGoods(goods) {
      this.tableData3 = this.tableData3.filter(o => {
        return o.num != goods.num;
      });
      this.$message({
        message: `流水号为:${goods.num}的已结账,感谢你又为店里出了一份力!`,
        type: "success",
        duration: "1500"
      });
    },
    //统计各个商品的销量
    goodsSaleCount(goodsList) {
      let goodsSaleCountArr = [];
      goodsList.array.forEach(element => {
        goodsSaleCountArr.push({ id: element._id, count: element.count });
      });
      console.log(JSON.stringify(goodsSaleCountArr));
    },
    //新增一条订单信息
    orderInfoAdd(orderList, orderNum, operator, orderPaid = 1, orderType = 1) {
      let data = {
        orderList: JSON.stringify(orderList),
        orderNum: orderNum,
        operator: operator,
        orderPaid: orderPaid,
        orderType: orderType
      };
      this.$axios({
        url: common.apiUrl + "/order/add",
        method: "post",
        data: data
      })
        .then(response => {
          console.log("订单信息添加成功");
        })
        .catch(error => {
          console.log(error);
          this.$message.error("网络错误");
        });
    },
    //tab点击
    tabClick(tab, event) {
      let label = tab.label;
      if (label == "挂单") {
        console.log("挂单");
        this.noPayGoods();
      }
    }
  }
};
</script>
<style scoped>
#orderList {
  border-right: 1px solid #c4b9c0;
  /* text-align: center; */
}
.hotBox {
  background-color: white;
  overflow: auto;
  padding-bottom: 16px;
}
.hot {
  height: 39px;
  background-color: #f5f7fa;
  border-bottom: 1px solid #dcdfe6;
  line-height: 38px;
  padding: 0 20px;
}
</style>

