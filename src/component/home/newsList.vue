<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in list" :key='item.id'>
					<router-link :to="'/home/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" src="../../images/menu1.png">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis'>
                                <span>发表时间:{{item.add_time}}</span>
                                <span>点击次数:{{item.click}}</span>
                            </p>
						</div>
					</router-link>
				</li>
			</ul>
    </div>
</template>
<script>
export default { 
  created() {
		this.getList()
	},
  methods:{
      getList(){
          this.$http.get('api/getnewslist').then(res=>{
            //   console.log(res)
              this.list=res.body.message
          })
      }
  },
  data () {
    return {
        list:[]
    };
  },
}
</script>
<style lang="scss" scoped>
.mui-media-body{
    font-size: 0.12rem;
    .mui-ellipsis{
        display:flex;
        justify-content: space-between;
        font-size: 0.1rem;
    }
}
    
</style>