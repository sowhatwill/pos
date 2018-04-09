<template>
  <li>
    <div class="foodImg"><img :src="imgSrc" width="100%"></div>
    <div class="foodInfo">
      <span class="foodName">{{goodsName}}</span>

      <span class="oldPrice" v-if="compare(oldPrice, nowPrice)">原价:￥{{oldPrice}}元</span>
      <span class="oldPrice" v-else style="opacity: 0">""</span>
      <span class="newPrice" v-if="compare(oldPrice, nowPrice)">
        现价:￥
        <strong style="color:red">{{nowPrice}}</strong>
        元
      </span>
      <span class="newPrice" v-else>
        价格:￥
        <strong style="color:red">{{nowPrice}}</strong>
        元
      </span>
    </div>
  </li>
</template>
<script>
export default {
  name: "hotGoods",
  data() {
    return {};
  },
  props: ["imgSrc", "goodsName", "oldPrice", "nowPrice"],
  methods: {
    compare: (oldPrice, nowPrice) => (oldPrice != nowPrice ? 1 : 0)
  }
};
</script>
<style scoped>
li {
  list-style: none;
  width: 23%;
  border: 1px solid #e5e9f2;
  height: auto;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 2px;
  background: #eff2f7;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.foodImg {
  width: 40%;
}
.foodInfo {
  width: 59%;
  padding: 0 5px;
}
.foodInfo span {
  display: block;
}
.foodName {
  font-size: 15px;
  list-style: 16px;
  height: 32px;
  /* color: brown; */
  margin-top: -5px;
}
.oldPrice {
  line-height: 10px;
  color: gray;
  font-size: 10px;
  text-decoration: line-through;
  margin-top: 10px;
}
.newPrice {
  font-size: 16px;
  /* padding-top: 10px; */
}
</style>
