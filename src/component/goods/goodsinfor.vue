<template>
  <div class="goodsinfo-container">
    <!-- 商品轮播图区域 -->
    <div class="mui-card">
				
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<swiper :list="list" :isfull='false'></swiper>
					</div>
				</div>
	</div>
    <transition @before-enter="beforeEnter"  @enter="enter" @after-enter="afterEnter">
        <div class="ball"  v-show="ballFlag" ref="ball"></div>
    </transition>
    <!-- 商品购买区域 -->
    <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
                        市场价：<del>&yen;2399</del>&nbsp;&nbsp;销售价：<span class="now_price">&yen;2199</span>
                        </p>
                        <p>购买数量：
                            <number @sendDate="selectedCout" :max="goodinfor.stock_quantity"></number>
                        </p>
                        
                        <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToshopcar" @after-enter="afterEnter">加入购物车</mt-button>
                        </p>
					</div>
				</div>
			</div>


    <!-- 商品参数区域 -->
    <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>市场价:{{date.goods_no}}</p>
						<p>销售价:{{date.stock_quantity}}</p>
						<p>购买量:{{date.add_time | dateFormat}}</p>
					</div>
				</div>
				<div class="mui-card-footer">
                    <mt-button type="primary" size="large" plain @click="goodsCommend">图文介绍</mt-button>

                    <mt-button type="danger" size="large" plain @click="getShare">商品评论</mt-button>
                </div>
			</div>
  </div>
</template>
<script>
import swiper from '../subcomponent/swiper.vue'
import number from '../subcomponent/goodsinfor_number.vue'
export default {

  data () {
    return {
        id:this.$route.params.id,
        list:[],
        date:{},
        ballFlag:false,
        selectedCout:1
    };
  },
  created(){
      this.getlunbotu(),
      this.getDate()
  },
  methods:{
      getlunbotu(){
          this.$http.get(`api/getthumimages/${this.id}`).then(res=>{
              if(res.body.status == 0){
                  res.body.message.forEach(item=>{
                  item.img=item.src
              })
              this.list=res.body.message
              console.log(this.list)
              }
          })
      },
      getDate(){
          this.$http.get(`api/goods/getinfo/${this.id}`).then(result=>{
              if(result.body.status == 0){
                  this.date=result.body.message[0]
              }
          })
      },
      goodsCommend(id){
          this.$router.push({name:'goodsCommend',params:{id}})
      },//两种编程式导航编写方式
      getShare(id){
          this.$router.push({name:'goodsShare',params:{id}})
      },
      addToshopcar(){
          this.ballFlag=!this.ballFlag;
      },
      beforeEnter(el){
      el.style.transform = 'translate(0,0)'
    },
    enter(el,done){
      el.offsetWidth 
      el.style.transform = 'translate(93px,430px)'
      el.style.transition = 'all cubic-bezier(.17,.67,.8,.99) 0.5s'
      done()
    },
    afterEnter(el){
      this.ballFlag = !this.ballFlag
    },
  },
  components:{
      swiper,
      number
  }
}
</script>
<style lang="scss" scoped>

.goodsinfo-container{
  background-color: #eee;
  overflow: hidden;
  .now_price{
    color: red;
    font-size: 16px;
    font-weight: bold;
  }

    .ball{
  width:15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  z-index:99;
  top:347px;
  left:148px;
}

}

// .mint-swipe-item{
//   -webkit-backface-visibility: hidden;
//   backface-visibility: hidden;
// }
// div{
//   -webkit-transform: translate3d(0, 0, 0);
// transform: translate3d(0, 0, 0);
// }


</style>
