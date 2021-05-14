<template>
  <div>
    <nav-bar>
      <template v-slot:left>
        <div class="ico"  @click="backclick()"></div>
      </template>
    <template v-slot:center>
      <div class="title">
        <div v-for=" (i, index) in titles" :key="index" class="titleitem"
        :class="{active: index == currentindex}" @click="btnclick(index)">{{i}}</div>
      </div>
    </template>
  </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar"


export default {
  name: 'childNavBar',
  data() {
    return {
      titles: ['商品','参数','评论','推荐'],
      currentindex: 0,
      homeleaveTop: 0,
    }
  },
  components: {
    NavBar,
  },
  methods: {
    btnclick(index) {
      this.currentindex = index
      this.$emit('navclick',index)
    },
    backclick() {
      this.$emit('backHome')
    }
  },
}
</script>

<style scoped>
.title {
  display: flex;
  font-size: 12px;
}
.titleitem {
  flex:1;
}
.active {
  color: orange;
}
.ico {
  font-family: 'icomoon';
}
</style>