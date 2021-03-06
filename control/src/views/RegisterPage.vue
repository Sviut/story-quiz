<template>
  <v-row justify="center" align="center">
    <v-col cols="6">
      <v-card>
        <v-card-text>
          <h2>Вход</h2>
          <v-form
              ref="form"
              v-model="valid"
              lazy-validation
          >
            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
            ></v-text-field>

            <v-text-field
                label="Пароль"
                v-model="password"
                :rules="passwordRules"
            ></v-text-field>

            <v-text-field
                label="Повторите пароль"
                v-model="password2"
                :rules="password2Rules"
            ></v-text-field>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'RegisterPage',
  data () {
    return {
      valid: true,
      showPassword: false,
      showPassword2: false,
      password: '',
      password2: '',
      passwordRules: [
        v => !!v || 'Пароль обязателен',
        v => (v && v.length >= 6) || 'Пароль должен быть больше 6 символов',
      ],
      password2Rules: [
        v => !!v || 'Пароль обязателен',
        (v) => v === this.password || 'Пароли должны совпадать',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail обязателен',
        v => /.+@.+\..+/.test(v) || 'E-mail обязателен',
      ],
    }
  },

  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  },
}
</script>

<style scoped>

</style>
