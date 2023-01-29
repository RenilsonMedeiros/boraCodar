# -*- coding: utf-8 -*-
from flask import Flask, jsonify, request

app = Flask(__name__)

messages = [
  {
    'id': 10,
    'function': 'calcular',
    'tags': ['calcule', 'some', 'subtraia', 'multiplique', 'divida'],
    'message': 'Um momento que vamos calcular para voce...'
  },
  {
    'id': 11,
    'function': 'responder',
    'tags': ['oi', 'bem?', 'ola', 'dia', 'tarde', 'noite'],
    'message': 'Bem vindo ao Nils Chat AI'
  }
]

class Answer:
  def __init__(self, messages):
    self.messages = messages

  def chooseMessage(self, userMessage):
    userTags = userMessage.split()
    for message in self.messages:
      for tag in message.get('tags'):
        if tag in userTags:
          chosenMessage = {
            'message': message.get('message'),
            'function': message.get('function'),
            'tag': tag
          }
          return chosenMessage
    return {
      'message': 'Não consegui compreender sua mensagem',
      'function': 'default',
      'tag': ['default']
    }

  def executeFunction(self, userMessage, function, tag):
    if function == 'calcular':
      if tag == 'calcule':
        return 'Informe os números e a operação que desejas, ex: some 10 com 10'
      elif tag == 'some':
        quantNum = 0
        num = [0, 0]
        for userTag in userMessage.split():
          if userTag.isdigit():
            num[quantNum] = int(userTag)
            quantNum+=1
            if quantNum == 2: 
              return 'a soma é: {}'.format(num[0] + num[1])

      return 'Não conseguimos realizar o seu cálculo, tente novamente!'

    elif function == 'responder':
      return 'informe o que desejas'

    else:
      return 'tente outra coisa, ex: some algo'

def generateMessage(userMessage):
  answer = Answer(messages);
  chosenMessage = answer.chooseMessage(userMessage) 
  functionMessage = answer.executeFunction(userMessage, chosenMessage['function'], chosenMessage['tag'])

  finalMessage = chosenMessage['message'] +' '+ functionMessage
  
  return finalMessage

# userMessage = "oi, some para mim 16 com 1"
@app.route('/ai/<string:usermessage>', methods=['GET'])
def toAnswerUserMessage(usermessage):
  responseAi = generateMessage(usermessage)
  return responseAi

app.run(port=5000, host='localhost', debug=True)

