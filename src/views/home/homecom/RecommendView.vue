<template>
  <div class="recommend"> 
    <div v-for="(item,index) in recommend" :key="index" class="r-item">
      <a href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommend:{}
  }
}
</script>

<style>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
}
.r-item {
  flex: 1;
}
.r-item a {
text-decoration: none;
}
.recommend img {
  width: 80%;
  margin-bottom: 10px;
}
</style>