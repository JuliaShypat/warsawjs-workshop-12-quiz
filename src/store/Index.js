import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    quiz: null,
    selectedAnswers: {},
    isDisplayResults: false
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
    setUserAnswerIndex(state, { userAnswerIndex, question}) {
      state.quiz.questions.find((q) => {
        return q.title === question.title;
      }).userAnswerIndex = userAnswerIndex;
    },
    displayResults(state) {
      state.isDisplayResults = true;
    }
  },
  getters: {
    quiz(state) {
      return state.quiz;
    },
    questions(state) {
      return state.quiz.questions;
    },
    isDisplayResults(state) {
      return state.isDisplayResults;
    }
  }
});
