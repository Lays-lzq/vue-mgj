<template>
  <div class="toast"  v-show="isShow">
    <span>{{message}}</span>
  </div>
</template>

<script>
export default {
  name:'Toast',
  data() {
    return {
     
    }
  },
  props: {
    isShow: false,
    message: ''
  }
}
</script>

<style>
.toast {
  padding: 10px 12px;
  color: #fff;
  background-color: rgba(0,0,0,0.6);
  border-radius: 10px;
  position: fixed;
  left: 50%;
  top:50%;
  transform: translate(-50%,-50%);
  font-size: 16px;
}
</style>