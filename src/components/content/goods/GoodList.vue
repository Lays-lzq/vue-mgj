<template>
  <div class="goods">
    <good-list-item v-for="item in goods" :key="item" :good-item="item"></good-list-item>
  </div>
</template>

<script>
import GoodListItem from "./GoodListItem"

export default {
  name: 'GoodList',
  props: {
    goods: {
      type: Object
    }
  },
  components: {
    GoodListItem,
  }
}
</script>

<style>
.goods {
  display: flex;
  flex-wrap: wrap;
}
</style>