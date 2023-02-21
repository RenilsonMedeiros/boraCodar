# :joystick: Desafio Site para Encontrar Blocos de Carnaval
Uma gif animada de como ficou o projeto:
<p align="center">
  <img src="https://github.com/RenilsonMedeiros/boraCodar/blob/master/site-carnaval/assets/sitecarnaval.gif">
</p>

## Desafio
Se trata de desenvolver um site contendo formulários de buscas e cards representativos dos blocos de carnaval cadastro no site contendo informações como um título do bloco, uma descrição, a cidade e o seu estado.

## Deploy
O deploy do meu projeto está no servido do GitHub e pode ser acessado através deste [link](https://renilsonmedeiros.github.io/boraCodar/site-carnaval/carnaval.html)

## Design do Projeto
Aqui se encontra o [design do projeto](https://www.figma.com/community/file/1207675804423978995) feito no figma pela Rocketseat :rocket:

## Implementação de um tema Dark
Para melhor acessibilidade ao usuário eu implementei um tema Dark na página manipulando as variáveis do css e usando a lógica do `toggle` do javascript para alternar as classes do html. Aprendizado este que eu nunca havia feito em nenhum outro projeto antes.

## Recurso de busca dos cards
Na gif abaixo é possível perceber que o site detém de um recurso de busca dos blocos carnavalescos. Basta entrar com o nome do bloco, a cidade que desejas e pressionar o botão, tudo é feito automática sem recarregar a página.
<p align="center">
  <img src="https://github.com/RenilsonMedeiros/boraCodar/blob/master/site-carnaval/assets/sitecarnavalquery.gif">
</p>

## API Externa
eu usei uma API externa do IBGE para listagem das cidades do nosso país e adicionada como `option` dentro do `select` no `javascript`.
* `https://servicodados.ibge.gov.br/api/v1/localidades/estados`
* `https://servicodados.ibge.gov.br/api/v1/localidades/estados/ma/municipios`

## Tecnologias
![HTML](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://camo.githubusercontent.com/9fe0ddca8c80fd49703246ca3b9a894ddfdc9c1c80f6ab5de92bbe91471dbab8/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4353533326636f6c6f723d313537324236266c6f676f3d43535333266c6f676f436f6c6f723d464646464646266c6162656c3d)
![JAVASCRIPT](https://camo.githubusercontent.com/3aaee8bf7885dcf0cea8a5647c4514b7d800b1a730d38bce7dadf6bff883378d/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4a61766153637269707426636f6c6f723d323232323232266c6f676f3d4a617661536372697074266c6f676f436f6c6f723d463744463145266c6162656c3d)

## Contatos
* [Linkedin](https://www.linkedin.com/in/renilson-de-medeiros-silva-96225b207/)
* [Instagram](https://www.instagram.com/)
* renilsonmedeiros@gmail.com
