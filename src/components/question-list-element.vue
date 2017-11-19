<template>
  <section v-if="question">
    <article class="message is-info">
      <div class="message-header">
       <h3> {{question.title}} </h3>
      </div>
      <div class="message-body">
        <answer-list :answers="question.answers"></answer-list>
      </div>
    </article>
    <hr>
  </section>
</template>

<script>
import AnswerList from './answer-list';

  export default {
    name: 'QuestionListElement',
    components: {
      AnswerList
    },
    props: {
      question:Object
    }
  }
</script>
