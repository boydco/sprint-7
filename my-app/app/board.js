// in app/board.js

'use strict'

import Square from './square'

const WIN_PATTERNS = [
  'xxx......', '...xxx...', '......xxx',
  'x..x..x..', '.x..x..x.', '..x..x..x',
  'x...x...x', '..x.x.x..'
].join('|')

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

checkForWin (player, pattern) {
  let winPatterns =
      player === 'x' ? WIN_PATTERNS : WIN_PATTERNS.replace(/x/ig, 'o')
  let re = new RegExp(winPatterns)

  return re.test(pattern) ? `${player.toUpperCase()} wins!` : false
}

  checkForTie (pattern) {
    return false
  }

  checkForWinOrTie (squares, player) {
    let pattern = Array.prototype.map.call(squares, (square) => {
      return square.innerText === '' ? '-' : square.innerText
    }).join('').toLowerCase()

    return this.checkForWin(player, pattern) || this.checkForTie(pattern)
  }

  move (oldSquare) {
    let boardElem = oldSquare.parentElement
    let square = Array.prototype.indexOf.call(boardElem.children, oldSquare)
    let player = this.getPlayer()
    let newSquare = this.playSquare(square, this.getPlayer())

    boardElem.replaceChild(newSquare, oldSquare)
    return this.checkForWinOrTie(boardElem.children, player)
  }

  render () {
    let div = document.createElement('div')

    div.id = 'board'
    div.className = 'board'

    this.squares.map((s) => div.appendChild(s.render()))

    return div
  }
}
