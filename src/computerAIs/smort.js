import { VALID_MOVES } from "../constants.js";

export default class ታሪኩ {
  constructor() {
    this.description = `Smort is the reason I made this game. Play with it and see why. 
      To understand how it works, check this 
      <a onclick="window.open('https://www.youtube.com/watch?v=rudzYPHuewc', '_blank');" 
      target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          youtube video.
      </a>`;

    this.nextMove = null;
  }

  getMove() {
    if (this.nextMove === null) {
      this.nextMove = VALID_MOVES[0];
    }
    return this.nextMove;
  }

  addMove({ player, result }) {
    if (result === "win") {
      switch (player) {
        case "scissor":
          this.nextMove = "paper";
          break;
        case "paper":
          this.nextMove = "rock";
          break;
        case "rock":
          this.nextMove = "scissor";
          break;
      }
    } else {
      this.nextMove = player;
    }
  }
}
