<template>
  <div id="app">
    <div class="container">
      <ProgressBar/>
      <QuestionCard :quiz="quizList[0]"/>
    </div>
  </div>
</template>

<script>
import QuestionCard from '@/components/QuestionCard'
import ProgressBar from '@/components/ProgressBar'

export default {
  name: 'App',
  components: {
    ProgressBar,
    QuestionCard,
  },
  data: function () {
    return {
      quizList: [
        {
          title: 'Ваш вопрос для квиза?',
          answers: [
            { text: 'Ответ первый' },
            { text: 'Вариант номер два' },
            { text: 'Третий ответ' }],
        },
      ],
    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  background-color: slategray;
}

.container {
  padding: 20px;
}
</style>
