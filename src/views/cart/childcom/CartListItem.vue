<template>
  <div id="shop-item">
    <div class="item-select">
      <check-botton :is-checked="cartListitem.checked" @click.native="itemCheck"></check-botton>
    </div>
    <div class="item-img">
      <img :src="cartListitem.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{cartListitem.title}}</div>
      <div class="item-desc">{{cartListitem.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">{{cartListitem.price}}</div>
        <div class="item-count right">x{{cartListitem.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBotton from "@/components/common/checkbotton/CheckBotton"


export default {
  name:'CartListItem',
  props: {
    cartListitem: {
      type:Object,
    }
  },
  components: {
    CheckBotton,
  },
  methods: {
    itemCheck() {
      this.cartListitem.checked = !this.cartListitem.checked
    }
  }
}
</script>

<style>
#shop-item {
  /* width: 100%; */
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-select {
  width: 20px;
  display: flex; 
  justify-content: center;
  align-items: center;
  /* background-color: red; */
}
.item-title, .item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-img {
  padding: 5px;
}
.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}
.item-info {
  width: 230px;
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}
.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}
.info-bottom {
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}
.info-bottom .item-price {
  color: orangered;
}
</style>