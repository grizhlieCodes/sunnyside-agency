const button = document.querySelector('.nav-button')
const nav = document.querySelector('nav.navigation')

let buttonClicked = false

const toggleButton = (e) => {
    button.classList.toggle('clicked')
    nav.classList.toggle('button-clicked')
    buttonClicked = !buttonClicked
}

button.addEventListener('click', toggleButton)