const sendMessage = document.getElementById('send-message')
const userMessage = document.getElementById('write-message')
const main = document.querySelector('main')
const personName = document.getElementById('username')
const messages = document.querySelector('main')

function getObjectName(object) {
  if(object == 'user') {
    return 'Você'
  } else {
    return personName.innerHTML.split(' ')[0]
  }
}

function addMessageInChat(object, objectMessage) {
  var divMessage = document.createElement('div')
  var pInfo = document.createElement('p')
  var pMessage = document.createElement('p')

  var info = document.createTextNode(getObjectName(object) + ' - 11:34')
  var message = document.createTextNode(objectMessage)
  
  divMessage.classList.add(object)
  pInfo.setAttribute('id', 'info')
  pMessage.setAttribute('id', 'message')

  pInfo.appendChild(info)
  pMessage.appendChild(message)
  divMessage.appendChild(pInfo)
  divMessage.appendChild(pMessage)
  main.appendChild(divMessage)

  messages.lastElementChild.scrollIntoView()
}

async function requestResponseAi() {
  if(userMessage.value.trim().length != 0) {
    let userMessageValue = userMessage.value
    userMessage.value = ''

    addMessageInChat('user', userMessageValue)

    let response = await fetch(`http://localhost:5000/ai/${userMessageValue}`, {
      method: 'GET',
      mode: 'cors',
    }).then(response => response.json()
    ).catch(err => {
      console.log(err)
      return null
    })

    addMessageInChat('person', response.ai)
  }
}

sendMessage.addEventListener("click", requestResponseAi)
userMessage.addEventListener("keypress", event => {
  if(event.key == 'Enter') requestResponseAi()
})

