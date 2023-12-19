import { createRouter, createWebHistory } from 'vue-router'
import auth from './auth'
import admin from './admin'
import director from './director'
import finance from './finance'
import teacher from './teacher'
import student from './student'
import page_not_found from './page_not_found'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   auth,
   admin,
   director,
   finance,
   teacher,
   student,
   page_not_found
  ]
})

export default router
