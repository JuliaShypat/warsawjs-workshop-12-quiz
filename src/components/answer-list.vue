<template>
  <section v-if="answers" class="panel">
    <answer-list-element
    v-for="(answer, index) in answers"
    :key="answer"
    :answer="answer"
    :answerIndex = "index"
    :question = "question"
    @selectAnswer="onSelectAnswer(index)"></answer-list-element>
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
    answers: Array,
    question: Object
  },
  methods: {
    onSelectAnswer(selectedAnswerIndex) {
      this.$emit('selectAnswerIndex', selectedAnswerIndex);
    }
  }
}
</script>

