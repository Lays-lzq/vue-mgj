<template>
  <div id="tab-bar">
     <slot></slot>
  </div>
</template>

<script>
export default {
 name: 'TabBar',
}
</script>

<style>
#tab-bar {
    display: flex;
    background-color: #f2f2f2;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.2);
    z-index: 8;
  }
  
</style>