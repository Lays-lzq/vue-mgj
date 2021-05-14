<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start">
      </div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item, index) in detailInfo.detailImage[0].list" :key="index" 
      :src="item" @load="imgLoad" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'childGoodInfo',
  props: {
    detailInfo: {
      type: Object
    }
  },
  data() {
    return {
      counter: 0,
      imageLength: 0
    }
  },
  methods: {
    imgLoad() {
      this.$emit('imgLoad')
    }
  }
}
</script>

<style>
.goodinfo {
  width: 100%;
}
.desc {
  font-size:12px;
  position: relative;
  padding-bottom: 3px;
}
.info-key {
  font-size:13px;
  background-color: rgb(241, 240, 240);
  font-family: '微软雅黑·';
  color: #333;
}
.info-list img{
  width: 100%;
}
</style>