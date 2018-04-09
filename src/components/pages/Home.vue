<template>
  <div class="home">
    <div class="inputBox">
      <div class="header">请登录点餐系统</div>
      <el-input placeholder="账号" type="text" v-model="user" clearable>
      </el-input>
      <el-input placeholder="密码" type="password" v-model="pwd" clearable>
      </el-input>
      <div class="login">
        <el-button type="primary" @click="login">登录</el-button>
      </div>
    </div>
    <div style="opacity:0.5;">
      测试账号(店长:王立乾 123456 闫志龙:123456)
    </div>
  </div>
</template>

<script>
const common = require("../../../config/config");

export default {
  name: "Home",
  data() {
    return {
      user: "",
      pwd: ""
    };
  },
  methods: {
    login() {
      this.$axios
        .get(common.apiUrl + "/user/get", {
          params: {
            user: this.user,
            pwd: this.pwd
          }
        })
        .then(response => {
          let data = response.data.data;
          if (!data.length) {
            this.$message.error("账号或密码错误");
          } else {
            let user = {
              user: data[0].user,
              power: data[0].power,
              status: 1
            };
            sessionStorage.wlqUser = JSON.stringify(user);
            this.$router.push("/pos");
          }
        })
        .catch(err => {
          this.$message.error("网络错误");
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.inputBox {
  width: 500px;
  height: 300px;
  border: 2px solid #e5e9f2;
  margin: auto;
  margin-top: 100px;
  background: white;
  border-radius: 5px;
  box-shadow: -3px -2px 5px 2px #e5e9f2;
  padding: 20px 14px;
}
.inputBox div {
  width: 80%;
  margin: 15px 10%;
}
.inputBox .el-button {
  width: 100%;
  margin-top: 20px;
}
</style>
