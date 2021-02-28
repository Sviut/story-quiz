<template>
  <div
      @contextmenu.prevent=""
      v-long-press="600"
      @long-press-start="onLongPressStart"
      @long-press-stop="onLongPressStop"
  >
    <div class="main">
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
  </div>
</template>

<script>
import LongPress from 'vue-directive-long-press'
import Thanks from '@/components/Thanks'
import FirstPage from '@/components/FirstPage'
import ContactCard from '@/components/ContactCard'
import ProgressBar from '@/components/ProgressBar'
import QuestionCard from '@/components/QuestionCard'
import { COLORS, QUIZ_LIST } from '@/constants'
import { sendLead } from '@/api/api'

export default {
  name: 'QuizPage',
  directives: {
    'long-press': LongPress,
  },
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
      }, 1300)
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

<style scoped>
.main {
  position: relative;
  height: 100%;
}

.container {
  padding: 20px;
}
</style>
