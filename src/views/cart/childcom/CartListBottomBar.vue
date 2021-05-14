<template>
  <div class="bottombar">
    <check-botton  @click.native="clickAll" :is-checked="isSelectAll" class="checkbtn"></check-botton>
    <span>全选</span>
    <div>总计：￥{{totalPrice}}</div>
    <div class="caculate" @click.native="caculate">去计算:{{totalLength}}</div>
  </div>
</template>

<script>
import CheckBotton from "@/components/common/checkbotton/CheckBotton"


export default {
  name:'CartListBottomBar',
  components: {
    CheckBotton,
  },
  computed: {
    totalPrice() {
      return this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + parseInt(item.price.substring(1))*item.count
      },0)
    },
    totalLength() {
      return this.$store.state.cartList.filter(item => {
        return item.checked
      }).length
    },
    isSelectAll() {
      // return !(this.$store.state.cartList.filter(item => {return !item.checked}).length)
      if(this.$store.state.cartList == 0) return false
      return !(this.$store.state.cartList.find(item => {return !item.checked}))
    }
  },
  methods: {
    clickAll() {
      if(this.isSelectAll) {
        this.$store.state.cartList.forEach(item => {item.checked = false});
      }else {
        this.$store.state.cartList.forEach(item => {item.checked = true});
      }
    },
    caculate() {
      // this.$toast("111",2000)
    }
  }
}
</script>

<style>
.bottombar {
  display: flex; 
  align-items: center;
  background-color: #eee;
  font-size: 13px;
  height: 40px;
  position: relative;
}
.checkbtn {
  margin:0 10px 0 10px;
  text-align: center;
}
.caculate {
  width: 120px;
  height: 40px;
  background-color: orange;
  text-align: center;
  line-height: 40px;
  position: absolute;
  right: 0;
}
</style>