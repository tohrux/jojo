import VueRouter from 'vue-router'
import Vue from 'vue'
import HelloWorldVue from '@/components/HelloWorld.vue'
Vue.use(VueRouter)
const routes = [{ path: '/foo', component: HelloWorldVue }]

export const router = new VueRouter({
  routes,
})
