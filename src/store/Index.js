import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    quiz: null,
    quizes: null,
    selectedAnswers: {},
    isDisplayResults: false
  },
  actions: {
    init({ commit }) {
      fetch('/static/quiz.json')
        .then((res) => res.json())
        .then((quizes) => {
          commit('init', quizes);
        })
    }
  },
  mutations: {
    init(state, quizes) {
      state.quizes = quizes;
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
    quizes(state) {
      return state.quizes;
    },
    questions(state) {
      return state.quiz.questions;
    },
    isDisplayResults(state) {
      return state.isDisplayResults;
    },
    quizt(state, id) {
      console.log(id);
    }
  }
});
