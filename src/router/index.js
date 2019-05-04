import Vue from 'vue'
import Router from 'vue-router'
import Features from '@/pages/features'
import Examples from '@/pages/examples'
import VerticalScroll from '@/pages/vertical-scroll/'
import IndexView from '@/pages/index-list/'
import Picker from '@/pages/picker'
import Slide from '@/pages/slide'
import FullPageSlide from '@/pages/full-page-slide'
import FullPageVerticalSlide from '@/pages/full-page-vertical-slide'
import FreeScroll from '@/pages/free-scroll'
import FormList from '@/pages/form-list'
import GoodsList from '@/pages/goods-list'
import NavigatorList from '@/pages/navigator'
import Infinity from '@/pages/infinity'
import SlideRender from '@/page-render/slide-render'
import FormListRender from '@/page-render/form-list-render'
import SimpleScrollDemo from '@/pages/simple-scroll-demo'
import GoodListRender from '@/page-render/goods-list-render'
import PickerRender from '@/page-render/picker-render'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Features
    },
    {
      path: '/:lang',
      component: Features
    },
    {
      path: '/examples/:lang',
      component: Examples
    },
    {
      path: '/examples',
      component: Examples,
      children: [
        {
          path: 'vertical-scroll/:lang',
          component: VerticalScroll
        },
        {
          path: 'index-view/:lang',
          component: IndexView
        },
        {
          path: 'picker/:lang',
          component: Picker
        },
        {
          path: 'slide/:lang',
          component: Slide
        },
        {
          path: 'full-page-slide/:lang',
          component: FullPageSlide
        },
        {
          path: 'full-page-vertical-slide/:lang',
          component: FullPageVerticalSlide
        },
        {
          path: 'free-scroll/:lang',
          component: FreeScroll
        },
        {
          path: 'form-list/:lang',
          component: FormList
        },
        {
          path: 'goods-list/:lang',
          component: GoodsList
        },
        {
          path: 'nav-list',
          component: NavigatorList,
          children: [
            {
              path: '1/:lang',
              component: SlideRender
            },
            {
              path: '2/:lang',
              component: FormListRender
            },
            {
              path: '3/:lang',
              component: SimpleScrollDemo
            },
            {
              path: '4/:lang',
              component: GoodListRender
            },
            {
              path: '5/:lang',
              component: PickerRender
            }
          ]
        },
        {
          path: 'infinity/:lang',
          component: Infinity
        }
      ]
    }
  ]
})
