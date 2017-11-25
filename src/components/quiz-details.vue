<template>
  <section  v-if="quiz">
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
    <question-list v-if="quiz" :questions="quiz.questions"></question-list>
     <br/>
    <section div v-if="isDisplayResults">
      <h3>Congradulations!</h3>
      <p>Your score is {{ getScore() }} / {{maxScore}}</p>
    </section>
    <section v-else>
      <a class="button is-success" @click="calculateResult()">Show me result!</a>
    </section>
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
    quiz: Object
  },
  computed: {
    isDisplayResults() {
      return this.$store.getters.isDisplayResults;
    },
    maxScore() {
      return this.$store.getters.quiz.questions.length;
    }
  },
  methods: {
    calculateResult() {
      this.$store.commit('displayResults');
    },
    getScore() {
      return this.$store.getters.quiz.questions.reduce((score, q) => {
        const isCorrect = (q.correctAnswerIndex === q.userAnswerIndex);
        if (isCorrect) {
          score ++;
        }
        return score;
      }, 0);
    }
  }
}
</script>
