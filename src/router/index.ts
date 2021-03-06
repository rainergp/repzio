import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductsListView from '../views/ProductsListView.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'ProductsListView',
    component: ProductsListView,
  },
  {
    path: '/details/:id',
    name: 'ProductDetailsView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "details" */ '../views/ProductDetailsView.vue'),
    meta: {
      breadcrumb: [
        { name: 'All Products',  }
      ]
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
