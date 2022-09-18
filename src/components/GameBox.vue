<template>
  <v-row>
    <GamePiece piece="Paper" @click="$emit('select', 'Paper')" />
    <GamePiece piece="Rock" @click="$emit('select', 'Rock')" />
    <GamePiece piece="Scissor" @click="$emit('select', 'Scissor')" />
  </v-row>
</template>

<script>
import GamePiece from "./GamePiece";

export default {
  name: "GameBox",
  components: {
    GamePiece,
  },
};
</script>
