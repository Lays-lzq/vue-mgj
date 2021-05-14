<template>
  <div id="home">
    <nav-bar class="homenav">
      <template v-slot:center>首页</template>
    </nav-bar>
    <tab-control :titles="['流行','新款','精选']" 
                   @tabClick="tabClick" 
                   class="tabfixed"
                   ref="tabcontrol1"
                   v-show="isFixtab"></tab-control>
    <scroll class="wrapper" ref="scroll"  :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pulling-up="contentpullingUp">
      <swiper :banners="banner" @SwipeImgLoad="SwipeImgLoad()"></swiper>
      <recommend-view :recommend="recommend"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行','新款','精选']" 
                   @tabClick="tabClick" 
                   :class="{tabfixed: isFixtab}"
                   ref="tabcontrol"></tab-control>
      <good-list :goods="showGoods"></good-list>
    </scroll>
    <back-top class="backtop" @click="backTopClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/common/navbar/NavBar'
import {getHomeMultidata, getHomedata} from '@/network/home'
import Swiper from '@/components/common/swipe/swipe'
import RecommendView from '@/views/home/homecom/RecommendView'
import FeatureView from '@/views/home/homecom/feature'
import TabControl from "@/components/content/tabcontrol/TabControl"
import GoodList from "@/components/content/goods/GoodList"
import Scroll from "@/components/common/scroll/Scroll"
import BackTop from "@/components/common/backTop/BackTop"






export default {
  name: 'Home',
  data() {
    return {
      banner: [],
      recommend: [],
      keywords: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      scroll: null,
      isShowBackTop:false,
      tabControlTop: 0,
      isFixtab: false,
      leaveTop: 0,
      t:true,
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  components: {
    NavBar,
    Swiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodList,
    Scroll,
    BackTop
  },
  created() {
    this.getHomeMultidata();

    this.getHomedata('pop');
    this.getHomedata('new');
    this.getHomedata('sell');
  },
  methods: {
    tabClick(index) {
      switch(index) {
        case 0:
          this.currentType = 'pop';
          break
        case 1:
          this.currentType = 'new';
          break
        case 2:
          this.currentType = 'sell';
          break
      }
      this.$refs.tabcontrol1.currentIndex = index;
      this.$refs.tabcontrol.currentIndex = index;
    },
    backTopClick() {
     this.$refs.scroll.scrollTo(0,0,500)
    },
    contentScroll(pos) {
      this.isShowBackTop = Math.abs(Math.round(pos.y))>1327;

      this.isFixtab = -pos.y > this.tabControlTop;

      this.leaveTop = pos.y
    },
    contentpullingUp() {
      this.getHomedata(this.currentType);
    },


    SwipeImgLoad() {
      this.tabControlTop = this.$refs.tabcontrol.$el.offsetTop
    },

    //网络请求
    getHomeMultidata() {
      getHomeMultidata().then(res => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
      })
    },
    getHomedata(type) {
      const page = this.goods[type].page + 1;
      getHomedata(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
      })
    }
  },
  deactivated() {
    if(this.t){
      this.$bus.emit("save", this.leaveTop)
      this.t = false
    }
    console.log(this.leaveTop)
  },
  activated() {
    this.$bus.on("keep", (leaveTop) => {
      this.leaveTop = leaveTop
      // this.$refs.scroll.scrollTo(0,this.leaveTop,0)
      console.log(leaveTop)
    });
    // this.$refs.scroll.scrollTo(0,-500,1000)
  },
}
</script>

<style scoped>
#home {
  height: 100vh;
}
.homenav {
  background-color: rgb(250, 191, 82);
  /* position: fixed;
  top: 0px; */
  z-index: 9;
}
.wrapper {
  height: calc(100% - 44px - 49px);
}
.tabfixed {
  position: relative;
  z-index: 10;
}
.backtop {
  position: absolute;
  z-index: 9;
  right: 5px;
  bottom: 55px;
}
</style>
