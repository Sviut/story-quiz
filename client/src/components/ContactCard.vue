<template>
  <div class="wrapper">
    <div class="card-wrapper">
      <div class="avatar-circle"></div>
      <div class="avatar-img">
        <img src="../assets/logo.png" alt="">
      </div>

      <h4 class="card-title">Укажите ваши контактные данные, что бы мы могли забронировать предложение за 190 руб.
        именно для Вас!</h4>

      <form>
        <input v-model="contact.name" required class="input" placeholder="Ваше имя">
        <input v-model="contact.phone" required type="tel" class="input" placeholder="Ваш номер телефона">
      </form>
    </div>

    <button @click="submit" :disabled="!contact.name || !contact.phone" class="btn">Записаться на лазерную эпиляцию за
      190 руб.
    </button>
  </div>
</template>

<script>
export default {
  name: 'ContactCard',
  data: function () {
    return {
      contact: {
        name: '',
        phone: '',
      },
    }
  },
  methods: {
    submit () {
      this.$emit('submit', this.contact)
    },
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 20px;
}

.card-wrapper {
  padding: 1rem;
  width: 100%;
  border-radius: 25px 25px 0 0;
  background-color: white;
  position: relative;
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
  height: 68px;
  width: 68px;
  border: 3px solid white;
  border-radius: 50%;
  overflow: hidden;
}

.avatar-img img {
  border-radius: 50%;
  height: 100%;
  width: 100%;
}

.card-title {
  /*text-align: left;*/
  line-height: 1rem;
}

.input {
  width: 100%;
  padding: 5px 20px;
  margin-bottom: 10px;
  border-radius: 50px;
  height: 55px;
  text-align: left;
  background-color: rgb(224, 224, 224);
  border: none;
  font-size: 1.3rem;
}

.input::placeholder {
  font-size: 1rem;
}

.input:focus {
  outline: none;
}

.btn {
  width: 100%;
  border: none;
  background-color: rgb(1, 148, 254);
  color: white;
  border-radius: 0 0 25px 25px;
  height: 50px;
  outline: none;
  text-transform: uppercase;
}

.btn:active {
  transform: scale(0.98);
}

.btn:disabled {
  background-color: rgb(224, 224, 224);
}

</style>
