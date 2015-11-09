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

  makePlay (e) {
    let oldSquare = e.target
    let boardElem = oldSquare.parentElement
    let square = Array.prototype.indexOf.call(boardElem.children, oldSquare)
    let newSquare = this.board.playSquare(square, this.getPlayer())

    boardElem.replaceChild(newSquare, oldSquare)
  }

  newGame () {
    this.board = new Board()

    document.body.appendChild(this.board.render())

    document.getElementById('board')
      .addEventListener('click', this.makePlay.bind(this))
  }
}
