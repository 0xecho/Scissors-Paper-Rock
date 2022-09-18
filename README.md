# Scissors Paper Rock

A simple game of scissors paper rock with a collection of AI algorithms to play against.

## Acknowledgements

- Inspired by [this](https://www.youtube.com/watch?v=rudzYPHuewc) video by [Numberphile](https://www.youtube.com/c/numberphile)

## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=Uno+Momento)

## Custom AI Signatures

- I only had time to add the 4 very basic AI algorithms. I hope to add more in the future. But in the meantime all submissions are welcome.
- If you want to add your own AI, you can do so by adding a new file in the `src/computerAIs` folder. Then add the file name to the `src/computerAIs/index.ts` file.
- The AI should be a class, it should implement two methods: `getMove` and `addMove`.

### Get Move

```
  yourAI.getMove(): ['rock' | 'paper' | 'scissor']
```

| Parameter | Type   | Description |
| :-------- | :----- | :---------- |
| `none`    | `none` |             |

| Return Value | Type     | Description |
| :----------- | :------- | :---------- | ------- | -------------------------------------- |
| move         | `string` | `'rock'     | 'paper' | 'scissor'`(scissor has no trailing`s`) |

This method should return the move that the AI wants to play.

### Add Move

```
  yourAI.addMove({
    player: 'rock' | 'paper' | 'scissor',
    AI: 'rock' | 'paper' | 'scissor',
    result: 'win' | 'lose' | 'draw'
  }): void
```

| Parameter     | Type     | Description |
| :------------ | :------- | :---------- | ------- | ------------------------------------------- |
| `move`        | `object` |             |
| `move.player` | `string` | `'rock'     | 'paper' | 'scissor'` The move that the player played. |
| `move.AI`     | `string` | `'rock'     | 'paper' | 'scissor'` The move that the AI played.     |
| `move.result` | `string` | `'win'      | 'lose'  | 'draw'` The result of the game.             |

This method will be called after every game. It will pass the move that the player played, the move that the AI played and the result of the game.

## Author

- GitHub - [**@0xecho**](https://www.github.com/0xecho)
- LinkedIn - [**Elias Amha**](https://www.linkedin.com/in/elijahma/)
