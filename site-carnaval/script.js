const inputChecked = document.getElementById('dark-mode-input')
const html = document.querySelector('html')
const ilustraDarkImg = document.querySelectorAll('.icon-design')

function changeTheme() {
  html.classList.toggle('dark')
  
  var ilustraImgSrcOne = `./assets/ilustra${html.classList}-01.svg`
  var ilustraImgSrcTwo = `./assets/ilustra${html.classList}-02.svg`
  ilustraDarkImg[0].setAttribute('src', ilustraImgSrcOne)
  ilustraDarkImg[1].setAttribute('src', ilustraImgSrcTwo)
}

inputChecked.addEventListener('change', changeTheme)