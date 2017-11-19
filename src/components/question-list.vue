<template>
  <section v-if="questions">
    <div v-for="question of questions" :key="question.title">
      <question-list-element :question="question"></question-list-element>
    </div>
  </section>
</template>

<script>
import QuestionListElement from './question-list-element';

  export default {
    name: 'QuestionList',
    components: {
      QuestionListElement
    },
    props: {
      questions:Array
    }
  }
</script>
