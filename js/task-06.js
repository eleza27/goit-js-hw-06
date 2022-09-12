const inputEl = document.querySelector('input')

const handleInput = () => {
    if (inputEl.value.length === 6) {
        inputEl.classList.add('valid')
        inputEl.classList.remove('invalid')
    }
    else {
        inputEl.classList.add('invalid')
        inputEl.classList.remove('valid')
    }
}

inputEl.addEventListener('blur', handleInput)