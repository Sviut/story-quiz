<template>
  <div class="wrapper">
    <div class="card-wrapper">
      <div
          class="card-title"
          :style="{background: getGradient}">{{ quiz.title }}
      </div>
      <div class="card-answers">
        <div
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
        </div>
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
    }
  },
  methods: {
    selectAnswer (answer) {
      this.selectedAnswer = answer
      this.$emit('addNewAnswer', { title: this.quiz.title, answer: this.selectedAnswer.text })
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
  padding: 20px;
}

.card-wrapper {
  margin-top: 50%;
  width: 100%;
  border-radius: 25px;
  background-color: white;
}

.card-title {
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 20px;
  text-transform: uppercase;
  color: white;
}

.card-answer {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid gray;
  border-radius: 50px;
  margin: 10px;
  padding: 0 10px;
  height: 55px;
  text-align: left;
}

.card-answer:active {
  transform: scale(1.05);
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
