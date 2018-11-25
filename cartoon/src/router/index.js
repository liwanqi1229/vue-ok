import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Cartoon from '@/components/cartoon/Cartoon'
import CartoonList from '@/components/cartoon/CartoonList'
import CartoonDetail from '@/components/cartoon/CartoonDetail'
import Focus from '@/components/focus/Focus'
import FocusList from '@/components/focus/FocusList'
import Discover from '@/components/discover/Discover'
import DiscoverList from '@/components/discover/DiscoverList'
import DiscoverDetail from '@/components/discover/DiscoverDetail'
import My from '@/components/my/My'
import MyList from '@/components/my/MyList'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:'/cartoon/cartoonList'
    },{
      path: '/cartoon',
      name: 'Cartoon',
      component: Cartoon,
      children:[
        {
          path:'cartoonList',
          name:'CartoonList',
          component:CartoonList,
        },
      ]
    },{
      path:'/cartoon/cartoonDetail/:cartoonId',
      name:'CartoonDetail',
      component:CartoonDetail,
    },{
      path: '/focus',
      name: 'Focue',
      component: Focus,
      redirect:'/focus/focusList',
      children:[
        {
          path:'focusList',
          component:FocusList,
        }
      ]
    },{
      path: '/discover',
      name: 'Discover',
      component: Discover,
      redirect:'/discover/discoverList',
      children:[
        {
        path: 'discoverList',
        component: DiscoverList,
        },{
        path: 'discoverDetail/:index',
        component: DiscoverDetail,
        },
      ]
    },{
      path: '/my',
      name: 'My',
      component: My,
      redirect:'/my/myList',
      children:[
        {
        path: 'myList',
        name: 'MyList',
        component: MyList,
        }
      ]
    },
  ]
})
