// in app/board.js

'use strict'

import Square from './square'

export default class Board {
  constructor () {
    this.squares = new Array(9).fill(null).map(() => {
      return new Square()
    })
  }

  playSquare (square, mark) {
    this.squares[square].makeMark(mark)
    return this.squares[square].render()
  }

  getPlayer (board) {
    let moves = 9 -
      document.getElementById('board').querySelectorAll('.empty').length

    return (moves % 2 === 0) ? 'x' : 'o'
  }

  move (oldSquare) {
    let boardElem = oldSquare.parentElement
    let square = Array.prototype.indexOf.call(boardElem.children, oldSquare)
    let newSquare = this.playSquare(square, this.getPlayer())

    boardElem.replaceChild(newSquare, oldSquare)
  }

  render () {
    let div = document.createElement('div')

    div.id = 'board'
    div.className = 'board'

    this.squares.map((s) => div.appendChild(s.render()))

    return div
  }
}
