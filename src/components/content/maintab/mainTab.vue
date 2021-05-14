<template>
   <tab-bar>
      <tab-bar-item path="/home" >
        <template v-slot:item-ico><div class="ico"></div></template>
        <template v-slot:item-ico-active><div class="ico"></div></template>
        <template v-slot:item-text><div>首页</div></template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <template v-slot:item-ico><div class="ico"></div></template>
        <template v-slot:item-ico-active><div class="ico"></div></template>
        <template v-slot:item-text><div>分类</div></template>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <template v-slot:item-ico><div class="ico"></div></template>
        <template v-slot:item-ico-active><div class="ico"></div></template>
        <template v-slot:item-text><div>购物车</div></template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:item-ico><div class="ico"></div></template>
        <template v-slot:item-ico-active><div class="ico"></div></template>
        <template v-slot:item-text><div>我的</div></template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from '@/components/common/tabbar/Tabbar'
import TabBarItem from '@/components/common/tabbar/TabbarItem'

export default {
  name: 'mainTab',
  components:{
    TabBar,
    TabBarItem,
  }
}
</script>

<style>

</style>