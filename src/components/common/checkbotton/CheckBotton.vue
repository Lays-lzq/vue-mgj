<template>
  <div class="check-botton" :class="{checked:isChecked}">
    <span></span>
  </div>
</template>

<script>
export default {
  name:'CheckBotton',
  props:{
    isChecked: {
      type:Boolean,
      default:false,
    }
  }
}
</script>

<style>
.check-botton {
  width: 20px;
  height: 20px!important;
  font-size: 20px;
  border:2px solid black;
  border-radius: 5px;
}
.checked {
  background-color: orange;
}
</style>