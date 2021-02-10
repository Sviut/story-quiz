<template>
  <div class="wrapper">
    <div class="progress-wrapper">
      <div class="progress-bar"></div>
    </div>

    <div class="card-wrapper">
      <div class="card-title">Что для вас больше всего важно в мастере?</div>
      <div class="card-answers">
        <div class="card-answer">Вариант 1</div>
        <div class="card-answer">Вариант 2</div>
        <div class="card-answer">Вариант 3</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionCard',
}
</script>

<style scoped>
.wrapper {
  padding: 20px;
}

.card-wrapper {
  width: 100%;
  padding: 15px;
  border: 1px solid red;
}

.progress-wrapper {
  width: 100%;
}

.progress-bar {
  /*background-color: #fff;*/
  background-color: red;
  height: 4px;
  width: 100%;
  animation: grow 5s linear;
  transform-origin: left;
}

@keyframes grow {
  0% {
    transform: scaleX(0);
  }
}
</style>
