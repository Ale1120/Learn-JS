const celeste = document.getElementById('celeste')
const violet = document.getElementById('violet')
const orange = document.getElementById('orange')
const green = document.getElementById('green')
const buttonStar = document.getElementById('buttonStar')

class Games {
  constructor() {
    this.initialize()
    this.sequence()
    this.nextLv()
  }

  initialize() {
    this.selectColor = this.selectColor.bind(this)
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

  nextLv(){
    this.illuminationSquence()
    this.click()
  }

  numberAColor (number){
    switch (number) {
      case 0:
        return 'celeste'

      case 1:
        return 'violet'

      case 2:
        return 'orange'

      case 3:
        return 'green'


      default:

    }
  }

  illuminationSquence() {
    for (let i = 0; i < this.nivel; i++) {
      const color = this.numberAColor(this.sequence[i])
      setTimeout( () => this.iluminationColor(color), 1000 * i)
    }
  }

  iluminationColor (color){
      this.colors[color].classList.add('light')
      setTimeout( () => this.offColor(color), 350)
  }

  offColor(color) {
    this.colors[color].classList.remove('light')
  }

  click(){
    this.colors.celeste.addEventListener('click', this.selectColor)
    this.colors.green.addEventListener('click', this.selectColor)
    this.colors.violet.addEventListener('click', this.selectColor)
    this.colors.orange.addEventListener('click', this.selectColor)
  }

  selectColor(event){
    console.log(this)
  }

}

function starGames() {
  window.games = new Games()
}
