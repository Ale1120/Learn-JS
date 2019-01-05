const celeste = document.getElementById('celeste')
const violet = document.getElementById('violet')
const orange = document.getElementById('orange')
const green = document.getElementById('green')
const buttonStar = document.getElementById('buttonStar')

class Games {
  constructor() {
    this.initialize()
    this.sequence()
  }

  initialize() {
    buttonStar.classList.add('hide')
    this.nivel = 1
    this. colors = {
      celeste,
      violet,
      orange,
      green
    }
  }

  sequence(){
    this.sequence = new Array(10).fill(0).map( n => Math.floor(Math.random() * 4))
  }

}

function starGames() {
  window.games = new Games()
}
