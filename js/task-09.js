function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const bodyEl = document.body

const buttenEl = document.querySelector('button')

const spanEl = document.querySelector('span')

const handleInput = () => {
  const colorEl = getRandomHexColor()
  bodyEl.style.backgroundColor = colorEl
  spanEl.textContent = colorEl
}

buttenEl.addEventListener('click', handleInput)
