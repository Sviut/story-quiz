<template>
  <v-row justify="center" align="center">
    <v-col cols="6">
      <v-card>
        <v-card-text>
          <v-form
              ref="form"
              v-model="valid"
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
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
            ></v-text-field>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'LoginPage',
  data: () => ({
    valid: true,
    showPassword: false,
    password: '',
    passwordRules: [
      v => !!v || 'Пароль обязателен',
      v => (v && v.length >= 6) || 'Пароль должен быть больше 6 символов',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail обязателен',
      v => /.+@.+\..+/.test(v) || 'E-mail обязателен',
    ],
  }),

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
