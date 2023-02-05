const keyboard = document.getElementById('keyboard')

function sum(valueA, valueB) {
  console.log(valueA + valueB)
}

function division(valueA, valueB) {
  console.log(valueA/valueB)
}

function percent(valueA, valueB) {
  console.log(valueA * valueB/100)
}

function clear() {
  console.log('limpando')
}

let calculator = {
  division: division,
  sum: sum,
  percent: percent,
  clear: clear
}

function keyPressed(event) {
  let buttonTarget = event.target
  // if(buttonTarget.className == 'oparator') calculator[buttonTarget.id](10, 20)
  // else calculator[buttonTarget.id]()
}

keyboard.addEventListener('click', keyPressed)
