const inputEl = document.querySelector('input')

const handleInput = () => {
    console.log(inputEl.value)
    const textEl = document.querySelector('#text')
    textEl.style.fontSize = inputEl.value + 'px'
}


inputEl.addEventListener('input', handleInput)
//  console.log(inputEl.value)