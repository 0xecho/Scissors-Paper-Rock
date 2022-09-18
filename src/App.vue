<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <span class="display-1 font-weight-black">Scissors Paper Rock</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/0xecho" target="_blank" text>
        <span class="mr-2">Fork me</span>
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <home-view />
    </v-main>
    <v-footer app dark color="primary">
      <v-row justify="center" align="center" style="height: 50px">
        <span class="white--text"
          >Made with ❤️ by
          <a
            href="https://github.com/0xecho"
            target="_blank"
            class="white--text"
          >
            0xecho
          </a>
        </span>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import HomeView from "./views/HomeView.vue";
export default {
  components: { HomeView },
  name: "App",

  data: () => ({
    //
  }),
};
</script>
