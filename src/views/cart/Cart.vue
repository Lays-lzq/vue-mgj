<template>
  <div class="cart">
    <nav-bar class="cart-nav">
      <template v-slot:center>购物车({{Length}})</template>
    </nav-bar>
    <!-- <scroll  class="wrapper" ref="scroll"> -->
      <cart-list></cart-list>
    <!-- </scroll> -->
    <cart-list-bottom-bar class="bottombar"></cart-list-bottom-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar"
import {mapGetters} from "vuex"
// import Scroll from "@/components/common/scroll/Scroll"
import CartList from "./childcom/CartList"
import CartListBottomBar from "./childcom/CartListBottomBar"



export default {
  name: 'Cart',
  data() {
    return {
     
    }
  },
  components:{
    NavBar,
    // Scroll,
    CartList,
    CartListBottomBar
  },
  mounted() {
   
  },
  computed:{
    // ...mapGetters(['cartLength'])
    ...mapGetters({
      Length:'cartLength'
    })
  }
}
</script>

<style scoped>
.cart {
  height: 100vh;
}
.cart-nav {
  background-color:  rgb(250, 191, 82);
}
</style>