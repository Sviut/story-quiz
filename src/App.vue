<template>
  <div id="app">
    <div class="container">
      <ProgressBar :bar-count="quizList.length" :current-bar="currentQuiz"/>
      <QuestionCard @click.native="nextQuiz" :quiz="quizList[this.currentQuiz]"/>
    </div>
  </div>
</template>

<script>
import QuestionCard from '@/components/QuestionCard'
import ProgressBar from '@/components/ProgressBar'

export default {
  name: 'App',
  components: {
    ProgressBar,
    QuestionCard,
  },
  data: function () {
    return {
      quizList: [
        {
          title: 'Ваш вопрос для квиза?',
          answers: [
            { text: 'Ответ первый' },
            { text: 'Вариант номер два' },
            { text: 'Третий ответ' }],
        },
        {
          title: 'Ваш Второй Вопрос?',
          answers: [
            { text: 'Хахаха' },
            { text: 'Тут будет длинный вариант ответа' },
            { text: 'Может быть неясно' }],
        },
        {
          title: 'Ваш Третий вопрос?',
          answers: [
            { text: 'Возможно это ' },
            { text: 'Вариант номер два' },
            { text: 'Третий ответ' }],
        },
      ],
      currentQuiz: 0,
    }
  },
  methods: {
    nextQuiz () {
      // setTimeout(() => {
      // this.currentQuiz = this.currentQuiz + 1
      // }, 300)
    },
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  background-color: slategray;
}

.container {
  padding: 20px;
}
</style>
