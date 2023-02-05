const keyboard = document.getElementById('keyboard')
const panelCalculation = document.getElementById('calculation-text')
const panelResult = document.getElementById('calculation-result')

var isFirstChangePanel = true
var operatorChosen = false;

let calculator = {
  numberA: 'none',
  numberB: 'none',
  operation: 'none',

  percent: percent,
  division: division,
  multiply: multiply,
  minus: minus,
  sum: sum
}

function keyPressed(event) {
  let targetPressed = event.target
  let targetIsButton = targetPressed.tagName == 'BUTTON' || targetPressed.tagName == 'I'
  
  if(targetIsButton) {
    showInPanel(targetPressed)
  }

  if(targetPressed.id == 'backspace') {
    backspace()
  }

  if(targetPressed.id == 'clear') {
    clear()
  }

  if(targetPressed.tagName == 'I' && targetPressed.id != 'plus-minus' && targetPressed.id != 'equal') {
    chooseOperator(targetPressed)
  }

  if(targetPressed.id == 'equal'){
    equal()
  }
}

function showInPanel(targetPressed) {
  if(targetPressed.id == 'plus-minus' && panelResult.innerHTML != '') {
    var floatNumber = handleDotsAndCommas(panelResult.innerHTML)
    floatNumber = floatNumber * (-1)
    panelResult.innerHTML = convertToBrasilNumberFormat(floatNumber)
    isFirstChangePanel = false
  }

  if(targetPressed.id == 'number'){
    if(isFirstChangePanel) {
      panelResult.innerHTML = targetPressed.innerHTML
      isFirstChangePanel = false
    } else {
      var panelNumber = panelResult.innerHTML
      panelNumber += targetPressed.innerHTML

      if(panelNumber.split(',').length <= 2){
        if(panelNumber.split(',').length > 1) {
          panelResult.innerHTML += targetPressed.innerHTML
        } else {
          panelNumber = handleDotsAndCommas(panelNumber)
          panelResult.innerHTML = convertToBrasilNumberFormat(panelNumber)
        }
      }
    }
  }
}

function convertToBrasilNumberFormat(floatNumber) {
  return floatNumber.toLocaleString('pt-BR', {maximumFractionDigits: 20})
}

function handleDotsAndCommas(textNumber) {
  return parseFloat(textNumber.replaceAll('.', '').replace(',', '.'))
}

function chooseOperator(targetOperator) {
  calculator.numberA = panelResult.innerHTML
  calculator.operation = targetOperator.id

  var iconOperator = document.createElement('i')
  iconOperator.setAttribute('class', targetOperator.className)
  iconOperator.setAttribute('id', targetOperator.id)
  iconOperator.setAttribute('style', 'font-size:1.5rem')

  panelCalculation.innerHTML = ''
  panelCalculation.innerHTML = panelResult.innerHTML
  panelCalculation.appendChild(iconOperator)
  operatorChosen = true
  isFirstChangePanel = true
}

function equal() {
  var numberA = handleDotsAndCommas(calculator.numberA)
  var numberB = handleDotsAndCommas(panelResult.innerHTML)
  var result = calculator[calculator.operation](numberA, numberB)

  
  panelCalculation.innerHTML += convertToBrasilNumberFormat(numberB)
  panelResult.innerHTML = convertToBrasilNumberFormat(result)
}

function clear() {
  panelCalculation.innerHTML = ''
  panelResult.innerHTML = ''
}

function backspace() {
    var panelNumber = String(handleDotsAndCommas(panelResult.innerHTML))
    panelNumber = panelNumber.slice(0, panelNumber.length-1)
    isFloatNumber = convertToBrasilNumberFormat(parseFloat(panelNumber)) != 'NaN'
    panelResult.innerHTML = isFloatNumber ? panelNumber : '' 
}

function percent(numberA, numberB) {
  var result = numberA * numberB/100
  return result
}
function multiply(numberA, numberB) {
  var result = numberA * numberB
  return result
}
function minus(numberA, numberB) {
  var result = numberA - numberB
  return result
}
function sum(numberA, numberB) {
  var result = numberA + numberB
  return result
}
function division(numberA, numberB) {
  if(numberB == 0) {
    return 'Indefinido'
  }

  var result = numberA / numberB
  return result
}

keyboard.addEventListener('click', keyPressed)
