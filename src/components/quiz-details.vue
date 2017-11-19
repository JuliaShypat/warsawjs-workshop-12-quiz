<template>
  <section v-if="quiz">
    <h2>{{ quiz.name }}</h2>
    <p>{{ quiz.categoryName }}</p>
    <img :src="quiz.promo">
  </section>
</template>

<script>
  export default {
    name: 'QuizDetails',
    props: {
      quiz:Object
    }
  }
</script>
