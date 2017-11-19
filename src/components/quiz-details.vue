<template>
<section>
  <section class="hero is-primary" v-if="quiz">
  <div class="hero-body">
    <img :src="quiz.promo">
    <div class="container">
      <h1 class="title">
        {{ quiz.name }}
      </h1>
      <h2 class="subtitle">
        {{ quiz.categoryName }}
      </h2>
      <h3 class="subtitle">
        {{ quiz.author.name }}
      </h3>
    </div>
  </div>
  </section>
    <question-list  v-if="quiz" :questions="quiz.questions"></question-list>
</section>
</template>

<script>
import QuestionList from './question-list.vue';

  export default {
    name: 'QuizDetails',
    components: {
      QuestionList
    },
    props: {
      quiz:Object
    }
  }
</script>
