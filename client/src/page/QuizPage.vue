<template>
  <div class="container">
    <transition-group tag="div" class="img-slider" name="slide">
      <div v-for="i in [currentQuiz]" :key="i">
        <QuizCard
            v-if="quizList[currentQuiz].type === 'quiz'"
            :disableButtons="disableButtons"
            @clickOnButton="submit"
            :quiz="quizList[currentQuiz]"
            :avatar="avatar"
        />
        <LeadForm
            v-if="quizList[currentQuiz].type === 'leadForm'"
            :quiz="quizList[currentQuiz]"
            :avatar="avatar"
            @submitForm="submitForm"
        />
        <ThanksCard
            v-if="quizList[currentQuiz].type === 'thanks'"
            :quiz="quizList[currentQuiz]"
        />
      </div>
    </transition-group>
  </div>
</template>

<script>

import QuizCard from '@/components/QuizCard'
import LeadForm from '@/components/LeadForm'
import ThanksCard from '@/components/ThanksCard'

export default {
  name: 'QuizPage',
  components: { ThanksCard, LeadForm, QuizCard },
  data: function () {
    return {
      disableButtons: false,
      currentQuiz: 0,
      avatar: 'https://scontent-arn2-1.cdninstagram.com/v/t51.2885-19/s320x320/61770365_641904942900088_6703438381247889408_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_ohc=hw7C5jltq1oAX-BnHH5&tp=1&oh=e1b497a5a8186ab138df551f24c474b3&oe=6060BB60',
    }
  },

  methods: {
    submit (button) {
      if (button.save) {
        console.log(button)
      }
      this.nextQuiz()
    },
    nextQuiz () {
      this.disableButtons = true
      setTimeout(() => {
        this.currentQuiz += 1
        this.disableButtons = false
      }, 500)
    },
    submitForm (contact) {
      this.nextQuiz()
      console.log(contact)
    },
  },

  computed: {
    quizList () {
      return [
        {
          type: 'quiz',
          title: 'вас на процедуру за 190 руб.',
          subtitle: 'Опрос займет всего 30 секунд!',
          actionButtons: [
            { text: 'Пройти опрос!', type: 'fill' },
          ],
        },
        {
          type: 'quiz',
          title: '2',
          subtitle: 'Опрос займет всего 30 секунд!',
          actionButtons: [
            { text: 'Пройти опрос!' },
            { text: 'Пройти опрос!' },
            { text: 'Пройти опрос!' },
            { text: 'Пройти опрос!' },
          ],
        },
        {
          type: 'quiz',
          title: '3',
          subtitle: 'Опрос займет всего 30 секунд!',
          actionButtons: [
            { text: 'Пройти опрос!' },
          ],
        },
        {
          type: 'leadForm',
          title: '',
          subtitle: 'Укажите ваши контактные данные, что бы мы могли забронировать предложение за 190 руб именно для Вас!',
          actionText: 'Записаться на лазерную эпиляцию 190 руб.',
        },
        {
          type: 'thanks',
          url: 'https://www.instagram.com/Laser_tomsk',
        },
      ]
    },
  },
}
</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  max-height: 100%;
  background-color: var(--var-main-color);
  /*padding: 25px;*/
  width: 100%;
}

.img-slider {
  overflow: hidden;
  position: relative;
  height: 500px;
  width: calc(100% - 30px);
  margin: auto;
}

.quiz {
  position: absolute;
}

.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}

.slide-enter {
  transform: translate(100%, 0);
}

.slide-leave-to {
  transform: translate(-300%, 0);
}
</style>
