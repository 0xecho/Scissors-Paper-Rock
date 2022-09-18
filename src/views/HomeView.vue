<template>
  <v-container class="mt-10">
    <v-row>
      <v-col cols="3">
        <AISelection
          v-model="selectedAIName"
          :ais="Object.keys(all_algoritms)"
          :description="getAIDescription()"
          @restart="handleRestart"
        />
      </v-col>
      <v-col>
        <template v-if="selectedAIName">
          <v-col>
            <v-row>
              <GameBox @select="handleMove" />
            </v-row>
            <v-row justify="center">
              <h1>Vs</h1>
            </v-row>
            <template v-if="lastAIMove">
              <v-row justify="center">
                <game-piece :piece="lastAIMove" opponent />
              </v-row>
            </template>
            <template v-if="lastStatus">
              <v-row justify="center">
                <h1 class="mt-5" color="primary">{{ lastStatus }}</h1>
              </v-row>
            </template>
          </v-col>
        </template>
        <template v-else>
          <v-card flat>
            <v-card-title class="text-center">
              <h1 class="display-1">Select an AI</h1>
            </v-card-title>
          </v-card>
        </template>
      </v-col>
      <v-col cols="3">
        <game-history
          :history="history"
          :totalDraws="totalDraws"
          :totalWins="totalWins"
          :totalLoses="totalLoses"
          :totalGames="totalWins + totalLoses + totalDraws"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import GamePiece from "@/components/GamePiece.vue";
import AISelection from "../components/AISelection";
import GameBox from "../components/GameBox";

import GameHistory from "@/components/GameHistory.vue";
import ComputerAIs from "@/computerAIs";

const all_algoritms = ComputerAIs;

export default {
  name: "HomeView",

  components: {
    AISelection,
    GamePiece,
    GameBox,
    GameHistory,
  },

  data() {
    return {
      selectedAIName: undefined,
      all_algoritms,
      selectedAI: null,
      lastAIMove: null,
      lastStatus: null,
      history: [],
      totalWins: 0,
      totalLoses: 0,
      totalDraws: 0,
    };
  },

  watch: {
    selectedAIName() {
      const AIClass = all_algoritms[this.selectedAIName];
      if (AIClass) {
        this.selectedAI = new AIClass();
      } else {
        this.selectedAI = null;
      }
    },
  },

  methods: {
    handleRestart() {
      this.lastAIMove = null;
      this.lastStatus = null;
      this.history = [];
      this.totalWins = 0;
      this.totalLoses = 0;
      this.totalDraws = 0;
    },
    handleMove(myMove) {
      const aiMove = this.selectedAI.getMove();
      this.lastAIMove = aiMove;
      const result = this.versus(myMove, aiMove);
      this.lastStatus = result;
      this.history.push({
        player: myMove,
        AI: aiMove,
        result: result,
      });
      this.selectedAI.addMove({ player: myMove, AI: aiMove, result: result });
      if (result === "win") {
        this.totalWins++;
      } else if (result === "lose") {
        this.totalLoses++;
      } else {
        this.totalDraws++;
      }
    },
    versus(myMove, aiMove) {
      if (myMove === aiMove) {
        return "draw";
      } else if (myMove === "Rock") {
        if (aiMove === "Paper") {
          return "lose";
        } else {
          return "win";
        }
      } else if (myMove === "Paper") {
        if (aiMove === "Scissor") {
          return "lose";
        } else {
          return "win";
        }
      } else if (myMove === "Scissor") {
        if (aiMove === "Rock") {
          return "lose";
        } else {
          return "win";
        }
      }
    },
    getAIDescription() {
      return this.selectedAI?.description || "";
    },
  },
};
</script>
