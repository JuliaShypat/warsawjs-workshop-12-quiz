<template>
  <div id="app">
    <the-header></the-header>
    <quiz-details :quiz="quiz"></quiz-details>
    <router-view/>
  </div>
</template>

<script>
import TheHeader from './components/the-header.vue';
import QuizDetails from './components/quiz-details';

export default {
  name: 'app',
  components: {
    TheHeader,
    QuizDetails
  },
  data() {
    return {
      quiz: null
    }
  },
  mounted() {
    fetch('/static/quiz.json')
    .then((res) => res.json())
    .then((quiz) => {
      this.quiz = quiz;
    });
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
