<template>
  <div class="goodsList">
    <el-row>
      <el-col :span="12" class="left" id="left">
        <el-row>
          <el-col :span="24" class="header">
            货架
          </el-col>
        </el-row>
        <el-row>
          <template>
            <el-tabs type="border-card">
              <el-tab-pane label="主食">
                <template>
                  <el-table :data="goodsType1" border max-height="500">
                    <el-table-column label="图片" width="100" align="center" fixed="left">
                      <template slot-scope="scope">
                        <img :src="scope.row.imgUrl" alt="" width="60">
                      </template>
                    </el-table-column>
                    <el-table-column label="描述" align="center">
                      <template slot-scope="scope">
                        <span>
                          {{goodsInfo(scope.row.goodsName, scope.row.oldPrice, scope.row.nowPrice)}}
                        </span>
                      </template>
                    </el-table-column>
                    <el-table-column label="操作" width="120" align="center" fixed="right">
                      <template slot-scope="scope">
                        <el-button type="text" size="small" @click="alertShow(scope.row)">修改</el-button>
                        <el-button type="text" size="small" @click="goodsNotSale(scope.row._id,scope.row.goodsType)">下架</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </template>
              </el-tab-pane>
              <el-tab-pane label="零食">
                <template>
                  <el-table :data="goodsType2" border max-height="500">
                    <el-table-column label="图片" width="100" align="center" fixed="left">
                      <template slot-scope="scope">
                        <img :src="scope.row.imgUrl" alt="" width="60">
                      </template>
                    </el-table-column>
                    <el-table-column label="描述" align="center">
                      <template slot-scope="scope">
                        <span>
                          {{goodsInfo(scope.row.goodsName, scope.row.oldPrice, scope.row.nowPrice)}}
                        </span>
                      </template>
                    </el-table-column>
                    <el-table-column label="操作" width="120" align="center" fixed="right">
                      <template slot-scope="scope">
                        <el-button type="text" size="small" @click="alertShow(scope.row)">修改</el-button>
                        <el-button type="text" size="small" @click="goodsNotSale(scope.row._id,scope.row.goodsType)">下架</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </template>
              </el-tab-pane>
              <el-tab-pane label="饮料">
                <template>
                  <el-table :data="goodsType3" border max-height="500">
                    <el-table-column label="图片" width="100" align="center" fixed="left">
                      <template slot-scope="scope">
                        <img :src="scope.row.imgUrl" alt="" width="60">
                      </template>
                    </el-table-column>
                    <el-table-column label="描述" align="center">
                      <template slot-scope="scope">
                        <span>
                          {{goodsInfo(scope.row.goodsName, scope.row.oldPrice, scope.row.nowPrice)}}
                        </span>
                      </template>
                    </el-table-column>
                    <el-table-column label="操作" width="120" align="center" fixed="right">
                      <template slot-scope="scope">
                        <el-button type="text" size="small" @click="alertShow(scope.row)">修改</el-button>
                        <el-button type="text" size="small" @click="goodsNotSale(scope.row._id,scope.row.goodsType)">下架</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </template>
              </el-tab-pane>
              <el-tab-pane label="套餐">
                <template>
                  <el-table :data="goodsType4" border max-height="500">
                    <el-table-column label="图片" width="100" align="center" fixed="left">
                      <template slot-scope="scope">
                        <img :src="scope.row.imgUrl" alt="" width="60">
                      </template>
                    </el-table-column>
                    <el-table-column label="描述" align="center">
                      <template slot-scope="scope">
                        <span>
                          {{goodsInfo(scope.row.goodsName, scope.row.oldPrice, scope.row.nowPrice)}}
                        </span>
                      </template>
                    </el-table-column>
                    <el-table-column label="操作" width="120" align="center" fixed="right">
                      <template slot-scope="scope">
                        <el-button type="text" size="small" @click="alertShow(scope.row)">修改</el-button>
                        <el-button type="text" size="small" @click="goodsNotSale(scope.row._id,scope.row.goodsType)">下架</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </template>
              </el-tab-pane>
              <el-tab-pane label="下架">
                <template>
                  <el-table :data="goodsType5" border max-height="500">
                    <el-table-column label="图片" width="100" align="center" fixed="left">
                      <template slot-scope="scope">
                        <img :src="scope.row.imgUrl" alt="" width="60">
                      </template>
                    </el-table-column>
                    <el-table-column label="描述" align="center">
                      <template slot-scope="scope">
                        <span>
                          {{goodsInfo(scope.row.goodsName, scope.row.oldPrice, scope.row.nowPrice)}}
                        </span>
                      </template>
                    </el-table-column>
                    <el-table-column label="操作" width="120" align="center" fixed="right">
                      <template slot-scope="scope">
                        <el-button type="text" size="small" @click="goodsOnSale(scope.row._id,scope.row.goodsType)">上架</el-button>
                        <el-button type="text" size="small" @click="goodsDel(scope.row._id)">删除</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </template>
              </el-tab-pane>
            </el-tabs>
          </template>
        </el-row>
      </el-col>
      <el-col :span="12" class="right">
        <el-row>
          <el-col :span="24" class="header">
            上货
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24" class="addOne">
            <el-row>
              <el-col :span="10" class="oneLeft">
                <img src="http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg" alt="">
              </el-col>
              <el-col :span="14" class="oneRight">
                <el-row>
                  <el-col :span="6" class="text">
                    名称：
                  </el-col>
                  <el-col :span="18">
                    <el-input placeholder="请输入商品名称" v-model="goodsName" clearable>
                    </el-input>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="6" class="text">
                    原价：
                  </el-col>
                  <el-col :span="18">
                    <el-input placeholder="请输入原价" type="number" v-model="oldPrice">
                    </el-input>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="6" class="text">
                    现价：
                  </el-col>
                  <el-col :span="18">
                    <el-input placeholder="请输入现价(未输入为则为原价)" type="number" v-model="nowPrice">
                    </el-input>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="6" class="text">
                    类型：
                  </el-col>
                  <el-col :span="18">
                    <template>
                      <el-select v-model="goodsType" clearable placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </template>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-row class="addOneBtn">
              <el-button type="primary" @click="addGoods(goodsName, oldPrice, nowPrice, goodsType)">上架</el-button>
            </el-row>
          </el-col>
        </el-row>
        <el-row>
          <el-row class="addMoreBtn">
            <el-button type="primary">批量上传</el-button>
          </el-row>
        </el-row>
      </el-col>
    </el-row>
    <div class="alertBox" id="alertBox">
      <div class="alert">
        <el-row>
          <el-col :span="10" class="oneLeft">
            <img src="http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg" alt="">
          </el-col>
          <el-col :span="14" class="oneRight">
            <el-row>
              <el-col :span="6" class="text">
                名称：
              </el-col>
              <el-col :span="18">
                <el-input placeholder="产品名称" v-model="newGoodsName" clearable>
                </el-input>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6" class="text">
                原价：
              </el-col>
              <el-col :span="18">
                <el-input placeholder="请输入新的原价" type="number" v-model="newOldPrice">
                </el-input>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6" class="text">
                现价：
              </el-col>
              <el-col :span="18">
                <el-input placeholder="请输入新的现价" type="number" v-model="newNowPrice" clearable>
                </el-input>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="6" class="text">
                类型：
              </el-col>
              <el-col :span="18">
                <template>
                  <el-select v-model="newGoodsType" clearable placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>
                </template>
              </el-col>
            </el-row>

          </el-col>
        </el-row>
        <el-row class="addOneBtn">
          <el-button type="default" @click="alertHiden">取消</el-button>
          <el-button type="primary" @click="goodsChange">修改</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
const common = require("../../../config/config");
export default {
  name: "GoodsList",
  data() {
    return {
      power: 2,
      user: "",
      operator: "",
      goodsType1: [], //主食
      goodsType2: [], //零食
      goodsType3: [], //饮料
      goodsType4: [], //套餐
      goodsType5: [], //下架
      goodsName: "",
      oldPrice: "",
      nowPrice: "",
      goodsType: 1,
      newGoodsId: "",
      newGoodsName: "",
      newOldPrice: "",
      newNowPrice: "",
      newGoodsType: "",
      options: [
        {
          value: 1,
          label: "主食"
        },
        {
          value: 2,
          label: "零食"
        },
        {
          value: 3,
          label: "饮料"
        },
        {
          value: 4,
          label: "套餐"
        }
      ]
    };
  },
  methods: {
    goodsInfo(goodsName, oldPrice, newPrice) {
      return `名称:${goodsName} 原价:${oldPrice} 现价:${newPrice}`;
    },
    alertShow(goodsInfo) {
      document.getElementById("alertBox").style.display = "block";
      this.newGoodsId = goodsInfo._id;
      this.newGoodsName = goodsInfo.goodsName;
      this.newOldPrice = goodsInfo.oldPrice;
      this.newNowPrice = goodsInfo.nowPrice;
      this.newGoodsType = goodsInfo.goodsType;
    },
    alertHiden() {
      document.getElementById("alertBox").style.display = "none";
    },
    //添加一个货品
    addGoods() {
      let goods = {
        goodsName: this.goodsName,
        oldPrice: this.oldPrice,
        nowPrice: this.nowPrice ? this.nowPrice : this.oldPrice,
        goodsType: this.goodsType
      };
      this.$axios({
        url: common.apiUrl + "/goods/add",
        method: "post",
        data: goods
      })
        .then(response => {
          if (!response.data.status) {
            this.$message.error("网络错误，不能访问");
          } else {
            this.$message.success("添加成功");
            this.goodsList(goods.goodsType);
            this.goodsName = "";
            this.oldPrice = "";
            this.nowPrice = "";
          }
        })
        .catch(error => {
          console.error(error);
          this.$message.error("网络错误，不能访问");
        });
    },
    //获取货品
    goodsList(goodsType = 0, goodsSale = 1) {
      //货物所有的数据
      let params = {};
      //获取指定类型的数据
      if (goodsType != 0) {
        params = {
          goodsType: goodsType,
          goodsSale: goodsSale
        };
      }
      //获取下架的食物
      if (goodsSale == 0) {
        params = {
          goodsSale: 0
        };
      }
      this.$axios
        .get(common.apiUrl + "/goods/get", {
          params: params
        })
        .then(response => {
          let data = response.data.data;
          if (goodsSale == 0) {
            this.goodsType5 = data;
          } else {
            switch (goodsType) {
              case 0:
                let goodsType1 = [],
                  goodsType2 = [],
                  goodsType3 = [],
                  goodsType4 = [],
                  goodsType5 = [];
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
                this.goodsType5 = goodsType5;
                break;
              case 1:
                this.goodsType1 = data;
                break;
              case 2:
                this.goodsType2 = data;
                break;
              case 3:
                this.goodsType3 = data;
                break;
              case 4:
                this.goodsType4 = data;
                break;
              default:
                break;
            }
          }
        })
        .catch(error => {
          console.log(error);
          this.$message.error("网络错误，不能访问");
        });
    },
    //修改商品信息
    goodsChange() {
      this.$axios
        .put(common.apiUrl + "/goods/update", {
          id: this.newGoodsId,
          goodsName: this.newGoodsName,
          oldPrice: this.newOldPrice,
          nowPrice: this.newNowPrice,
          goodsType: this.newGoodsType
        })
        .then(response => {
          if (!response.data.status) {
            this.$message.error("修改失败");
          } else {
            this.goodsList(this.newGoodsType, 1);
            this.$message.success("修改成功");
            setTimeout(this.alertHiden, 2000);
          }
        })
        .catch(error => {
          console.error(error);
          this.$message.error("网络错误，不能访问");
        });
    },
    /**
      下架一件商品

      功能:
          1.更改下架商品的状态
          2.列表中下架商品消失
          3.下架商品中新增一个下架商品
     */
    goodsNotSale(goodsId, goodsType) {
      //  1.更改下架商品的状态
      this.$axios
        .put(common.apiUrl + "/goods/update", {
          id: goodsId,
          goodsSale: 0
        })
        .then(response => {
          if (!response.data.status) {
            this.$message.error("下架失败");
          } else {
            // this.goodsType1 = this.goodsType1.filter(obj => {
            //   return obj._id != goodsId;
            // });
            // 2.列表中下架商品消失
            switch (goodsType - 0) {
              case 1:
                this.goodsType1 = this.goodsType1.filter(obj => {
                  return obj._id != goodsId;
                });
                break;
              case 2:
                this.goodsType2 = this.goodsType2.filter(obj => {
                  return obj._id != goodsId;
                });
                break;
              case 3:
                this.goodsType3 = this.goodsType3.filter(obj => {
                  return obj._id != goodsId;
                });
                break;
              case 4:
                this.goodsType4 = this.goodsType4.filter(obj => {
                  return obj._id != goodsId;
                });
                break;
              default:
                break;
            }
            // 3.下架商品中新增一个下架商品
            this.goodsList(0, 0);
            this.$message.success("下架成功");
          }
        })
        .catch(error => {
          console.error(error);
          this.$message.error("网络错误，不能访问");
        });
    },
    /**
      上架一件商品

      功能:
          1.更改上架商品的状态
          2.列表中上架商品消失
          3.该类型商品中新增一个上架商品
     */
    goodsOnSale(goodsId, goodsType) {
      //  1.更改下架商品的状态
      this.$axios
        .put(common.apiUrl + "/goods/update", {
          id: goodsId,
          goodsSale: 1
        })
        .then(response => {
          if (!response.data.status) {
            this.$message.error("上架失败");
          } else {
            this.$message.success("上架成功");
            // 2.列表中下架商品消失
            this.goodsType5 = this.goodsType5.filter(obj => {
              return obj._id != goodsId;
            });
            // 3.该类型商品中新增一个上架商品
            this.goodsList(goodsType);
          }
        })
        .catch(error => {
          console.error(error);
          this.$message.error("网络错误，不能访问");
        });
    },
    /**
     * 删除下架商品
     *
     * 功能:
     *    1.删除数据库中的数据
     *    2.删除下架列表中的数据
     */
    goodsDel(goodsId) {
      console.log(goodsId);
      this.$axios({
        url: common.apiUrl + "/goods/delete",
        method: "delete",
        data: {
          id: goodsId
        }
      })
        // .delete(common.apiUrl + "/goods/delete", {
        //   id: goodsId
        // })
        .then(response => {
          if (!response.data.status) {
            this.$message.error("删除失败");
          } else {
            this.$message.success("删除成功");
            // 2.列表中下架商品消失
            this.goodsType5 = this.goodsType5.filter(obj => {
              return obj._id != goodsId;
            });
          }
        })
        .catch(error => {
          console.error(error);
          this.$message.error("网络错误，不能访问");
        });
    }
  },
  created: function() {
    this.goodsList();
    if (sessionStorage.wlqUser) {
      let user = JSON.parse(sessionStorage.wlqUser);
      this.user = user.user;
      this.operator = user.user;
      this.power = user.power;
    }
  },
  mounted: function() {
    let orderListHeight = document.body.clientHeight;
    console.log(orderListHeight);
    document.getElementById("left").style.height = orderListHeight + "px";
  }
};
</script>

<style scoped>
.goodsList {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

.left {
  border-right: 1px solid gray;
  /* background: white; */
}

.left .header,
.right .header {
  height: 39px;
  background-color: #f5f7fa;
  border-bottom: 1px solid #dcdfe6;
  line-height: 38px;
  text-align: center;
}
.addOne {
  height: 400px;
  border-bottom: 1px solid gray;
  padding: 50px 70px;
}
.oneLeft,
.oneRight {
  /* border: 1px solid red; */
  height: 200px;
}
.oneLeft img {
  width: 200px;
  height: 200px;
}
.oneRight .el-row {
  padding: 0;
  height: 50px;
}
.oneRight .text {
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.oneRight .el-input,
.oneRight .el-select {
  padding: 5px 0;
  width: 100%;
}

.addOneBtn {
  text-align: center;
  padding-top: 70px;
}
.addOneBtn .el-button {
  width: 200px;
}
.addMoreBtn {
  text-align: center;
  padding-top: 100px;
}
.addMoreBtn .el-button {
  width: 200px;
}
#alertBox {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  /* opacity: 0; */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: none;
}
#alertBox .alert {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
  width: 500px;
  height: 300px;
  background: white;
  opacity: 1;
  z-index: 101;
}
</style>
