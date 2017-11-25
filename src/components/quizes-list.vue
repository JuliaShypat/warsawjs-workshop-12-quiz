<template>
  <section v-if="quizes" class='container'>
    <section class="section">
      <div>
        <a class="button is-primary is-outlined" v-for="q of quizes" :key="q.id" @click="navigateToQuiz(q)">
          {{q.name}}
        </a>
      </div>
      <hr/>
    </section>
    <section  class="section">
      <router-view :quiz="selectedQuiz"></router-view>
    </section>
  </section>
</template>

<script>

export default {
  name: 'QuizesList',
  components: {
  },
  data() {
    return {
      selectedQuiz: null
    }
  },
  computed: {
    quizes() {
      return this.$store.getters.quizes;
    }
  },
  methods: {
    navigateToQuiz(quiz) {
      this.selectedQuiz = quiz;
      const id = quiz.id;
      this.$router.push({ name: 'quiz', params: { id } });
    }
  }
}
</script>

<style scoped>
a.button.is-primary.is-outlined {
  margin: 0 5px 0 0;
}
</style>

