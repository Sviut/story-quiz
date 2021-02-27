<template>
  <div class="wrapper">
    <div class="card-wrapper">
      <div
          class="card-title"
          :style="{background: getGradient}"
      >
        {{ quiz.title }}
      </div>
      <div class="card-answers">
        <button
            :disabled="disabled"
            v-for="(answer, idx) in quiz.answers" class="card-answer"
            :class="{'card-answer__selected' : selectedAnswer === answer}"
            @click="selectAnswer(answer)" :key="idx"
        >
          <div
              class="card-answer__icon"
              :class="{'card-answer__icon__selected' : selectedAnswer === answer}"
          >
            {{ String.fromCharCode(65 + idx) }}
          </div>
          <div class="card-answer__text">{{ answer.text }}</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionCard',
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
      this.disabled = true
      this.selectedAnswer = answer
      this.$emit('addNewAnswer', { title: this.quiz.title, answer: this.selectedAnswer.text })
      setTimeout(() => this.disabled = false, 1300)
    },
  },
  computed: {
    getGradient () {
      return `linear-gradient(to right, rgb(${this.color.from}), rgb(${this.color.to}))`
    },
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  height: 100%;
}

.card-wrapper {
  border-radius: 25px;
  background-color: white;
}

.card-title {
  line-height: 1rem;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 20px;
  text-transform: uppercase;
  color: white;
}

.card-answer {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  line-height: 1rem;
  border: 1px solid rgb(87, 163, 252);
  border-radius: 50px;
  margin: 6px;
  padding: 0 10px;
  height: 50px;
  text-align: left;
  background-color: white;
}

.card-answer:active {
  transform: scale(1.1);
  transition: all 0.5s ease-in-out;
}

.card-answer:focus {
  outline: none;
}

.card-answer:disabled {
  border: 1px solid grey;
}

.card-answers {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.card-answer__selected {
  background-color: rgb(85, 195, 61);
  color: white;
  border: 1px solid transparent !important;
  transition: all 0.5s ease-in-out;
}

.card-answer__icon {
  display: flex;
  align-items: center;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  padding: 8px;
  background: #fff;
  text-align: center;
  font-weight: bold;
  margin-right: 15px;
  border: 2px solid rgb(87, 163, 252);
  color: rgb(87, 163, 252);
}

.card-answer__icon__selected {
  border: 2px solid rgb(85, 195, 61);
  color: rgb(85, 195, 61);
  transition: all 0.5s ease-in-out;
}

.card-answer__text {
  font-size: 0.90rem;
}
</style>
