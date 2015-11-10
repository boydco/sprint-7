// in app/app.js

'use strict'

import Board from './board'

export default class App {
  constructor (board) {
    this.board = board
  }

  getPlayer (board) {
    let moves = 9 -
      document.getElementById('board').querySelectorAll('.empty').length

    return (moves % 2 === 0) ? 'x' : 'o'
  }

  move (e) {
    if (this.board.move(e.target)) {
      console.log('We have a winner!')
    }
  }

  newGame () {
    this.board = new Board()

    document.body.appendChild(this.board.render())

    document.getElementById('board')
      .addEventListener('click', this.move.bind(this))
  }
}
