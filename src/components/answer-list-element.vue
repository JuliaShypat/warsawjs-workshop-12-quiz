<template>
  <section class="panel-block" @click="onClick()" :class="getCssClass()">
    <p v-if="answer">{{answer}}</p>
  </section>
</template>

<script>
export default {
  name: "AnswerListElement",
  props: {
    answer: String,
    question: Object,
    answerIndex: Number
  },
  data() {
    return {
      style: {
        select: false,
        good: false,
        bad: false
      }
    };
  },
  computed: {
    isDisplayResults() {
      return this.$store.getters.isDisplayResults;
    }
  },
  methods: {
    onClick() {
      this.$emit("selectAnswer", this.answer);
      this.markAsSelected();
    },
    markAsSelected() {
      this.style.select = true;
    },
    markAsUnselected() {
      this.style.select = false;
    },
    markAsGood() {
      this.markAsUnselected();
      this.style.good = true;
      this.style.bad = false;
    },
    markAsBad() {
      this.markAsUnselected();
      this.style.bad = true;
      this.style.good = false;
    },
    getCssClass() {
      return {
        'is-selected': this.style.select,
        'is-good': this.style.good,
        'is-bad': this.style.bad
      }
    }
  },
  watch: {
    isDisplayResults(value) {
      if (!value) {
        return;
      }

      const q = this.question;
      const isUserCorrectAnswer = (this.answerIndex === q.correctAnswerIndex);
      const isUserSelectCorrectAnswer = (q.correctAnswerIndex === q.userAnswerIndex);
      const isUserSelectThisAnswer = (this.answerIndex === q.userAnswerIndex);

      if (isUserSelectThisAnswer) {
        if (isUserSelectCorrectAnswer) {
          this.markAsGood();
        } else {
          this.markAsBad();
        }
      }

      if (isUserCorrectAnswer) {
        this.markAsGood();
      }
    }
  }
}
</script>

<style scoped>
section {
  display: block;
  cursor: pointer;
}

section:hover {
  background: paleturquoise;
}

section.is-selected {
  background: yellow;
}

section.is-good {
  background: green;
}

section.is-bad {
  background: red;
}
</style>
