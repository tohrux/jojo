import VueRouter from "vue-router";
import Vue from "vue";
import HelloWorldVue from "@/components/HelloWorld.vue";
Vue.use(VueRouter);
const routes = [
  { path: "/foo", component: HelloWorldVue },
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
export const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
});
