<template>
  <div class="container" @click="inc">
    <transition-group tag="div" class="img-slider" name="slide">
      <div v-for="i in [idx]" :key="i">
        <QuizCard class="quiz" :quiz="quizList[idx]"></QuizCard>
      </div>
    </transition-group>
  </div>
</template>

<script>

import QuizCard from '@/components/QuizCard'

export default {
  name: 'QuizPage',
  components: { QuizCard },
  data: function () {
    return {
      idx: 0,
    }
  },

  methods: {
    inc () {
      console.log('aa')
      setTimeout(() => {
        this.idx += 1
      }, 900)
    },
  },

  computed: {
    quizList () {
      return [
        {
          avatar: 'https://scontent-arn2-1.cdninstagram.com/v/t51.2885-19/s320x320/61770365_641904942900088_6703438381247889408_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_ohc=hw7C5jltq1oAX-BnHH5&tp=1&oh=e1b497a5a8186ab138df551f24c474b3&oe=6060BB60',
          title: 'вас на процедуру за 190 руб.',
          subtitle: 'Опрос займет всего 30 секунд!',
          actionButtons: [
            { text: 'Пройти опрос!', type: 'fill' },
          ],
        },
        {
          avatar: 'https://scontent-arn2-1.cdninstagram.com/v/t51.2885-19/s320x320/61770365_641904942900088_6703438381247889408_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_ohc=hw7C5jltq1oAX-BnHH5&tp=1&oh=e1b497a5a8186ab138df551f24c474b3&oe=6060BB60',
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
          avatar: 'https://scontent-arn2-1.cdninstagram.com/v/t51.2885-19/s320x320/61770365_641904942900088_6703438381247889408_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_ohc=hw7C5jltq1oAX-BnHH5&tp=1&oh=e1b497a5a8186ab138df551f24c474b3&oe=6060BB60',
          title: '3',
          subtitle: 'Опрос займет всего 30 секунд!',
          actionButtons: [
            { text: 'Пройти опрос!' },
          ],
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
  height: 100%;
  width: calc(100% - 30px);
  margin: auto;
}

.quiz {
  position: absolute;
  margin-top: 10rem;
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
