import VueRouter from 'vue-router'

import HomeContainer from './component/HomeContainer.vue'
import MemberContainer from './component/MemberContainer.vue'
import SearchContainer from './component/SearchContainer.vue'
import ShopcarContainer from './component/ShopcarContainer.vue'
import newsList from './component/home/newsList.vue'
import newsinfo from './component/home/Newsinfo.vue'


//图片分享想
import PhotoList from './component/photo/PhotoList.vue'
import photoinfo from './component/photo/PhotoInfo.vue'

var router = new VueRouter({
    routes: [        
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/search',component:SearchContainer},
        {path:'/shopcar',component:ShopcarContainer},
        {path:'/',redirect:'/home'},
        {path:'/home/newsList',component:newsList},
        {path:'/home/newsinfo/:id',component:newsinfo},
        {path:'/photo/PhotoList',component:PhotoList},
        {path:'/photo/photoinfo/:id',component:photoinfo}
    ],
    linkActiveClass:'mui-active'
})

export default router