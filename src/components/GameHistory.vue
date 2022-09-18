<script>
export default {
  name: "GameHistory",
  props: {
    history: {
      type: Array,
      required: true,
    },
    totalGames: {
      type: Number,
      required: true,
    },
    totalWins: {
      type: Number,
      required: true,
    },
    totalLoses: {
      type: Number,
      required: true,
    },
    totalDraws: {
      type: Number,
      required: true,
    },
  },
  methods: {
    getLast5Games() {
      return this.history.slice(-5);
    },
  },
};
</script>

<template>
  <v-card>
    <v-card-title>Last 5 Games</v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item v-for="game in getLast5Games()" :key="game.id">
          <v-list-item-title>
            {{ game.player }} vs {{ game.AI }}
          </v-list-item-title>
          <v-list-item-subtitle v-if="game.result === 'win'">
            <span class="success--text">You won!</span>
          </v-list-item-subtitle>
          <v-list-item-subtitle v-else-if="game.result === 'lose'">
            <span class="error--text">You lost!</span>
          </v-list-item-subtitle>
          <v-list-item-subtitle v-else>
            <span class="grey--text">You drew!</span>
          </v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-card-text>
    <v-card-title>Total</v-card-title>
    <v-card-text>
      <v-list>
        <v-list-item>
          <v-list-item-title>Wins</v-list-item-title>
          <h1 class="display-1">{{ totalWins }}</h1>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Losses</v-list-item-title>
          <h1 class="display-1">{{ totalLoses }}</h1>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Draws</v-list-item-title>
          <h1 class="display-1">{{ totalDraws }}</h1>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Games</v-list-item-title>
          <h1 class="display-1">{{ totalGames }}</h1>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Net Wins</v-list-item-title>
          <h1
            class="display-1"
            :class="
              totalWins - totalLoses >= 0 ? 'success--text' : 'error--text'
            "
          >
            {{ totalWins - totalLoses }}
          </h1>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Win to Total Ratio</v-list-item-title>
          <span> {{ (totalWins / totalGames) * 100 || "" }}% </span>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<style scoped>
.v-data-table {
  width: 100%;
}
</style>
