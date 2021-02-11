<template>
  <div id="app">
    <div class="container">
      <div v-if="!isLastQuestion">
        <ProgressBar :bar-count="quizList.length" :current-bar="currentQuiz"/>
        <QuestionCard @addNewAnswer="addNewAnswer" :quiz="quizList[this.currentQuiz]"/>
      </div>
      <LeadsPage v-else @submit="submitResults"/>
    </div>
  </div>
</template>

<script>
import QuestionCard from '@/components/QuestionCard'
import ProgressBar from '@/components/ProgressBar'
import LeadsPage from '@/components/FinalCard'

export default {
  name: 'App',
  components: {
    LeadsPage,
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
      answers: [],
      disableQuiz: false,
    }
  },
  methods: {
    addNewAnswer (answer) {
      if (this.disableQuiz) {return}
      this.disableQuiz = true

      this.answers.push(answer)

      setTimeout(() => {
        this.currentQuiz = this.currentQuiz + 1
        this.disableQuiz = false
      }, 500)
    },
    submitResults (contact) {
      console.log({ ...contact, ...this.answers })
    },
  },
  computed: {
    isLastQuestion () {
      return this.quizList.length === this.currentQuiz
    },
  },
}
</script>

<style>

:root {
  --var-bg-color: rgb(249, 163, 148);
}

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
  background-color: var(--var-bg-color);
  padding: 20px;
  height: 100%;
}
</style>
