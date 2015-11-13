// in app/app.js

'use strict'

import Board from './board'

export default class App {
  constructor (board) {
    this.board = board
  }

  move (e) {
    let winMessage = this.board.move(e.target)

    if (winMessage) {
      let div = document.createElement('div')

      div.className = 'game-over'
      div.innerText = winMessage
      document.body.appendChild(div)

      document.getElementById('board')
        .removeEventListener('click', this.boundMove, false)
      delete this.boundMove
    }
  }

  newGame () {
    this.board = new Board()
    this.boundMove = this.move.bind(this)

    document.body.appendChild(this.board.render())

    document.getElementById('board')
      .addEventListener('click', this.move.bind(this))
  }
}
