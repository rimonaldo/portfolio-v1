import { createRouter, createWebHashHistory } from 'vue-router'
// import homePage from '../views/home-page.vue'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path:'',
    //   component:homePage
    // }
  ]
})

export default router
