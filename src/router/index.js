import { createRouter, createWebHashHistory } from 'vue-router'
import blogList from '../views/blog-list.vue'
import appPage from '../views/app-page.vue'
import blogPost from '../views/blog-post.vue'
import blogEdit from '../views/blog-edit.vue'

const router = createRouter({
   history: createWebHashHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '/',
         component: appPage,
      },
      {
         path: '/blog',
         component: blogList,
         children: [
            {
               path: '/post',
               component: blogPost,
            },
            {
              path: '/edit/:postId?',
              component: blogEdit,
           },
         ],
      },
      {
         path: '/blog/post/:postId',
         component: blogPost,
      }
   ],
})

export default router
