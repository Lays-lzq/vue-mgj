<template>
  <div id="detail">
    <child-nav-bar class="detailbar" @navclick="navclick" ref="navb" @backHome="backhome"></child-nav-bar>
    <scroll class="content" @pulling-up="null" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swipe :top-image="topImages"></detail-swipe>
      <detail-base-info :goods="goods"></detail-base-info>
      <child-good-info :detail-info="detailInfo" @imgLoad="imgLoad"></child-good-info>
      <detail-param-info :param-info='paramInfo' ref="param"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
      <good-list :goods="recommends" ref="recommend"></good-list>
    </scroll>
    <detail-bottom-bar class="bottombar" @addCart="addCart"></detail-bottom-bar>
    <toast :message="toastmes" :is-show="show"></toast>
  </div>
</template>

<script>
import childNavBar from "@/views/detail/childcomponents/childnavbar"
import {getDetail, Goods, Shop, GoodsParam, getRecommend} from "@/network/detail.js"
import DetailSwipe from "./childcomponents/DetailSwipe"
import DetailBaseInfo from "./childcomponents/DetailBaseInfo"
import Scroll from "@/components/common/scroll/Scroll"
import childGoodInfo from "./childcomponents/childGoodInfo"
import DetailParamInfo from "./childcomponents/DetailParamInfo"
import DetailCommentInfo from './childcomponents/DetailCommentInfo.vue'
import GoodList from "@/components/content/goods/GoodList"
import {debounce} from "@/common/debounce"
import DetailBottomBar from "./childcomponents/DetailBottomBar"
import Toast from "@/components/common/toast/Toast"




export default {
  name: 'Detail',
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop:{},
      detailInfo:{},
      paramInfo: {},
      commontInfo: {},
      recommends: {},
      eleTops:[],
      geteleTops:null,
      homeleaveTop: 0,
      toastmes:'',
      show:false
    }
  },
  components: {
    childNavBar,
    DetailSwipe,
    DetailBaseInfo,
    Scroll,
    childGoodInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodList,
    DetailBottomBar,
    Toast
  },
  created() {
    this.iid = this.$route.params.iid;

    getDetail(this.iid).then(res => {
      const data = res.result
      this.topImages = data.itemInfo.topImages

      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      this.shop = new Shop(data.shopInfo)

      this.detailInfo = data.detailInfo;

      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)

      if(data.rate.cRate !==0) {
        this.commentInfo = data.rate.list[0]
      }

      this.geteleTops = debounce(() => {
        if (this.$refs.param && this.$refs.comment && this.$refs.recommend) {
          this.eleTops = []
          this.eleTops.push(0)
          this.eleTops.push(this.$refs.param.$el.offsetTop-44)
          this.eleTops.push(this.$refs.comment.$el.offsetTop-44)
          this.eleTops.push(this.$refs.recommend.$el.offsetTop-44)
          this.eleTops.push(Number.MAX_VALUE)
        }
      },500)
    });

    getRecommend().then(res => {
      this.recommends = res.data.list
    })
  },
  methods: {
    navclick(index) {
      this.$refs.scroll.scrollTo(0,-this.eleTops[index],500)
    },
    imgLoad() {
      this.geteleTops()
    },
    contentScroll(pos){
      for(var i =0;i<this.eleTops.length-1;i++){
        if(this.$refs.navb.currentindex !==i && (-pos.y >= this.eleTops[i]) && (-pos.y <= this.eleTops[i+1])){
          this.$refs.navb.currentindex = i
        }
      }
    },
    addCart() {
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.newPrice
      product.iid = this.iid

      this.$store.dispatch('addCart',product).then(res => {
        this.toastmes = res
        this.show = true
        setTimeout(() => {
          this.show = false
        },2000)
      })
    },
    backhome() {
      this.$router.go(-1)
    }
  },
  mounted() {
  //   this.$bus.on("save", (leaveTop) => {
  //     // this.homeleaveTop = leaveTop;
  //     // console.log(this.homeleaveTop)
  //     console.log("111111111")
  //   });
  //   this.$bus.emit("keep", this.homeleaveTop);
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detailbar {
  position: relative;
  background-color: #fff;
  z-index: 9;
}
.content {
  height: calc(100% - 44px - 55px);
  z-index: 9;
  background-color: #fff;
}

</style>