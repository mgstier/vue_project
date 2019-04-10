<template>   
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,id) in list" :key="id">
        <img :src="item.img" :class="{full:isfull}">
      </mt-swipe-item>        
    </mt-swipe>   
</template>
<script>
export default {
    props:['list','isfull'],
  data () {
    return {

    };
  }
}
</script>
<style lang="scss" scoped>
.mint-swipe{
        height: 200px;
      .mint-swipe-item{
          text-align: center;
        img{
          
          height:100%;
        }
       
      }  
    }
     .full{
            width: 100%;
        }
</style>