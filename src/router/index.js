import Vue from 'vue'
import Router from 'vue-router'
import QuizDetails from '@/components/quiz-details.vue';
import QuizesList from '@/components/quizes-list.vue';
import HomeComponent from '@/components/home.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: QuizesList
    },
    {
      path: '/quizes',
      name: 'quizes',
      component: QuizesList,
      children: [
        {
          path: ':id',
          name: 'quiz',
          component: QuizDetails
        }
      ]
    }
  ]
})
