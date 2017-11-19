<template>
  <p v-if="answer">{{answer}}</p>
</template>

<script>
export default {
  name: "AnswerListElement",
  props: {
    answer:String
  }
}
</script>

