<template>
  <div class="container">
    <QuizCard :quiz="quizList[0]"></QuizCard>
  </div>
</template>

<script>

import QuizCard from '@/components/QuizCard'

export default {
  name: 'QuizPage',
  components: { QuizCard },
  computed: {
    quizList () {
      return [
        {
          avatar: 'https://scontent-arn2-1.cdninstagram.com/v/t51.2885-19/s320x320/61770365_641904942900088_6703438381247889408_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_ohc=hw7C5jltq1oAX-BnHH5&tp=1&oh=e1b497a5a8186ab138df551f24c474b3&oe=6060BB60',
          title: 'вас на процедуру за 190 руб.',
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
  align-items: flex-end;
  height: 100%;
  max-height: 100%;
  background-color: var(--var-main-color);
  padding: 25px;
  width: 100%;
}
</style>
