import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import NoticeView from '../views/NoticeView.vue'
import NoticeDetailView from '@/views/NoticeDetailView.vue'
import NoticeWriteView from '@/views/NoticeWriteView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: NoticeView
  },
  {
    path: '/detail/:id',
    name: 'noticeDetail',
    component: NoticeDetailView
  },
  {
    path: '/write',
    name: 'noticeWrite',
    component: NoticeWriteView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
