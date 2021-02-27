<template>
  <div id="app"
       @contextmenu.prevent=""
       v-long-press="600"
       @long-press-start="onLongPressStart"
       @long-press-stop="onLongPressStop">
    <div class="main">
      <ProgressBar
          :animationStopped="animationStopped"
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
import LongPress from 'vue-directive-long-press'

import QuestionCard from '@/components/QuestionCard'
import ProgressBar from '@/components/ProgressBar'
import ContactCard from '@/components/ContactCard'
import FirstPage from '@/components/FirstPage'
import FinalCard from '@/components/FinalCard'
import { COLORS, QUIZ_LIST } from '@/constants'
import { sendLead } from '@/api/api'

export default {
  directives: {
    'long-press': LongPress,
  },
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
      quizList: QUIZ_LIST,
      currentQuiz: 0,
      answers: [],
      disableQuiz: false,
      animationStopped: false,
    }
  },
  methods: {
    onLongPressStart () {
      console.log('onLongPressStart')
      this.animationStopped = true
    },
    onLongPressStop () {
      console.log('onLongPressStop')
      this.animationStopped = false
    },
    addNewAnswer (answer) {
      this.answers.push(answer)

      setTimeout(() => {
        this.nextQuiz()
      }, 1300)
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

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--var-bg-color);
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  height: calc(100vh - 40px);
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
