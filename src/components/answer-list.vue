<template>
  <section v-if="answers" class="panel">
    <answer-list-element
    v-for="(answer, index) in answers"
    :key="answer"
    :answer="answer"
    @selectAnswer="onSelectAnswer(answer, index)"
   ></answer-list-element>
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
  },
  methods: {
    onSelectAnswer(selectedAnswer, selectedAnswerIndex) {
      this.$emit('selectAnswerIndex', selectedAnswerIndex);
    }
  }
}
</script>

