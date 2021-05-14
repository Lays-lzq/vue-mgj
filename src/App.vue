<template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"  v-if="$route.meta.keepAlive"/>
      </keep-alive>
        <component :is="Component"  v-if="!$route.meta.keepAlive"/>
    </router-view> 
    <main-tab></main-tab>
  </div>
</template>

<script>
import mainTab from '@/components/content/maintab/mainTab'

export default {
  name: 'App',
  components: {
    mainTab,
  }
}
</script>

<style>
  @import "./assets/css/base.css";

  
</style>

