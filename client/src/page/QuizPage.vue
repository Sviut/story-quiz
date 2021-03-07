<template>
  <div
      class="flex h-full relative justify-center items-center p-5 overflow-hidden p-0 m-0 overflow-hidden"
      @contextmenu.prevent=""
      v-long-press="600"
      @long-press-start="onLongPressStart"
      @long-press-stop="onLongPressStop"
  >
    <ProgressBar
        class="absolute top-5"
        :animationStopped="animationStopped"
        v-if="quizList && (currentQuizCard.type === 'question' || currentQuizCard.type === 'first')"
        :bar-count="progressBarsCount"
        :current-bar="currentQuiz"
    />


    <div v-if="quizList" v-show="quizList">
      <FirstPage
          @imageLoaded="isLoaded = true"
          :image="currentQuizCard.image"
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
    <Loader style="margin-top: 50%" v-else/>
  </div>
</template>

<script>
import LongPress from 'vue-directive-long-press'
import Thanks from '@/components/Thanks'
import FirstPage from '@/components/FirstPage'
import ContactCard from '@/components/ContactCard'
import ProgressBar from '@/components/ProgressBar'
import { COLORS } from '@/constants'
import { getQuiz, sendLead } from '@/api/api'
import Loader from '@/components/Loader'
import QuestionCard from '@/components/QuestionCard/QuestionCard'

export default {
  name: 'QuizPage',
  directives: {
    'long-press': LongPress,
  },
  components: {
    Loader,
    Thanks,
    FirstPage,
    ContactCard,
    ProgressBar,
    QuestionCard,
  },
  data: function () {
    return {
      quizList: null,
      currentQuiz: 0,
      answers: [],
      disableQuiz: false,
      animationStopped: false,
      isLoaded: false,
    }
  },
  async created () {
    const quizData = await getQuiz()
    this.quizList = quizData.quiz
  },
  methods: {
    onLoaded () {
      console.log('isLoaded')
      this.isLoaded = true
    },
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
