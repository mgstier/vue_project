<template>
  <div class="mui-numbox" data-numbox-min="1" data-numbox-max="max">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="5" @change="getDate" ref="numbox" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>
<script>
import mui from '../../lib/mui/js/mui.js'

export default {
  props:['max'],
  watch:{
    max:function(newVal,aldVal){
      min('mui-numbox')
      .numbox()
      .setOption('max',newVal)
    }
  },

  mounted(){
    //初始化数字选择组件
    mui('.mui-numbox').numbox()
  },
  data() {
    return {};
  },
  methods:{
    getDate(date){
      this.$emit('sendDate',parseInt(this.$refs.numbox.value))
    }
  }
};
</script>
<style lang="scss" scoped>
</style>