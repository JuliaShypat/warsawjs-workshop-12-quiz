<template>
  <div id="app">
    <section class="container">
      <the-header></the-header>
      <home-component></home-component>
      <!--quizes-list :quizes="quizesList"></quizes-list-->
    </section>
  </div>
</template>

<script>
import TheHeader from './components/the-header.vue';
import QuizesList from './components/quizes-list.vue';
import HomeComponent from './components/home.vue';

export default {
  name: 'app',
  components: {
    TheHeader,
    HomeComponent
  },
  computed: {
   quiz() {
    return this.$store.getters.quiz;
   },
   quizesList() {
     return this.$store.getters.quizes;
   }
  },
  mounted() {
    this.$store.dispatch('init');
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
