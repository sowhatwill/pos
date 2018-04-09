<template>
    <div class="leftNav">
        <ul>
            <li>
                <router-link to="/">
                    <i class="icon iconfont icon-home1"></i>
                    <div>首页</div>
                </router-link>
            </li>
            <li>
                <div @click="pos()">
                    <i class="icon iconfont icon-sponsorfill"></i>
                    <div>选购</div>
                </div>
            </li>
            <li>
                <div @click="allOrder()">
                    <i class="icon iconfont icon-moneybagfill"></i>
                    <div>统计</div>
                </div>

            </li>
            <li>
                <div @click="goodsList()">
                    <i class="icon iconfont icon-huowu"></i>
                    <div>货架</div>
                </div>

            </li>
            <li>
                <div @click="logout()">
                    <i class="icon iconfont icon-tuichu"></i>
                    <div>退出</div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "leftNav",
  methods: {
    userStaus() {
      let user = {};
      if (!sessionStorage.wlqUser) {
        this.$message.error("您还未登录,请先登录");
      } else {
        user = JSON.parse(sessionStorage.wlqUser);
      }
      return {
        user: user.user,
        power: user.power,
        status: user.status == 1 ? 1 : 0
      };
    },
    pos() {
      let user = this.userStaus();
      if (!user.status) {
        this.$message.error("您还未登录,请先登录");
      } else {
        this.$router.push({ path: "/pos" });
      }
    },
    goodsList() {
      let user = this.userStaus();
      if (!user.status) {
        this.$message.error("您还未登录,请先登录");
      } else {
        if (user.power == 1) {
          this.$router.push({ path: "/goodsList" });
        } else {
          this.$message.error("您权限不足,只有店长可操作");
        }
      }
    },
    allOrder() {
      let user = this.userStaus();
      if (!user.status) {
        this.$message.error("您还未登录,请先登录");
      } else {
        this.$router.push({ path: "/allOrder" });
      }
    },
    logout() {
      let user = this.userStaus();
      if (!user.status) {
        this.$message.error("您还未登录,请先登录");
      } else {
        this.$router.push({ path: "/logout" });
      }
    }
  }
};
</script>
<style>
.leftNav {
  color: #fff;
  font-size: 10px;
  height: 100%;
  background-color: #1d8ce0;
  float: left;
  width: 5%;
  min-width: 45px;
}
.iconfont {
  font-size: 24px;
}
.leftNav ul {
  padding: 0px;
  margin: 0px;
}
.leftNav li {
  list-style: none;
  text-align: center;
  border-bottom: 1px solid #20a0ff;
  padding: 10px;
  cursor: pointer;
}
a {
  text-decoration: none;
  color: white;
}
/* .div-active {
  text-decoration: none;
} */
</style>
