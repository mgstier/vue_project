<template>
    <div id="slider list">
		<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted ">
			<div class="mui-scroll">
				<a @click="getlist(item.id)" class="mui-control-item" :class="{'mui-active' :item.id==0}" v-for="item in catesList" :key="item.id" >
					{{item.title}}
				</a>						
			</div>                 
		</div>
        <ul class="list">
				<router-link tag="li" :to="'/photo/photoinfo/'+item.id" v-for="item in list" :key="item.id">
					<img v-lazy="item.img_url">
					<p class="info">{{item.seo_description}}</p>
				</router-link>
			</ul> 
	</div>
</template>
<script>
import mui from '../../lib/mui/js/mui.js'
export default {

mounted(){//相当于window.omload;此处一般用于操作dom
     mui('.mui-scroll-wrapper').scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
},
created(){
    this.getCastes(),
    this.getlist(0)
},
methods:{
    getCastes(){
        this.$http.get('api/getimgcategory').then(res=>{
            if(res.body.status == 0){
                this.catesList = [{title:"全部",id:0},...res.body.message]
            }
        })
    },
    getlist(id){
        this.$http.get(`api/getimages/${id}`).then(result=>{//在接口需要传值时,在函数括号里也要传;
        
            if(result.body.status == 0){
                
                this.list = result.body.message
            }
        })
    }
},
  data () {
    return {
        catesList:[],
        list:[]
    };
  }
}
</script>
<style lang="scss" scoped>

.list{
    
	list-style:none;
	
		img[lazy=loading] {
		width: 40px;
		height: 300px;
		margin: auto;
	}
	li{
		position: relative;
		
		img{
			width:100%;
		}
		.info{
			position: absolute;
			bottom:0;
			background:rgba(0,0,0,.4);
		}
	}
}
</style>