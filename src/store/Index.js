import Vue from 'vue';
 import Vuex from 'vuex';

 Vue.use(Vuex);

 export default new Vuex.Store({
   state: {
     quiz: null,
     selectedAnswers: {}
   },
   actions: {
     init({ commit }) {
       fetch('/static/quiz.json')
         .then((res) => res.json())
          .then((quiz) => {
           commit('init', quiz);
         })
     }
   },
   mutations: {
     init(state, quiz) {
       state.quiz = quiz;
     },
     setUserAnswerIndex(state,  param) {
       const question = state.quiz.questions.find((q) => {
         return q.title === param.question.title
       });
      if(question) {
        question.selectedAnswerIndex = param.answerIndex;
        if(question.correctAnswerIndex === param.answerIndex) {
          question.correct = true;
        } else {
          question.correct = false;
        }
      }
     }
   },
   getters: {
     quiz(state) {
       return state.quiz;
     },
     questions(state) {
       return state.quiz.questions;
     }
   }
 });
