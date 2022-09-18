<template>
  <div
    @click="$emit('click', piece)"
    :class="['piece', ...(opponent ? ['opponent'] : [])]"
  >
    <img :src="getPiece()" />
  </div>
</template>

<script>
import rock from "../assets/rock.svg";
import paper from "../assets/paper.svg";
import scissors from "../assets/scissors.svg";

export default {
  name: "GamePiece",
  props: {
    piece: {
      type: String,
      required: true,
    },
    opponent: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      rock,
      paper,
      scissors,
    };
  },
  methods: {
    getPiece() {
      if (this.piece === "Rock") {
        return this.rock;
      } else if (this.piece === "Paper") {
        return this.paper;
      } else return this.scissors;
    },
  },
};
</script>

<style scoped>
.piece {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.opponent {
  transform: rotate(180deg);
}
</style>
