<template>
  <div class="newsinfo-container">
    <h3 class="title">{{info.title}}</h3>
    <p class="subtitle">
      <span>发表时间：{{info.add_time | dateformat}}</span>
      <span>点击：{{info.click}}次</span>
    </p>
    <div class="content" v-html="info.content"></div>
    <comment-box></comment-box>
  </div>
</template>
<script>
//子组件可以在当前页面引入
import CommentBox from '../subcomponent/comment.vue'

export default {
  created(){
    this.getinfo()
  },
  methods:{
    getinfo(){
      this.$http.get('api/getnew/'+this.id).then(res=>{
        console.log(res)
        this.info=res.body.message[0]
      })
    }
  },
  components:{
    CommentBox
  },
  data () {
    return {
      id:this.$route.params.id,
      info:{}
    };
  }
}
</script>
<style lang="scss" scoped>
.newsinfo-container{
  padding:0 4px;
  .title{
    font-size: 16px;
    text-align: center;
    margin:15px 0;
    color: red;
  }
  .subtitle{
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
}
</style>
<<style lang="scss">
.newsinfo-container{
  .content{
    img{
      width:100%;
    }
  }
}
  
</style>>