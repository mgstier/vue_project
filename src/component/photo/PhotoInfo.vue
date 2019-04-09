<template>
  <div class="photoinfo-container">
    <h3>{{info.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{info.add_time | dateFormat}}</span>
      <span>点击：{{info.click}}次</span>
    </p>
    <hr>
     
    <!-- 缩略图区域 -->
 <vue-preview :slides="slide1" ></vue-preview>
    <!-- 图片内容区域 -->
    <div class="content" v-html="info.content"></div>
    <!-- 放置一个现成的评论子组件 -->
    <comments-box :id='id'></comments-box>
  </div>
</template>
<script>
import commentsBox from '../subcomponent/comment.vue'

export default {
  components:{
    commentsBox
  },
  created() {
    this.getData(),
    this.getThumbImg()
  },
  methods: {
    getData(){
      this.$http.get(`api/getimageInfo/+${this.id}`).then(res=>{
        if(res.body.status == 0){
          this.info=res.body.message[0]
        }
      })
    },
    getThumbImg(){
      this.$http.get(`api/getthumimages/${this.id}`).then(res=>{
        console.log(res)
        if(res.body.status == 0){
          //第一种思路：笨的办法
          // var arr = res.body.message
          // console.log(arr)
          // var newArr = []
          // for(var i=0;i<arr.length;i++){
          //   newArr[i] = {}
          //   newArr[i].src = arr[i].src 
          //   newArr[i].msrc = arr[i].src 
          //   newArr[i].w = 600 
          //   newArr[i].h = 400
          // }
          //数组中每一项是一个对象 引用类型
          res.body.message.forEach(item=>{
            item.msrc = item.src 
            item.w = 600//大图片的宽度
            item.h = 400//大图片的高度
          })
          console.log(res.body.message)
          this.slide1 =  res.body.message
        }
      })
    }

  },
  data () {
    return {
      id:this.$route.params.id,
      info:{},
      slide1:[] 
    };
  }
}
</script>
<style lang="scss" scoped>
.photoinfo-container{
  padding:3px;
  h3{
    color:#26A2FF;
    font-size: 15px;
    text-align: center;
    margin:15px 0;
  }
  .subtitle{
    display: flex;
    // justify-content对弹性盒标签中的各项周围留有空白;
    justify-content: space-between;
    font-size: 13px;
  }
  .content{
    font-size: 13px;
    line-height:30px;
  }
}
</style>

<style lang="scss">
.my-gallery{
  display: flex;
  figure{
    flex:1;
    margin:10px;
    img{
      width:100%;
    }
  }
}
</style>
