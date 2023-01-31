const sendMessage = document.getElementById('send-message')
const userMessage = document.getElementById('write-message')
const main = document.querySelector('main')
const personName = document.getElementById('username')

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
}

async function requestResponseAi() {
  if(userMessage.value.trim().length != 0) {
    addMessageInChat('user', userMessage.value)

    let response = await fetch(`https://renilsonmedeiros.github.io/boraCodar/chat/chatapi.py/ai/${userMessage.value}`, {
      method: 'GET',
      mode: 'cors',
    }).then(response => response.json()
    ).catch(err => {
      console.log(err)
      userMessage.value = ''
      return null
    })

    addMessageInChat('person', response.ai)
  }

  userMessage.value = ''
}

sendMessage.addEventListener("click", requestResponseAi)
userMessage.addEventListener("keypress", event => {
  if(event.key == 'Enter') requestResponseAi()
})

