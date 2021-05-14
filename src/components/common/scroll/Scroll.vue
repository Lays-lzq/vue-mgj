<template>
  <div class="wrapper" ref="wrapper"> 
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null,
    }
  },
  props: {
     probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click:true,
      probeType:this.probeType,
      observeDOM:true,
      scrollY: true,
      pullUpLoad:this.pullUpLoad,
      observeImage:true
    })


    this.scroll.on('scroll', (pos) => {
      this.$emit('scroll',pos);
    })

    this.scroll.on('touchEnd', () => {
      this.$emit('pullingUp');
    })
  },
  methods: {
    scrollTo(x, y, time=500) {
      this.scroll && this.scroll.scrollTo(x,y,time);
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    }
  }
}
</script>

<style>

</style>