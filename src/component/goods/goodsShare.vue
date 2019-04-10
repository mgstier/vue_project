<template>
  <div>
    <h3>{{info.title}}</h3>
    <hr>
    <div class="content_wefwefwefwef799987" v-html="info.content"></div>
  </div>
</template>
<script>
export default {
  created() {
    this.getDesc()
  },
  methods: {
    getDesc(){
      this.$http.get('api/goods/getdesc/'+this.id).then(res=>{
        // console.log(res)
        if(res.body.status == 0){
          this.info = res.body.message[0]
        }
      })
    }
  },
  data () {
    return {
      id:this.$route.params.id,
      info:{}
    };
  }
}
</script>
<style lang="scss">
.content_wefwefwefwef799987{
  width:100%;
  img{
    width:100%;
  }
}
</style>