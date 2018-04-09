<template>
    <li>
        <span>
            <i class="icon iconfont icon-huo"></i>
        </span>
        <span>{{goodsName}} ¥</span>
        <span>{{nowPrice}}</span>
        <span>元</span>
        <span class="oldPrice" v-if="compare(oldPrice,nowPrice)">(原价:¥{{oldPrice}}元)</span>
    </li>
</template>
<script>
export default {
  name: "hotGoods",
  data() {
    return {};
  },
  props: ["goodsName", "oldPrice", "nowPrice"],
  methods: {
    compare: (oldPrice, nowPrice) => (oldPrice != nowPrice ? 1 : 0)
  }
};
</script>
<style scoped>
li {
  list-style: none;
  float: left;
  margin: 7px 10px;
  padding: 10px 15px;
  border: 1px solid #dcdfe6;
  border-radius: 3px;
  background-color: #eff2f7;
  cursor: pointer;
}
li span:first-child {
  color: #ff0000;
  font-size: 10px;
  vertical-align: text-bottom;

  /* font-weight: bold; */
}
li span:nth-child(3) {
  color: blue;
  font-weight: bold;
}
.oldPrice {
  color: gray;
  font-size: 10px;
  text-decoration: line-through;
}
</style>
