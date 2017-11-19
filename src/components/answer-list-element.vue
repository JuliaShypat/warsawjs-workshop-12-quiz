<template>
  <section class="panel-block" @click="onClick">
    <p v-if="answer" >{{answer}}</p>
  </section>
</template>

<script>
export default {
  name: "AnswerListElement",
  props: {
    answer:String
  },
  methods: {
    onClick() {
      this.$emit("selectAnswer", this.answer);
    }
  }
}
</script>

<style scoped>
  section{
    display: block;
    cursor: pointer;
  }
  section:hover{
    background: paleturquoise;
  }
</style>
