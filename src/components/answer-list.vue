<template>
  <section v-if="answers" class="panel">
    <answer-list-element v-for="answer of answers" :key="answer" :answer="answer"></answer-list-element>
  </section>
</template>

<script>
import AnswerListElement from './answer-list-element';

export default {
  name: "AnswerList",
  components: {
    AnswerListElement
  },
  props: {
    answers:Array
  }
}
</script>

