<template>
  <div id="app">
    <div class="main">
      <ProgressBar
          v-if="currentQuizCard.type !== 'final'"
          :bar-count="progressBarsCount"
          :current-bar="currentQuiz"
      />

      <FirstPage
          @clickOnButton="nextQuiz"
          v-if="currentQuizCard.type === 'first'"
      />

      <QuestionCard
          v-if="currentQuizCard.type === 'question'"
          @addNewAnswer="addNewAnswer"
          :quiz="currentQuizCard"
          :color="quizColors"
      />

      <ContactCard
          v-if="currentQuizCard.type === 'form'"
          @submit="submitResults"
      />

      <FinalCard
          v-if="currentQuizCard.type === 'final'"
      />
    </div>
  </div>
</template>

<script>
import QuestionCard from '@/components/QuestionCard'
import ProgressBar from '@/components/ProgressBar'
import ContactCard from '@/components/ContactCard'
import FirstPage from '@/components/FirstPage'
import FinalCard from '@/components/FinalCard'
import { COLORS } from '@/constants'

export default {
  name: 'App',
  components: {
    FinalCard,
    FirstPage,
    ContactCard,
    ProgressBar,
    QuestionCard,
  },
  data: function () {
    return {
      quizList: [
        // {
        //   type: 'first',
        // },
        // {
        //   type: 'question',
        //   title: 'Ваш вопрос для квиза?',
        //   answers: [
        //     { text: 'Ответ первый' },
        //     { text: 'Вариант номер два' },
        //     { text: 'Третий ответ' }],
        // },
        // {
        //   type: 'question',
        //   title: 'Ваш Второй Вопрос?',
        //   answers: [
        //     { text: 'Хахаха' },
        //     { text: 'Тут будет длинный вариант ответа' },
        //     { text: 'Может быть неясно' }],
        // },
        // {
        //   type: 'question',
        //   title: 'Ваш Второй Вопрос1?',
        //   answers: [
        //     { text: 'Хахаха' },
        //     { text: 'Тут будет длинный вариант ответа' },
        //     { text: 'Может быть неясно' }],
        // },
        // {
        //   type: 'question',
        //   title: 'Ваш Второй Вопрос2?',
        //   answers: [
        //     { text: 'Хахаха' },
        //     { text: 'Тут будет длинный вариант ответа' },
        //     { text: 'Может быть неясно' }],
        // },
        // {
        //   type: 'question',
        //   title: 'Ваш Второй Вопрос3?',
        //   answers: [
        //     { text: 'Хахаха' },
        //     { text: 'Тут будет длинный вариант ответа' },
        //     { text: 'Может быть неясно' }],
        // },
        // {
        //   type: 'question',
        //   title: 'Ваш Второй Вопрос4?',
        //   answers: [
        //     { text: 'Хахаха' },
        //     { text: 'Тут будет длинный вариант ответа' },
        //     { text: 'Может быть неясно' }],
        // },
        // {
        //   type: 'question',
        //   title: 'Ваш Второй Вопрос?',
        //   answers: [
        //     { text: 'Хахаха' },
        //     { text: 'Тут будет длинный вариант ответа' },
        //     { text: 'Может быть неясно' }],
        // },
        // {
        //   type: 'question',
        //   title: 'Ваш Третий вопрос?',
        //   answers: [
        //     { text: 'Возможно это ' },
        //     { text: 'Вариант номер два' },
        //     { text: 'Третий ответ' }],
        // },
        {
          type: 'form',
        },
        {
          type: 'final',
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
        this.nextQuiz()
        this.disableQuiz = false
      }, 500)
    },
    nextQuiz () {
      this.currentQuiz = this.currentQuiz + 1
    },
    submitResults (contact) {
      this.nextQuiz()
      console.log({ ...contact, ...this.answers })
    },
  },
  computed: {
    progressBarsCount () {
      return this.quizList.some(quiz => quiz.type === 'final') ? this.quizList.length - 1 : this.quizList.length
    },
    currentQuizCard () {
      return this.quizList[this.currentQuiz]
    },
    quizColors () {
      return this.currentQuiz >= COLORS.length ? COLORS[Math.floor(Math.random() * COLORS.length)] : COLORS[this.currentQuiz]
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
  position: relative;
  background-color: var(--var-bg-color);
  height: 100%;
}

.container {
  padding: 20px;
}
</style>
