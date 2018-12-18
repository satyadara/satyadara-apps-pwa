import Vue from 'vue'
import Router from 'vue-router'
import TruthOrDare from '@/pages/TruthOrDare'
import GamesDashboard from "@/pages/GamesDashboard";
import AboutMe from "@/pages/AboutMe";


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'GamesDashboard',
      component: GamesDashboard
    },
    {
      path: '/about',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/truth-or-dare',
      name: 'Truth or Dare',
      component: TruthOrDare
    }
  ]
})
