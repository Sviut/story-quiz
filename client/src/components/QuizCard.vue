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

    <div class="bottom-section">
      <button class="btn">Пройти опрос</button>
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
  margin-bottom: 40px;
}

.top-section {
  padding-top: 20px;
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
  margin-bottom: 15px;
}

.avatar-img img {
  /*border-radius: 50%;*/
  height: 100%;
  width: 100%;
}

.title {
  font-weight: bold;
  line-height: 1rem;
  margin-bottom: 10px;
}

.sub-title {
  color: var(--var-btn-color);
  font-size: 12px;
}

.bottom-section {
  width: 100%;
  margin-bottom: 20px;
}

.btn {
  background-color: var(--var-btn-color);
  border-radius: 25px;
  color: white;
  outline: none;
  border: transparent;
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
}

.btn:active, .btn:focus {
  outline: none;
}
</style>
