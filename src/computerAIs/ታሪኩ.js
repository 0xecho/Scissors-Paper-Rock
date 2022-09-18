import { VALID_MOVES } from "../constants.js";

export default class ታሪኩ {
  constructor() {
    this.description =
      "ታሪኩ is a computer player that plays the move that would have won the last game.";
    this.lastMove = null;
  }

  getMove() {
    if (this.lastMove === null) {
      this.lastMove = VALID_MOVES[0];
    }
    return this.getCompliment(this.lastMove);
  }

  addMove({ player }) {
    this.lastMove = player;
  }

  getCompliment(move) {
    switch (move) {
      case "Rock":
        return "Paper";
      case "Paper":
        return "Scissor";
      case "Scissor":
        return "Rock";
      default:
        return "Rock";
    }
  }
}
