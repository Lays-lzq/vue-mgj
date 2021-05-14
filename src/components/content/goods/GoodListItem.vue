<template>
   <div class="gooditem" @click="gitemclick()"> 
    <img :src="showImage" alt="">
    <div>
      <p>{{goodItem.title}}</p>
      <span class="price">{{goodItem.price}}</span>
      <span class="collect">{{goodItem.cafv}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodListItem',
  props: {
    goodItem: {
      type: Object,
    }
  },
  computed: {
    showImage() {
      return this.goodItem.image || this.goodItem.show.img
    }
  },
  methods: {
    gitemclick() {
      this.$router.push('/detail/' + this.goodItem.iid);
    }
  }
}
</script>

<style>
.gooditem {
  width: 50%;
  padding: 2px;
  box-sizing: border-box;
}
.gooditem img {
  width: 100%;
  border-radius: 5px;
}
.gooditem p {
  width: 100%;
  font-size: 14px;
  color: bisque;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.gooditem .price {
  font-size: 12px;
  color: blueviolet;
}
.gooditem .collect {
  font-size: 12px;
  color: pink;
}
</style>