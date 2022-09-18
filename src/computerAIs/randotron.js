import { VALID_MOVES } from "../constants.js";

export default class Randotron {
  constructor() {
    this.description =
      "Randotron is the least effortful AI. It simply chooses a random move.";
  }

  getMove() {
    return VALID_MOVES[Math.floor(1 + Math.random() * 3) - 1];
  }

  addMove() {
    console.log("Randotron doesn't care about your moves.");
  }
}
