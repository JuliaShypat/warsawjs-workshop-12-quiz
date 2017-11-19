<template>
  <section v-if="answers">
    <ul>
      <li v-for="answer of answers" :key="answer">
        <answer-list-element :answer="answer"></answer-list-element>
      </li>
    </ul>
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

