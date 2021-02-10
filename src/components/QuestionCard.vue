<template>
  <div class="wrapper">
    <div class="progress-wrapper">
      <div class="progress-bar"></div>
    </div>

    <div class="card-wrapper">
      <div class="card-title">{{ quiz.title }}</div>
      <div class="card-answers">
        <div :key="idx" v-for="(answer, idx) in quiz.answers" class="card-answer">
          <div class="card-answer__icon">{{ String.fromCharCode(65 + idx) }}</div>
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
  },
  data: function () {
    return {}
  },
  methods: {},
}
</script>

<style scoped>
.wrapper {
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.card-wrapper {
  margin-top: 50%;
  width: 100%;
  border-radius: 25px;
  background-color: white;
}

.card-title {
  background-color: dodgerblue;
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
  transition: all 0.2s ease-in-out;
}

.card-answer__selected {
  background-color: green;
  color: white;
  border: 1px solid white;
  transition: all 0.2s ease-in-out;
}

.card-answer__icon {
  display: flex;
  align-items: center;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  padding: 6px;
  background: #fff;
  color: deepskyblue;
  border: 2px solid deepskyblue;
  text-align: center;
  font-weight: bold;
  margin-right: 15px;
}

.progress-wrapper {
  width: 100%;
}

.progress-bar {
  background-color: #fff;
  height: 4px;
  width: 100%;
  animation: grow 5s linear;
  transform-origin: left;
  border-radius: 5px;
}

@keyframes grow {
  0% {
    transform: scaleX(0);
  }
}
</style>
