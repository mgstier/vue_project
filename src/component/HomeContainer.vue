<template>
  <div class="body">
    <swiper :list="list" :isfull='true'></swiper>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
		                    <img src="../images/menu1.png" alt="">
		                    <div class="mui-media-body">首页</div></router-link>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/photo/PhotoList">
		                    <img src="../images/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></router-link>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/goods/goodslist">
		                    <img src="../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></router-link>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../images/menu5.png" alt="">
		                    <div class="mui-media-body">视屏专区</div></a>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a>
                </li>
		        </ul> 
    <router-view></router-view>
  </div>
</template>
<script>
//提示信息
import { Toast } from 'mint-ui';
import swiper from './subcomponent/swiper.vue'

export default {
  data(){
    return{
      list:[]
    }
  },
  created(){
    this.getList()
  },
  methods:{
    getList(){
      this.$http.get('api/getlunbo').then(res=>{
        if(res.body.status == 0){
          console.log(res)
          this.list=res.body.message
        }else{
          Toast('获取数据错误');
        }
      })
    }
  },
  components:{
    swiper
  }
};
</script>
<style lang="scss" scoped>
    
    .mui-table-view{
      background-color: #fff;
      .mui-table-view-cell{
        border:none;
        img{
          width: 60%;
        }
        .mui-media-body{
          font-size: 0.12rem;
        }
      }
    }
</style>