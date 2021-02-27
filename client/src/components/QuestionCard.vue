<template>
  <div class="wrapper">
    <div class="card-wrapper">
      <div
          class="card-title"
          :style="{background: getGradient}">{{ quiz.title }}
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
              :style="{ color: getIconColor, border: '2px solid ' + getIconColor }"
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
    getIconColor () {
      return `rgb(${this.color.to})`
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
  border: 1px solid cornflowerblue;
  border-radius: 50px;
  margin: 10px;
  padding: 0 10px;
  height: 55px;
  text-align: left;
}

.card-answer:active {
  transform: scale(1.02);
}

.card-answer:focus {
  outline: none;
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
  border: 1px solid white;
  transition: all 0.2s ease-in-out;
}

.card-answer__icon {
  display: flex;
  align-items: center;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  padding: 7.5px;
  background: #fff;
  text-align: center;
  font-weight: bold;
  margin-right: 15px;
}
</style>
