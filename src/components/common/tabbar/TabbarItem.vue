<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="item-ico"></slot></div>
      <div v-else :style="activestyle"><slot name="item-ico-active"></slot></div>
      <div :style="activestyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  data() {
    return {
      // isActive: false,
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'rgb(245, 179, 58)',
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activestyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
}
</script>

<style>
.tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 12px;
    padding-top: 5px;
    box-sizing: border-box;
  }
  .tab-bar-item .ico {
    font-family: 'icomoon';
    font-size: 23px;
  }
</style>