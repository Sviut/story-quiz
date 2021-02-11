<template>
  <div class="wrapper">
    <div class="card-wrapper">
      <div class="avatar-circle"></div>
      <div class="avatar-img"></div>

      <h4 class="card-title">Укажите ваши контактные данные, что бы мы могли забронировать предложение за 190 руб.
        именно для Вас!
      </h4>

      <input class="input" placeholder="Ваше имя">
      <input class="input" placeholder="Ваш номер телефона">
    </div>
  </div>
</template>

<script>
export default {
  name: 'FinalCard',
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.card-wrapper {
  padding: 1rem;
  width: 100%;
  border-radius: 25px;
  background-color: white;
  position: relative;
  margin-bottom: 20px;
}

.avatar-circle {
  position: absolute;
  left: 50%;
  top: 0px;
  transform: translate(-50%, -50%);
  height: 55px;
  width: 55px;
  border-radius: 50%;
  background-color: white;
}

.avatar-img {
  position: absolute;
  left: 50%;
  top: 0px;
  transform: translate(-50%, -50%);
  height: 52px;
  width: 52px;
  border-radius: 50%;
  background-color: red;
}

.card-title {
  text-align: left;
  line-height: 16px;
}

.input {
  width: 100%;
  padding: 15px 20px;
  margin-bottom: 10px;
  border: 1px solid gray;
  border-radius: 50px;
  height: 55px;
  text-align: left;
  background-color: rgb(224, 224, 224);
  border: none;
  font-size: 1.5rem;
}

.input::placeholder {
  font-size: 1rem;
}

.input:focus {
  outline: none;
}

</style>
