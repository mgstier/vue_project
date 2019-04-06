import Vue from 'vue'
import App from './App.vue'


//完整引入,好处是只需引入一次,就可以一直引用,问题是有很多用不到的功能代码会变大;
// import MintUi from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUi)

//按需引入,用到什么模块引入什么模块,代码体积小,
import {Header} from 'mint-ui'
Vue.component(Header.name,Header);


import './lib/mui/css/mui.css'

const vm=new Vue({
    el:'#app',
    render:function(createElement){
        return createElement(App)
    }
})