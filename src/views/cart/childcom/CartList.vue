<template>
  <scroll class="wrapper">
    <div class="cart-list">
      <cart-list-item v-for="(i,index) in cartList" :key="index" :cart-listitem="i"></cart-list-item>
    </div>
  </scroll>
</template>

<script>
import { mapGetters } from "vuex"
import CartListItem from "./CartListItem"
import Scroll from "@/components/common/scroll/Scroll"

export default {
  name:'CartList',
  computed: {
    ...mapGetters(['cartList'])
  },
  components: {
    CartListItem,
    Scroll
  }
}
</script>

<style>
.cart-list {
  background-color: #fff;
}
.wrapper {
  height: calc(100% - 44px - 49px - 40px);
  z-index: 1;
  background-color: #fff;
}
</style>