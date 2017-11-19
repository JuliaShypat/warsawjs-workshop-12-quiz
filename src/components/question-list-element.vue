<template>
  <section v-if="question" class="message">
      <div class="message-header">
       <h3> {{question.title}} </h3>
      </div>
      <div class="message-body">
        <answer-list
        :answers="question.answers"
        @selectAswerIndex = "handleSelectAnswer"
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
    data() {

    },
    props: {
      question:Object
    },
    methods: {
      handleSelectAnswer(answerIndex) {
        console.log(answerIndex, this.question.correctAnswerIndex);
        this.checkIfAnswerIsCorrect(answerIndex, this.question.correctAnswerIndex);
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
