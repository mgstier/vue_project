import VueRouter from 'vue-router'

import HomeContainer from './component/HomeContainer.vue'
import MemberContainer from './component/MemberContainer.vue'
import SearchContainer from './component/SearchContainer.vue'
import ShopcarContainer from './component/ShopcarContainer.vue'
import newsList from './component/home/newsList.vue'
import newsinfo from './component/home/Newsinfo.vue'

var router = new VueRouter({
    routes: [
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/search',component:SearchContainer},
        {path:'/shopcar',component:ShopcarContainer},
        {path:'/home/newsList',component:newsList},
        {path:'/home/newsinfo/:id',component:newsinfo}
    ],
    linkActiveClass:'mui-active'
})

export default router