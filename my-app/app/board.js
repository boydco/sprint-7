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

  render () {
    let div = document.createElement('div')

    div.id = 'board'
    div.className = 'board'

    this.squares.map((s) => div.appendChild(s.render()))

    return div
  }
}
