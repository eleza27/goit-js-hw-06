const formEl = document.querySelector('form')

const inputEmailEl = document.querySelector('input[type="email"]')

const inputPasswordEl = document.querySelector('input[type="password"]')


const handleInput = (event) => {
    event.preventDefault()
    if (formEl.elements.email.value === '' || formEl.elements.password.value === '') {
        alert('Not valid!')
    }
    else {
        const output = { email: formEl.elements.email.value, password: formEl.elements.password.value }
        console.log(output)
        formEl.reset()
    }
}

formEl.addEventListener('submit', handleInput)


// const handleInput = (event) => {
//     event.preventDefault()
//     if (inputEmailEl.value === '' || inputPasswordEl.value === '') {
//         alert('Not valid!')
//     }
//     else {
//         const output = { email: inputEmailEl.value, password: inputPasswordEl.value }
//         console.log(output)
//     }
// }

// formEl.addEventListener('submit', handleInput)