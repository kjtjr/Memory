import Vue from 'vue'
import Router from 'vue-router'
import GameBoard from '@/components/Template'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Template',
      component: GameBoard
    }
  ]
})
