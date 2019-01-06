const celeste = document.getElementById('celeste')
const violet = document.getElementById('violet')
const orange = document.getElementById('orange')
const green = document.getElementById('green')
const buttonStar = document.getElementById('buttonStar')
const LAST_LEVEL = 10


class Games {
  constructor() {
    this.initialize()
    this.sequence()
    setTimeout(this.nextLv(), 500)
  }

  initialize() {
    this.nextLv = this.nextLv.bind(this)
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
    this.sequence = new Array(LAST_LEVEL).fill(0).map( n => Math.floor(Math.random() * 4))
  }

  nextLv(){
    this.subnivel = 0
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

  colorANumuber (color){
    switch (color) {
      case 'celeste':
        return 0

      case 'violet':
        return 1

      case 'orange':
        return 2

      case 'green':
        return 3

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

  deleteClick() {
    this.colors.celeste.removeEventListener('click', this.selectColor)
    this.colors.green.removeEventListener('click', this.selectColor)
    this.colors.violet.removeEventListener('click', this.selectColor)
    this.colors.orange.removeEventListener('click', this.selectColor)
  }

  selectColor(event){
    const nameColor = event.target.dataset.color
    const numberColor = this.colorANumuber(nameColor)
    this.iluminationColor(nameColor)

    if( numberColor === this.sequence[this.subnivel]){
      this.subnivel ++
      if(this.subnivel === this.nivel){
        this.nivel++
        //this.deleteClick()
        if (this.nivel === (LAST_LEVEL + 1)) {
            //WINE
        }
        else {
          setTimeout(this.nextLv, 1500)
        }
      }
    }
    else {
      // game over
    }
  }

}

function starGames() {
  window.games = new Games()
}
