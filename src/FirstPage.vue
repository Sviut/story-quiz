<template>
  <div class="wrapper">
    <div class="image-container">
      <img src="./assets/images/lazer.jpg" alt="">
    </div>
    <div class="text-container">
      <div class="test-title">
        Ответьте на несколько простых вопросов и мы запишем вас на процедуру за 190 руб.
      </div>
      <div class="text-subtitle">
        Опрос займет всего 30 секунд!
      </div>
      <button :style="{background: getGradient}" class="btn">Пройти опрос</button>
    </div>
  </div>
</template>

<script>
const { COLORS } = require('@/constants')

export default {
  name: 'FirstPage',
  computed: {
    getGradient () {
      return `linear-gradient(to right, rgb(${COLORS[0].from}), rgb(${COLORS[0].to}))`
    },
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.image-container {
  height: 40%;
}

.image-container img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.text-container {
  /*height: %;*/
}

.btn {
  border: none;
  text-transform: uppercase;
  color: white;
  font-weight: bold;
  padding: 15px 25px;
  border-radius: 25px;
  font-size: 1rem;
}
</style>
