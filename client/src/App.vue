<template>
  <div id="app" class="flex">
    <p class="mt-11">aa</p>
    <router-view/>
  </div>
</template>

<script>
import { COLORS, QUIZ_LIST } from '@/constants'
import { sendLead } from '@/api/api'

export default {
  name: 'App',
  // components: {
  // },
  data: function () {
    return {
      quizList: QUIZ_LIST,
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
      const lead = { ...contact, quiz: this.answers }
      console.log(lead)
      sendLead(lead)
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
      return COLORS[3]
      // return this.currentQuiz >= COLORS.length ? COLORS[Math.floor(Math.random() * COLORS.length)] : COLORS[this.currentQuiz]
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap');

:root {
  --var-bg-color: rgb(249, 163, 148);
}

/** {*/
/*  box-sizing: border-box;*/
/*}*/

/*body {*/
/*  margin: 0;*/
/*  padding: 0;*/
/*  background-color: var(--var-bg-color);*/
/*}*/

/*#app {*/
/*  font-family: 'Poppins', sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin: 0;*/
/*  padding: 0;*/
/*  height: calc(100vh - 40px);*/
/*  width: 100vw;*/
/*  background-color: slategray;*/
/*}*/

/*.main {*/
/*  position: relative;*/
/*  background-color: var(--var-bg-color);*/
/*  height: 100%;*/
/*}*/

/*.container {*/
/*  padding: 20px;*/
/*}*/
</style>
