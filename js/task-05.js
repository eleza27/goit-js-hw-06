const inputEl = document.querySelector('input')

const outputEl = document.querySelector('#name-output')

// const handleInput = () => {
//     console.log(inputEl.value)
//     outputEl.textContent = inputEl.value
//     if (inputEl.value === '') {
//         outputEl.textContent = 'Anonymous'
//     }
// }

// inputEl.addEventListener('input', handleInput)

const handleInput = (event) => {
    console.log(inputEl.value)
    const value = event.currentTarget.value
    outputEl.textContent = value
    if (value === '') {
        outputEl.textContent = 'Anonymous'
    }
}

inputEl.addEventListener('input', handleInput)