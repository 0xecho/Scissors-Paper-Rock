import { VALID_MOVES } from "../constants.js";

export default class Peter {
  constructor() {
    this.description =
      "Peter (AKA re[Pe]a[ter]) is a computer player that always chooses the last move you made.";
    this.lastMove = null;
  }

  getMove() {
    if (this.lastMove === null) {
      this.lastMove = VALID_MOVES[0];
    }
    return this.lastMove;
  }

  addMove({ player }) {
    this.lastMove = player;
  }
}
