<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="index" class="tab-control-item">
      <span :class="{current:currentIndex==index}" @click="Current(index)">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props:{
    titles: {
      type: Array
    }
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    Current(index) {
      this.currentIndex = index;
      this.$emit('tabClick',index);
    }
  }
}
</script>

<style>
.tab-control {
  display: flex;
  background-color: #fff;
  box-shadow: 1px 2px 1px rgba(0,0,0,0.2);
}
.tab-control-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
}
.tab-control-item span {
  padding: 5px;
}
.current {
  color: rgba(245, 179, 58,0.7);
  border-bottom: 1px solid rgba(245, 179, 58,0.7);
}
</style>