const inputChecked = document.getElementById('dark-mode-input')
const html = document.querySelector('html')
const ilustraDarkImg = document.querySelectorAll('.icon-design')
const inputThemeMode = document.getElementById('dark-mode-input')
const blockCards = document.querySelector('.block-cards')
const selectCity = document.getElementById('city')
const queryButton = document.getElementById('query-select')
const inputName = document.getElementById('name-city')

var cardNode = document.querySelector('.card')
var addCard = false
var stateCity

html.classList = localStorage.getItem('theme') == 'dark' ? 'dark' : '';
inputThemeMode.checked = localStorage.getItem('theme') == 'dark' ? true : false
loadThemeImg()
listCards()
listCity()

function querySelect(event) {
  event.preventDefault()

  var queryName = inputName.value
  var queryCity = selectCity.value

  var showCards = []
  var hiddenCards = []

  var allCards = blockCards.querySelectorAll('.card')
  allCards.forEach(card => {
    if(!card.querySelector('.title')
      .innerText
      .split(' ')
      .includes(queryName)
    ) {
      hiddenCards.push(card)
    } else {
      showCards.push(card)
    }
  })

  showCards.forEach(card => {
    if(card.querySelector('.city').innerText != queryCity
    ) {
      hiddenCards.push(card)
    } else {
      showCards.push(card)
    }
  })

  showCards.forEach(card => card.style.display = 'unset')
  hiddenCards.forEach(card => card.style.display = 'none')
}

async function listCity() {
  var states = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
    .then(response => response.json())
    .catch(err => console.log(err))

  states.forEach(async state => {
    var allCity = 
      await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state.sigla}/municipios`)
      .then(response => response.json())
      .catch(err => console.log(err))

    allCity.forEach(city => {
      var optionCity = document.createElement('option')
      optionCity.setAttribute('value', city.nome)
      optionCity.append(city.nome)
      selectCity.appendChild(optionCity)
    })
  })
}

async function listCards() {
  var cards = await fetch('cardsdata.json')
    .then(response => response.json())
    .catch(err => console.log(err))
  
  cards.forEach(card => {  
    if(addCard)
      blockCards.appendChild(cardNode.cloneNode(true))
    
    blockCards.lastElementChild.id = card.id
    cardNode = blockCards.lastElementChild
        
    var header = cardNode.querySelector('header')
    header.style.cssText = 
    `
      background: url('${card.img}');
      background-size: cover;
      background-position-y: center;
    `

    keys = Object.keys(card)
    keys.forEach(key => {
      var cardValueCurrent = cardNode.querySelector(`.${key}`)
      if(cardValueCurrent != null) {
        cardValueCurrent.innerHTML = card[key]
      }
    });

    addCard = true
    cardNode.style.display = 'unset'
  })
}

function loadThemeImg() {
  var ilustraImgSrcOne = `./assets/ilustra${html.classList}-01.svg`
  var ilustraImgSrcTwo = `./assets/ilustra${html.classList}-02.svg`
  ilustraDarkImg[0].setAttribute('src', ilustraImgSrcOne)
  ilustraDarkImg[1].setAttribute('src', ilustraImgSrcTwo)
}

function changeTheme() {
  html.classList.toggle('dark')

  if(html.classList == 'dark') 
    localStorage.setItem('theme', 'dark')
  else localStorage.clear()

  loadThemeImg()
}

inputChecked.addEventListener('change', changeTheme)
queryButton.addEventListener('click', querySelect)