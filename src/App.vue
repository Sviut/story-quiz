<template>
  <div id="app">
    <div class="main">
      <ProgressBar :bar-count="quizList.length + 1" :current-bar="currentQuiz"/>
      <FirstPage v-if="currentQuizCard.type === 'first'"/>
      <QuestionCard v-if="currentQuizCard.type === 'question'" @addNewAnswer="addNewAnswer" :quiz="currentQuizCard"/>
      <LeadsPage v-if="currentQuizCard.type === 'form'" @submit="submitResults"/>
    </div>
  </div>
</template>

<script>
import QuestionCard from '@/components/QuestionCard'
import ProgressBar from '@/components/ProgressBar'
import LeadsPage from '@/components/FinalCard'
import FirstPage from '@/components/FirstPage'

export default {
  name: 'App',
  components: {
    FirstPage,
    LeadsPage,
    ProgressBar,
    QuestionCard,
  },
  data: function () {
    return {
      quizList: [
        {
          type: 'first',
        },
        {
          type: 'question',
          title: 'Ваш вопрос для квиза?',
          answers: [
            { text: 'Ответ первый' },
            { text: 'Вариант номер два' },
            { text: 'Третий ответ' }],
        },
        {
          type: 'question',
          title: 'Ваш Второй Вопрос?',
          answers: [
            { text: 'Хахаха' },
            { text: 'Тут будет длинный вариант ответа' },
            { text: 'Может быть неясно' }],
        },
        {
          type: 'question',
          title: 'Ваш Третий вопрос?',
          answers: [
            { text: 'Возможно это ' },
            { text: 'Вариант номер два' },
            { text: 'Третий ответ' }],
        },
        {
          type: 'form',
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
    currentQuizCard () {
      return this.quizList[this.currentQuiz]
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
  background-color: var(--var-bg-color);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  height: calc(100vh - 100px);
  width: 100vw;
  background-color: slategray;
}

.main {
  background-color: var(--var-bg-color);
  height: 100%;
}

.container {
  padding: 20px;
}
</style>
