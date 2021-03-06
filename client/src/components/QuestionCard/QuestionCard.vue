<template>
  <div class="bg-white rounded-3xl">
    <div
        class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 text-white p-5 uppercase leading-4 rounded-t-3xl text-center text-sm md:text-2xl"
    >
      {{ quiz.title }}
    </div>
    <div class="flex flex-col space-y-2 p-2">
      <AnswerButton
          @click.native="selectAnswer(answer)"
          v-for="(answer, idx) in quiz.answers"
          :key="idx"
          :text="answer.text"
          :index="idx"
          :is-selected="selectedAnswer === answer"
      />
    </div>
  </div>
</template>

<script>
import AnswerButton from '@/components/QuestionCard/AnswerButton'

export default {
  name: 'QuestionCard',
  components: { AnswerButton },
  props: {
    quiz: {
      type: Object,
      required: true,
    },
    color: {
      type: Object,
      required: true,
    },
  },
  data: function () {
    return {
      selectedAnswer: '',
      disabled: false,
    }
  },
  methods: {
    selectAnswer (answer) {
      if (this.disabled) {
        return
      }
      this.disabled = true
      this.selectedAnswer = answer
      this.$emit('addNewAnswer', {
        title: this.quiz.title,
        answer: this.selectedAnswer.text,
      })
      setTimeout(() => (this.disabled = false), 1300)
    },
  },
  computed: {
    getGradient () {
      return `linear-gradient(to right, rgb(${this.color.from}), rgb(${this.color.to}))`
    },
  },
}
</script>
