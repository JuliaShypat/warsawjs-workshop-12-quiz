<template>
  <section v-if="question" class="message">
    <p>{{ question.correct }}</p>
      <div class="message-header">
       <h3> {{question.title}} </h3>
      </div>
      <div class="message-body">
        <answer-list
        :answers="question.answers"
        @selectAnswerIndex = "handleSelectAnswer"
        ></answer-list>
      </div>
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
    },
    methods: {
      handleSelectAnswer(answerIndex) {
        const question = this.question;
        this.$store.commit('setUserAnswerIndex', {answerIndex, question});
      },
      checkIfAnswerIsCorrect(selectedIndex, correctIndex) {
        if(selectedIndex === correctIndex) {
          alert("Correct!");
        } else {
          alert("Wrong!")
        }
      }
    }
  }
</script>
