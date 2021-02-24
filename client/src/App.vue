<template>
  <div id="app">
    <QuizPage>
      <router-view/>
    </QuizPage>
  </div>
</template>

<script>
// import { COLORS, QUIZ_LIST } from '@/constants'
// import { sendLead } from '@/api/api'

import QuizPage from '@/page/QuizPage'

export default {
  name: 'App',
  components: { QuizPage },
  // components: {
  // },
  // data: function () {
  //   return {
  //     quizList: QUIZ_LIST,
  //     currentQuiz: 0,
  //     answers: [],
  //     disableQuiz: false,
  //   }
  // },
  // methods: {
  //   addNewAnswer (answer) {
  //     if (this.disableQuiz) {return}
  //     this.disableQuiz = true
  //
  //     this.answers.push(answer)
  //
  //     setTimeout(() => {
  //       this.nextQuiz()
  //       this.disableQuiz = false
  //     }, 500)
  //   },
  //   nextQuiz () {
  //     this.currentQuiz = this.currentQuiz + 1
  //   },
  //   submitResults (contact) {
  //     this.nextQuiz()
  //     const lead = { ...contact, quiz: this.answers }
  //     console.log(lead)
  //     sendLead(lead)
  //   },
  // },
  // computed: {
  //   progressBarsCount () {
  //     return this.quizList.some(quiz => quiz.type === 'final') ? this.quizList.length - 1 : this.quizList.length
  //   },
  //   currentQuizCard () {
  //     return this.quizList[this.currentQuiz]
  //   },
  //   quizColors () {
  //     return COLORS[3]
  //     // return this.currentQuiz >= COLORS.length ? COLORS[Math.floor(Math.random() * COLORS.length)] : COLORS[this.currentQuiz]
  //   },
  // },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap');

:root {
  --var-main-color: #6473EA;
  --var-btn-color: #858FEE;
}

* {
  box-sizing: border-box;
}

html, body {
  height: 100%;
  max-height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Poppins', sans-serif;
  height: 100%;
}
</style>
