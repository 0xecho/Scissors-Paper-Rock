<template>
  <div>
    <v-select
      :value="value"
      :items="ais"
      item-text=""
      label="Select AI"
      @input="handleChange"
      outlined
    ></v-select>
    <v-card flat>
      <v-card-title class="text-center">
        <h1 class="display-1">{{ value }}</h1>
      </v-card-title>
      <v-card-text>
        <div v-html="description"></div>
      </v-card-text>
    </v-card>
    <v-btn
      depressed
      color="primary"
      @click="showRestartDialog = true"
      :disabled="!this.value"
    >
      Restart game
    </v-btn>
    <v-dialog v-model="showRestartDialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Restart game</v-card-title>
        <v-card-text> Are you sure you want to restart the game? </v-card-text>
        <v-card-text>
          If the AI can learn, it will forget everything.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="showRestartDialog = false">
            Cancel
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="showRestartDialog = false && $emit('restart')"
          >
            Restart
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "AISelection",
  props: ["ais", "value", "description"],
  methods: {
    handleChange(e) {
      this.$emit("input", e);
    },
  },
  data() {
    return {
      showRestartDialog: false,
    };
  },
};
</script>
