import Vue from 'vue'
import Router from 'vue-router'
import main from './main'
import template from './template'

Vue.use(Router)


export default new Router({
  routes: [
		...main,
		...template
  ]
})
