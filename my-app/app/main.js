// in app/main.js

'use strict'

import App from './app'

window.ticTacToe = new App()
window.ticTacToe.newGame()

/*
//SQUARE

class Square {
  constructor (state) {
    if (state === 'x' || state === 'o') {
      this.state = state
    }
  }

  getMark () {
    return this.state
  }

  makeMark (mark) {
    if (!this.state && (mark === 'x' || mark === 'o')) {
      this.state = mark
      return true
    }
    return false
  }

  render () {
    let div = document.createElement('div')
    let marked = !!this.state

    div.className = marked ? 'player-${this.state}' : 'empty'
    div.innerText = marked ? this.state : ''

    return div
  }
}

//BOARD

class Board {
  constructor () {
    this.squares = new Array(9).fill(null).map(() => {
      return new Square()
    })
  }

  playSquare (square, mark) {
    return this.squares[square].makeMark(mark)
  }

  render () {
    let div = document.createElement('div')

    div.id = 'board'
    div.className = 'board'

    this.squares.map((s) => div.appendChild(s.render()))

    return div
  }
}

let board = new Board()


//APP 

class App {
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
  let currentBoard = oldSquare.parentElement
  let index = Array.prototype.indexOf.call(currentBoard.children, oldSquare)
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

window.ticTacToe = new App()
window.ticTacToe.newGame()

*/

