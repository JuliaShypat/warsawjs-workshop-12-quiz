<template>
  <section class="panel-block">
    <p v-if="answer">{{answer}}</p>
  </section>
</template>

<script>
export default {
  name: "AnswerListElement",
  props: {
    answer:String
  }
}
</script>

