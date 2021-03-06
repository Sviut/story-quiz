<template>
  <div
      @contextmenu.prevent=""
      v-long-press="600"
      @long-press-start="onLongPressStart"
      @long-press-stop="onLongPressStop"
      class="flex h-screen w-full	relative justify-center items-center p-5 overflow-hidden p-0 m-0"
  >
    <ProgressBar
        :animationStopped="animationStopped"
        v-if="currentQuizCard.type === 'question' || currentQuizCard.type === 'first'"
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

    <Thanks
        v-if="currentQuizCard.type === 'final'"
    />
  </div>
</template>

<script>
import LongPress from 'vue-directive-long-press'

import QuestionCard from '@/components/QuestionCard/QuestionCard'
import ProgressBar from '@/components/ProgressBar'
import ContactCard from '@/components/ContactCard'
import FirstPage from '@/components/FirstPage'
import Thanks from '@/components/Thanks'
import { COLORS, QUIZ_LIST } from '@/constants'
import { sendLead } from '@/api/api'

export default {
  directives: {
    'long-press': LongPress,
  },
  name: 'App',
  components: {
    Thanks,
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

      this.nextQuiz()
    },
    nextQuiz () {
      setTimeout(() => {
        this.currentQuiz = this.currentQuiz + 1
      }, 800)
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
      const questionCount = this.quizList.filter(quiz => quiz.type === 'question').length
      return questionCount + 1
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
* {
  box-sizing: border-box;
}

body {
  height: 100vh;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  background: linear-gradient(to left top, rgb(132, 133, 216), rgb(233, 235, 250)) no-repeat;
}
</style>
