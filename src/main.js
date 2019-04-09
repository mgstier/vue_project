import Vue from 'vue'
import App from './App.vue'

//完整引入,好处是只需引入一次,就可以一直引用,问题是有很多用不到的功能代码会变大;
// import MintUi from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUi)

//按需引入,用到什么模块引入什么模块,代码体积小,
// import {Header,Button,Swipe,SwipeItem,lazyload} from 'mint-ui'
// Vue.component(Header.name,Header);
// // import {Swipe,SwipeItem} from 'mint-ui'
// Vue.component(Swipe.name,Swipe)
// Vue.component(SwipeItem.name,SwipeItem)
// // import {Button} from 'mint-ui'
// Vue.component(Button.name,Button)
// Vue.use(lazyload)

import MuinUi from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MuinUi)


// import {list} from 'mui'
// Vue.component(list.name,list)

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'


import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

//导入resource模块
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root='http://www.liulongbin.top:3005/'
Vue.http.options.emulateJSON = true //防火墙

import moment from 'moment'
Vue.filter('dateFormat',function(dataStr,pattern ='YYYY-MM-DD HH:mm:ss'){
    return moment(dataStr).format(pattern)
})

const vm=new Vue({
    el:'#app',
    render:function(createElement){
        return createElement(App)
    },
    router
})