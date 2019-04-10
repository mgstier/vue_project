<template>
    <div>
        <comment :id='id'></comment>
    </div>
</template>
<script>
import Comment from '../subcomponent/comment.vue'

export default {
  data () {
    return {
      id:this.$route.params.id,
    };
  },
  components:{
    Comment
  }
}
</script>
<style lang="scss" scoped>
</style>