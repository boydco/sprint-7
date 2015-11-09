// in app/square.js

'use strict'

export default class Square {
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

    div.className = marked ? `player-${this.state}` : 'empty'
    div.innerText = marked ? this.state : ''

    return div
  }
}
