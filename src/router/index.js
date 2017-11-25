import Vue from 'vue'
import Router from 'vue-router'
import QuizDetails from '@/components/quiz-details.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'quiz',
      component: QuizDetails
    }
  ]
})
