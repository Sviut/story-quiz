<template>
  <div class="wrapper">
    <div class="top-section">
      <div v-if="avatar" class="avatar-img">
        <img :src="avatar" alt="">
      </div>
      <div v-if="quiz.title" class="title">{{ quiz.title }}</div>
      <div v-if="quiz.subtitle" class="sub-title">{{ quiz.subtitle }}</div>
    </div>
    <div class="bottom-section">
      <form @submit.prevent="submit">
        <input v-model="contact.name" id="name" required class="input" placeholder="Ваше имя">
        <input v-model="contact.phone" id="phone" required type="tel" class="input" placeholder="Ваш номер телефона">

        <button
            :disabled="disable || !isFormValid"
            type="submit"
            class="btn"
        >
          {{ quiz.actionText }}
        </button>
      </form>

    </div>
  </div>
</template>

<script>
export default {
  name: 'LeadForm',
  props: {
    quiz: {
      type: Object,
      required: true,
    },
    avatar: {
      type: String,
    },
  },

  data: function () {
    return {
      contact: {
        name: '',
        phone: '',
      },
      disable: false,
    }
  },

  computed: {
    isFormValid () {
      return this.contact.name && this.contact.phone
    },
  },

  methods: {
    submit () {
      this.disable = true
      this.$emit('submitForm', { ...this.contact })
    },
  },
}
</script>

<style scoped>
.wrapper {
  background-color: white;
  padding: 20px;
  border-radius: 25px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  margin-bottom: 40px;
  position: absolute;
}

.top-section {
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
}

.avatar-img {
  height: 85px;
  width: 85px;
  border: 3px solid white;
  overflow: hidden;
  margin-bottom: 15px;
}

.avatar-img img {
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
  margin-top: 15px;
  font-size: 15px;
  background-color: var(--var-btn-color);
  border-radius: 25px;
  color: white;
  outline: none;
  border: 2px solid var(--var-btn-color);
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
  -webkit-box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.25);
  box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.25);
}

.btn:disabled {
  background-color: lightgrey;
  border: 2px solid transparent;
  color: slategrey;
}

.btn:active, .btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.99);
}

.btnFill {
  background-color: var(--var-btn-color);
  border: 2px solid transparent;
  color: white;
}

.input {
  width: 100%;
  padding: 5px 20px;
  margin-bottom: 10px;
  border-radius: 50px;
  height: 55px;
  text-align: left;
  border: 2px solid var(--var-btn-color);
  font-size: 1.3rem;
}

.input::placeholder {
  font-size: 1rem;
  color: var(--var-btn-color);
}

.input:focus {
  outline: none;
}

form {
  margin-bottom: 20px;
}
</style>
