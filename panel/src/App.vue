<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
        flat
    >
      <v-container class="py-0 fill-height">
        <div class="d-flex align-center">
          <h1>Story-Quiz</h1>
        </div>

        <v-spacer></v-spacer>

        <v-btn
            text
            to="/login"
        >
          <span class="mr-2">Вход</span>
        </v-btn>
        <v-btn
            to="/registration"
            dense
            text
        >
          <span class="mr-2">Регистрация</span>
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main>
      <v-container fill-height>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  }),
}
</script>
