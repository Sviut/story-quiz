<template>
  <div class="wrapper">
    <div class="top-section">
      <div class="avatar-img">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="title">
        Ответьте на несколько простых вопросов и мы запишем вас на процедуру за 190 руб.
      </div>
      <div class="sub-title">Опрос займет всего 30 секунд!</div>
    </div>

    <div class="bottom-sectoion">
      <div>BUtton section</div>
      <div>BUtton section</div>
      <div>BUtton section</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuizCard',
}
</script>

<style scoped>
.wrapper {
  background-color: white;
  padding: 20px;
  border-radius: 25px;
  height: 460px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}

.top-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar-img {
  height: 68px;
  width: 68px;
  border: 3px solid white;
  /*border-radius: 50%;*/
  overflow: hidden;
}

.avatar-img img {
  /*border-radius: 50%;*/
  height: 100%;
  width: 100%;
}

.title {
  font-weight: bold;
  line-height: 1rem;
}

.sub-title {
  font-weight: lighter;
  font-size: 12px;
}
</style>
